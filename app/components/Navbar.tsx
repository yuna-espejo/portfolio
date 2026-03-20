import Link from "next/link";

export default function Navbar() {
  return (
      <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 60px",
        alignItems: "center",
        background: "rgba(2,6,23,0.6)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Link href="/" style={{ fontWeight: "bold" }}>
        Yuna
      </Link>

      <div style={{ display: "flex", gap: "30px" }}>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}