/* LRTB — Ressources page */
function Ressources() {
  const [cat, setCat] = React.useState("all");
  const cats = ["all", ...Array.from(new Set(D.ressources.map(r => r.cat)))];
  const items = cat === "all" ? D.ressources : D.ressources.filter(r => r.cat === cat);

  return (
    <div>
      <div className="page-head">
        <div className="crumb">04 — Documents officiels</div>
        <h1>Ressources<span style={{ color: "var(--violet)" }}>.</span></h1>
        <p className="sub">Règlements, formulaires d'affiliation, outils pour les arbitres et les entraîneurs. Tout ce qu'il faut pour opérer au sein de la LRTB.</p>
      </div>

      <div className="filter-row">
        <span className="label">Catégorie</span>
        {cats.map(c => (
          <button key={c} className={"filter-chip " + (cat === c ? "on" : "")} onClick={() => setCat(c)}>{c === "all" ? "Tout" : c}</button>
        ))}
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px 80px" }}>
        <div style={{ display: "grid", gap: 16 }}>
          {items.map(r => (
            <div key={r.id} style={{
              display: "grid", gridTemplateColumns: "70px 1fr auto auto",
              gap: 20, alignItems: "center", padding: "22px 24px",
              border: "1px solid var(--line)", borderRadius: 12, background: "var(--paper)",
              cursor: "pointer", transition: "border-color .2s"
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "var(--violet)"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "var(--line)"}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600,
                padding: "8px 0", textAlign: "center",
                background: "var(--grad)", color: "white", borderRadius: 6, letterSpacing: ".1em"
              }}>{r.kind}</div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18 }}>{r.title}</div>
                <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 4 }}>{r.cat} · {r.size}</div>
              </div>
              <div />
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--violet)" }}>
                {r.kind === "LINK" ? "Ouvrir ↗" : r.kind === "VIDEO" ? "Voir ▸" : "Télécharger ↓"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
