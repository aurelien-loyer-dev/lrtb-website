/* LRTB — Topbar */
function Topbar({ page, setPage }) {
  return (
    <header className="topbar">
      <div className="brand" onClick={() => setPage("home")} style={{ cursor: "pointer" }}>
        <div style={{
          width: 40, height: 40, borderRadius: 8, background: "var(--grad)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, letterSpacing: "0.02em"
        }}>LR</div>
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span className="mark">LRTB</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".14em", color: "var(--muted)", marginTop: 4 }}>LIGUE · RÉUNION</span>
        </div>
      </div>
      <nav>
        {D.nav.map(n => (
          <button key={n.id} className={page === n.id ? "active" : ""} onClick={() => setPage(n.id)}>
            <span className="dot" />{n.label}
          </button>
        ))}
      </nav>
      <div className="meta">
        <button className="cta" onClick={() => setPage("contact")}>Espace clubs →</button>
      </div>
    </header>
  );
}
