/* LRTB — Contact page */
function Contact() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", message: "", subject: "info" });
  const [state, setState] = React.useState("idle");

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) { setState("err"); return; }
    setState("sending");
    setTimeout(() => { setState("ok"); setForm({ name: "", email: "", phone: "", message: "", subject: "info" }); }, 900);
  };
  const upd = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div>
      <div className="page-head">
        <div className="crumb">06 — Contact LRTB</div>
        <h1>Contact.</h1>
        <p className="sub">Demande d'information, affiliation d'un club, presse, partenariat, arbitrage. Le secrétariat de la ligue vous répond sous 5 jours ouvrés.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="big">Secrétariat <br /><span className="grad">de la ligue.</span></div>

          <div className="block">
            <span className="eyebrow">Email</span>
            <div>
              <div className="val"><a href={`mailto:${D.league.email}`}>{D.league.email}</a></div>
              <div className="sub">Réponse sous 5 jours ouvrés</div>
            </div>
          </div>
          <div className="block">
            <span className="eyebrow">Instagram</span>
            <div>
              <div className="val"><a href={D.league.instagramUrl} target="_blank" rel="noreferrer">{D.league.instagram}</a></div>
            </div>
          </div>
          <div className="block">
            <span className="eyebrow">Président</span>
            <div>
              <div className="val">{D.league.president}</div>
              <div className="sub">Fondateur · 2015</div>
            </div>
          </div>
          <div className="block">
            <span className="eyebrow">Affiliation</span>
            <div>
              <div className="val">{D.league.affiliation}</div>
              <div className="sub">Ligue régionale depuis 2015</div>
            </div>
          </div>
          <div className="block">
            <span className="eyebrow">Siège</span>
            <div>
              <div className="val">{D.league.seat}</div>
              <div className="sub">Océan Indien</div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="bg" />
          <form onSubmit={submit}>
            <div>
              <label>Objet</label>
              <select value={form.subject} onChange={upd("subject")} style={{
                width: "100%", padding: "12px 14px", fontSize: 15,
                background: "transparent", border: "1px solid var(--line)",
                borderRadius: 8, color: "var(--ink)", fontFamily: "inherit"
              }}>
                <option value="info">Demande d'information</option>
                <option value="aff">Affiliation d'un club</option>
                <option value="arb">Arbitrage / Formation</option>
                <option value="sel">Sélections 974</option>
                <option value="presse">Presse / Partenariat</option>
              </select>
            </div>
            <div>
              <label>Nom complet *</label>
              <input value={form.name} onChange={upd("name")} placeholder="Votre nom" />
            </div>
            <div className="row">
              <div>
                <label>Email *</label>
                <input type="email" value={form.email} onChange={upd("email")} placeholder="votre.email@exemple.com" />
              </div>
              <div>
                <label>Téléphone</label>
                <input value={form.phone} onChange={upd("phone")} placeholder="+262 692 XX XX XX" />
              </div>
            </div>
            <div>
              <label>Message *</label>
              <textarea value={form.message} onChange={upd("message")} />
            </div>
            <button className="submit" type="submit" disabled={state === "sending"}>
              {state === "sending" ? "Envoi en cours…" : "Envoyer à la ligue →"}
            </button>
            {state === "ok" && <div className="ok">✓ Message transmis au secrétariat LRTB. Réponse sous 5 jours ouvrés.</div>}
            {state === "err" && <div className="err">Merci de renseigner le nom, l'email et le message.</div>}
          </form>
        </div>
      </div>
    </div>
  );
}
