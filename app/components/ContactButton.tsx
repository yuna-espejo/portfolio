"use client";

import { useState } from "react";
import { Mail, MessageCircle, Linkedin } from "lucide-react";

export default function ContactButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CONTAINER */}
      <div
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "flex-end",
          zIndex: 1000,
        }}
      >
        {/* BOTONES (solo si está abierto) */}
        {open && (
          <>
            <a
              href="mailto:y.espejo.santana@gmail.com"
              style={btn}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <Mail size={16} /> Email
            </a>

            <a
              href="https://wa.me/34722332309"
              target="_blank"
              style={btn}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <MessageCircle size={16} /> WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/yuna-espejo-santana/"
              target="_blank"
              style={btn}
              onMouseEnter={hoverIn}
              onMouseLeave={hoverOut}
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </>
        )}

        {/* BOTÓN PRINCIPAL */}
        <div
          onClick={() => setOpen(!open)}
          style={mainBtn}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.1)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          <Mail size={20} />
        </div>
      </div>
    </>
  );
}

/* 🎨 STYLES */

const btn: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 14px",
  borderRadius: "10px",
  background: "rgba(15,23,42,0.9)",
  border: "1px solid #1e293b",
  color: "white",
  textDecoration: "none",
  backdropFilter: "blur(10px)",
  transition: "0.2s",
};

const mainBtn: React.CSSProperties = {
  width: "55px",
  height: "55px",
  borderRadius: "50%",
  background: "#e11d48",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  cursor: "pointer",

  // 👇 MUCHO más sutil
  boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
  border: "1px solid rgba(255,255,255,0.08)",

  transition: "0.2s",
};

/* ✨ HOVER */

function hoverIn(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.transform = "translateX(-5px)";
  e.currentTarget.style.borderColor = "#e11d48";
}

function hoverOut(e: React.MouseEvent<HTMLAnchorElement>) {
  e.currentTarget.style.transform = "translateX(0)";
  e.currentTarget.style.borderColor = "#1e293b";
}