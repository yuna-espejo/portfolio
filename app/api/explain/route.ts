import { NextResponse } from "next/server";

// 🌍 CONFIG DE IDIOMAS
const languageConfig: Record<string, { instruction: string }> = {
  english: {
    instruction: "Respond ONLY in English.",
  },
  spanish: {
    instruction: "Responde SOLO en español.",
  },
  french: {
    instruction: "Réponds UNIQUEMENT en français.",
  },
};

// 🧠 detectar si es SQL
function isSQL(code: string) {
  return /\b(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP)\b/i.test(code);
}

// 🧠 preprocess inteligente
function preprocessCode(code: string) {
  return code
    .replace(/--.*$/gm, "") // comentarios SQL
    .replace(/"""[\s\S]*?"""/g, "") // bloques largos
    .replace(/\n\s*\n/g, "\n") // limpiar espacios
    .trim();
}

// 🧠 fallback multi-idioma
function fallbackByLanguage(language: string) {
  const fallbacks: Record<string, string> = {
    spanish:
      "Este código realiza operaciones como inserciones, actualizaciones y eliminaciones en una base de datos.",
    english:
      "This code performs operations like inserts, updates and deletes in a database.",
    french:
      "Ce code effectue des opérations comme insertions, mises à jour et suppressions.",
  };

  return fallbacks[language] || fallbacks.english;
}

export async function POST(req: Request) {
  try {
    const { code, mode, language } = await req.json();

    const maxWords = mode === "low" ? 25 : 50;

    // 🔥 PREPROCESS
    const cleanCode = preprocessCode(code);

    let finalCode = cleanCode;

    // ⚡ SQL → dividir por queries
    if (isSQL(cleanCode)) {
      const queries = cleanCode.split(";").map(q => q.trim()).filter(Boolean);

      const summary: {
        INSERT: string[];
        UPDATE: string[];
        DELETE: string[];
      } = {
        INSERT: [],
        UPDATE: [],
        DELETE: [],
      };

      queries.forEach((q) => {
        const upper = q.toUpperCase();

        if (upper.startsWith("INSERT")) summary.INSERT.push(q);
        if (upper.startsWith("UPDATE")) summary.UPDATE.push(q);
        if (upper.startsWith("DELETE")) summary.DELETE.push(q);
      });

      finalCode = `
    SQL Operations Summary:

    INSERT count: ${summary.INSERT.length}
    UPDATE count: ${summary.UPDATE.length}
    DELETE count: ${summary.DELETE.length}

    Examples:

    INSERT:
    ${summary.INSERT.slice(0, 1).join("\n")}

    UPDATE:
    ${summary.UPDATE.slice(0, 1).join("\n")}

    DELETE:
    ${summary.DELETE.slice(0, 1).join("\n")}
    `;
    }

    // 🧠 PROMPT (sin idioma, lo controla system)
    const prompt = `
Return EXACTLY this format:

Language: <programming language>
Explanation: <clear explanation, max ${maxWords} words>

RULES:
- Follow the system language strictly
- Explain the GENERAL purpose
- Summarize all operations if multiple exist
- No code
- No extra text
- Each field on a new line

Code:
${finalCode}
`;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3-8b-instruct",
          max_tokens: mode === "low" ? 60 : 120,
          temperature: mode === "low" ? 0.1 : 0.3,
          messages: [
            {
              role: "system",
              content:
                languageConfig[language]?.instruction ||
                "Respond in English.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (!data?.choices) {
      return NextResponse.json({
        text: fallbackByLanguage(language),
        detectedLanguage: "Unknown",
        tokens: 0,
        cost: 0,
      });
    }

    const fullText = data.choices[0].message.content;

    // 🧠 PARSER ROBUSTO
    const cleanText = fullText.replace(/\r/g, "").trim();

    const languageMatch = cleanText.match(/Language:\s*([^\n]+)/i);
    const explanationMatch = cleanText.match(/Explanation:\s*([^\n]+)/i);

    let detectedLanguage = languageMatch?.[1]?.trim() || "Unknown";
    let text = explanationMatch?.[1]?.trim() || "";

    // fallback si falla
    if (!text) {
      text = cleanText.split("\n").slice(1).join(" ");
    }

    // ✂️ limpiar basura
    text = text
      .replace(/```[\s\S]*?```/g, "")
      .replace(/Code:.*$/i, "")
      .trim();

    // ✂️ limitar palabras
    text = text.split(" ").slice(0, maxWords).join(" ");

    // 🔥 fallback si la IA falla
    if (!text || text.length < 5) {
      text = fallbackByLanguage(language);
    }

    return NextResponse.json({
      text,
      detectedLanguage,
      tokens: data.usage?.total_tokens || 0,
      cost: data.usage?.cost || 0,
    });

  } catch (error) {
    console.error(error);
    return NextResponse.json({
      text: "Something went wrong",
      detectedLanguage: "Unknown",
      tokens: 0,
      cost: 0,
    });
  }
}