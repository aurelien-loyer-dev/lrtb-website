/* LRTB — Clubs page */
function Clubs() {
  const [side, setSide] = React.useState("all");
  const [selected, setSelected] = React.useState(D.clubs[0].id);
  const clubs = side === "all" ? D.clubs : D.clubs.filter(c => c.side === side);
  const sel = D.clubs.find(c => c.id === selected) || D.clubs[0];

  return (
    <div>
      <div className="page-head">
        <div className="crumb">01 — Réseau LRTB</div>
        <h1>Les {D.clubs.length} clubs<span style={{ color: "var(--violet)" }}>.</span></h1>
        <p className="sub">Le tchoukball réunionnais est porté par {D.clubs.length} associations affiliées, réparties sur l'ensemble du territoire. Cliquez sur un point pour voir les détails du club.</p>
      </div>

      <div className="filter-row">
        <span className="label">Microrégion</span>
        {[["all", "Toutes"], ["nord", "Nord"], ["sud", "Sud"], ["est", "Est"], ["ouest", "Ouest"]].map(([k, l]) => (
          <button key={k} className={"filter-chip " + (side === k ? "on" : "")} onClick={() => setSide(k)}>{l}</button>
        ))}
      </div>

      <div className="map-section">
        <div className="island-map">
          <svg viewBox="0 0 100 90" preserveAspectRatio="xMidYMid meet">
            <path d="M 20 20 Q 15 30 14 42 Q 12 52 18 62 Q 24 74 38 80 Q 52 84 66 80 Q 82 76 86 62 Q 90 48 84 34 Q 78 22 64 16 Q 50 10 36 14 Q 26 16 20 20 Z"
              fill="oklch(0.96 0.01 260)" stroke="oklch(0.5 0.15 260)" strokeWidth="0.3" strokeDasharray="1 1" />
            <text x="50" y="6"  fontSize="2.4" textAnchor="middle" fill="oklch(0.5 0.05 260)" fontFamily="monospace" letterSpacing="0.3">NORD</text>
            <text x="50" y="88" fontSize="2.4" textAnchor="middle" fill="oklch(0.5 0.05 260)" fontFamily="monospace" letterSpacing="0.3">SUD</text>
            <text x="4"  y="48" fontSize="2.4" textAnchor="middle" fill="oklch(0.5 0.05 260)" fontFamily="monospace" letterSpacing="0.3">OUEST</text>
            <text x="96" y="48" fontSize="2.4" textAnchor="middle" fill="oklch(0.5 0.05 260)" fontFamily="monospace" letterSpacing="0.3">EST</text>

            {clubs.map(c => {
              const isSel = c.id === selected;
              return (
                <g key={c.id} style={{ cursor: "pointer" }} onClick={() => setSelected(c.id)}>
                  {isSel && <circle cx={c.x} cy={c.y} r="4.5" fill="none" stroke="oklch(0.55 0.22 280)" strokeWidth="0.4" opacity="0.6">
                    <animate attributeName="r" from="3" to="7" dur="1.6s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.7" to="0" dur="1.6s" repeatCount="indefinite" />
                  </circle>}
                  <circle cx={c.x} cy={c.y} r={isSel ? "2.2" : "1.6"}
                    fill={isSel ? "oklch(0.55 0.22 280)" : "oklch(0.5 0.22 222)"}
                    stroke="white" strokeWidth="0.4" />
                  <text x={c.x} y={c.y - 3} fontSize="1.8" textAnchor="middle"
                    fill={isSel ? "oklch(0.35 0.15 280)" : "oklch(0.3 0.05 260)"}
                    fontFamily="sans-serif" fontWeight={isSel ? 700 : 500}>
                    {c.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <aside className="club-card">
          <div className="tag">{sel.side.toUpperCase()} · LRTB</div>
          <h3>{sel.name}</h3>
          <div className="loc">{sel.city}, La Réunion</div>

          <div className="grid">
            <div><span className="k">Fondé en</span><span className="v">{sel.founded}</span></div>
            <div><span className="k">Licenciés</span><span className="v">{sel.licensed}</span></div>
            <div><span className="k">Microrégion</span><span className="v" style={{ textTransform: "capitalize" }}>{sel.side}</span></div>
            <div><span className="k">Couleurs</span><span className="v" style={{ fontSize: 14 }}>{sel.colors}</span></div>
          </div>

          <div className="links">
            <div><span className="k">Email</span><a href={`mailto:${sel.email}`}>{sel.email}</a></div>
            <div><span className="k">Instagram</span><a>{sel.insta}</a></div>
          </div>
        </aside>
      </div>

      <div className="clubs-grid">
        {D.clubs.map(c => (
          <div key={c.id} className={"club-row " + (selected === c.id ? "on" : "")} onClick={() => setSelected(c.id)}>
            <div className="dot" style={{ background: c.id === selected ? "var(--violet)" : "var(--blue)" }} />
            <div>
              <h4>{c.name}</h4>
              <div className="meta">{c.city} · {c.licensed} licenciés · Depuis {c.founded}</div>
            </div>
            <div className="side" style={{ textTransform: "uppercase" }}>{c.side}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
