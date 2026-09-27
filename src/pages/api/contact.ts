import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    const { name, email, message, website } = body as {
      name?: string;
      email?: string;
      message?: string;
      website?: string;
    };

    // Honeypot — bot submitted the hidden field
    if (website) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validation
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;

    if (!apiKey) {
      if (import.meta.env.DEV) {
        // Dev fallback: log and return success so the form works locally
        console.log('[contact] No RESEND_API_KEY — message logged only:', { name, email, message });
        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      console.error('[contact] RESEND_API_KEY not set in production');
      return new Response(JSON.stringify({ ok: false, error: 'Configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: 'Portfolio <noreply@yunaespejo.com>',
      to: 'y.espejo.santana@gmail.com',
      replyTo: email,
      subject: `Mensaje de contacto — ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p><p><strong>Mensaje:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
    });

    if (error) {
      console.error('[contact] Resend error:', error);
      return new Response(JSON.stringify({ ok: false, error: 'Send failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return new Response(JSON.stringify({ ok: false, error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ ok: false, error: 'Method not allowed' }), {
    status: 405,
    headers: { 'Content-Type': 'application/json' },
  });
};
