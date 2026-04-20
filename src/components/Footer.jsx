/* LRTB — Footer */
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="huge">LRTB</div>
      <div className="footer-grid">
        <div>
          <h4>La Ligue</h4>
          <p style={{ color: "rgba(255,255,255,.7)", fontSize: 14, lineHeight: 1.55, margin: 0, maxWidth: "38ch" }}>
            Ligue Réunionnaise de Tchoukball. Organe officiel affilié à la Fédération Française de Tchoukball, fondé en 2015.
          </p>
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>{D.nav.map(n => <li key={n.id}><a onClick={() => setPage(n.id)} style={{ cursor: "pointer" }}>{n.label}</a></li>)}</ul>
        </div>
        <div>
          <h4>Clubs affiliés</h4>
          <ul>{D.clubs.slice(0, 6).map(c => <li key={c.id} onClick={() => setPage("clubs")} style={{ cursor: "pointer" }}>{c.name}</li>)}</ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>{D.league.email}</li>
            <li>{D.league.instagram}</li>
            <li>{D.league.seat}</li>
            <li>Président · {D.league.president}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <span>© 2026 Ligue Réunionnaise de Tchoukball · Affiliée FFTB</span>
        <span>LA RÉUNION · 974</span>
      </div>
    </footer>
  );
}
