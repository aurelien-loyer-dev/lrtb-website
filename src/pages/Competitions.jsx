/* LRTB — Competitions page */
function Competitions() {
  const [tab, setTab] = React.useState("calendar");
  const [cat, setCat] = React.useState("all");
  const [selected, setSelected] = React.useState(D.competitions[0].id);
  const [division, setDivision] = React.useState("senior");

  const today = "2026-04-20";
  const filtered = React.useMemo(() => {
    const a = cat === "all" ? D.competitions : D.competitions.filter(x => x.cat === cat);
    return [...a].sort((x, y) => (x.date + x.startTime).localeCompare(y.date + y.startTime));
  }, [cat]);
  const sel = D.competitions.find(a => a.id === selected) || D.competitions[0];
  const upcoming = filtered.filter(c => c.date >= today);

  const catLabel = { tournoi: "Tournoi", championnat: "Championnat", finale: "Finale", selection: "Sélection", entrainement: "Entraînement" };

  return (
    <div>
      <div className="page-head">
        <div className="crumb">02 — Saison 2026</div>
        <h1>Compétitions<span style={{ color: "var(--violet)" }}>.</span></h1>
        <p className="sub">Calendrier officiel de la ligue — championnat 974, tournois open, sélections territoriales et entraînements mutualisés des clubs.</p>
        <div className="tab-row">
          <button className={"tab-btn " + (tab === "calendar" ? "on" : "")} onClick={() => setTab("calendar")}>Calendrier</button>
          <button className={"tab-btn " + (tab === "standings" ? "on" : "")} onClick={() => setTab("standings")}>Classements</button>
        </div>
      </div>

      {tab === "calendar" && <>
        <div className="planning-head">
          <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>Prochain <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--muted)" }}>rendez-vous</span></h2>
          <div className="next-card">
            <div className="pulse" />
            <div className="eyebrow" style={{ color: "rgba(255,255,255,.5)" }}>À VENIR · {upcoming.length} ÉVÉNEMENTS</div>
            <div className="t">{upcoming[0]?.title}</div>
            <div className="d">{upcoming[0]?.date.split("-").reverse().join(".")} · {upcoming[0]?.startTime} – {upcoming[0]?.endTime} · {upcoming[0]?.location}</div>
            <div className="count">
              <div><span className="n">{D.competitions.filter(c => c.cat === "tournoi").length}</span>tournois</div>
              <div><span className="n">{D.competitions.filter(c => c.cat === "championnat").length}</span>journées</div>
              <div><span className="n">{D.competitions.filter(c => c.cat === "selection").length}</span>stages</div>
            </div>
          </div>
        </div>

        <div className="filter-row filter-row-sticky">
          <button className={"filter-chip " + (cat === "all" ? "on" : "")} onClick={() => setCat("all")}>Tout</button>
          <button className={"filter-chip " + (cat === "tournoi" ? "on" : "")} onClick={() => setCat("tournoi")}>Tournois</button>
          <button className={"filter-chip " + (cat === "championnat" ? "on" : "")} onClick={() => setCat("championnat")}>Championnat</button>
          <button className={"filter-chip " + (cat === "selection" ? "on" : "")} onClick={() => setCat("selection")}>Sélections</button>
          <button className={"filter-chip " + (cat === "entrainement" ? "on" : "")} onClick={() => setCat("entrainement")}>Entraînements</button>
        </div>

        <div className="planning-grid">
          <div>
            {filtered.map(a => {
              const [y, mo, d] = a.date.split("-");
              const mName = new Date(+y, +mo - 1, +d).toLocaleDateString("fr-FR", { month: "short" }).replace(".", "");
              const host = clubById(a.host);
              return (
                <div key={a.id}
                  className={"activity " + (selected === a.id ? "selected" : "") + (a.date < today ? " past" : "")}
                  onClick={() => setSelected(a.id)}>
                  <div className="date">
                    <span className="day">{+d}</span>
                    <span className="mon">{mName} {y}</span>
                  </div>
                  <div className="main">
                    <span className={"pill " + a.cat}>{catLabel[a.cat] || a.cat}</span>
                    <h4>{a.title}</h4>
                    <p>{a.location}{host.name && host.name !== "LRTB" ? ` · ${host.name}` : ""}</p>
                  </div>
                  <div className="meta">
                    <span className="time">{a.startTime} – {a.endTime}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="map-card">
              <div className="head">
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16 }}>{sel.title}</div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4 }}>{sel.location}</div>
              </div>
              <iframe src={`https://maps.google.com/maps?q=${encodeURIComponent(sel.location + ", La Réunion")}&z=12&output=embed`} />
              <a className="link" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sel.location)}`} target="_blank" rel="noreferrer">→ Ouvrir dans Google Maps</a>
            </div>
          </div>
        </div>
      </>}

      {tab === "standings" && <>
        <div className="filter-row">
          <button className={"filter-chip " + (division === "senior" ? "on" : "")} onClick={() => setDivision("senior")}>Senior</button>
          <button className={"filter-chip " + (division === "m18" ? "on" : "")} onClick={() => setDivision("m18")}>M18</button>
        </div>

        <div className="standings">
          <table>
            <thead>
              <tr>
                <th style={{ width: 60 }}>#</th>
                <th>Club</th>
                <th style={{ textAlign: "center" }}>J</th>
                <th style={{ textAlign: "center" }}>V</th>
                <th style={{ textAlign: "center" }}>N</th>
                <th style={{ textAlign: "center" }}>D</th>
                <th style={{ textAlign: "center" }}>+</th>
                <th style={{ textAlign: "center" }}>−</th>
                <th style={{ textAlign: "center" }}>Diff</th>
                <th style={{ textAlign: "center" }}>Pts</th>
              </tr>
            </thead>
            <tbody>
              {D.standings[division].map(r => {
                const c = clubById(r.club);
                const medal = r.rk === 1 ? "🥇" : r.rk === 2 ? "🥈" : r.rk === 3 ? "🥉" : "";
                return (
                  <tr key={r.rk}>
                    <td className="rk"><span className="grad">{r.rk}</span> {medal}</td>
                    <td style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>{c.name}</td>
                    <td style={{ textAlign: "center" }}>{r.p}</td>
                    <td style={{ textAlign: "center", color: "var(--blue)" }}>{r.w}</td>
                    <td style={{ textAlign: "center" }}>{r.d}</td>
                    <td style={{ textAlign: "center", color: "#b14" }}>{r.l}</td>
                    <td style={{ textAlign: "center", color: "var(--muted)" }}>{r.pf}</td>
                    <td style={{ textAlign: "center", color: "var(--muted)" }}>{r.pa}</td>
                    <td style={{ textAlign: "center" }}>{r.pf - r.pa > 0 ? "+" : ""}{r.pf - r.pa}</td>
                    <td className="pts">{r.pts}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>}
    </div>
  );
}
