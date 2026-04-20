/* LRTB — TweaksPanel (design mode) */
var TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 252,
  "density": 1,
  "paper": "#FAF7F2"
}/*EDITMODE-END*/;

function TweaksPanel({ tweaks, setTweaks, visible }) {
  if (!visible) return null;
  const hues = [
    { h: 252, label: "Violet" }, { h: 220, label: "Bleu" },
    { h: 280, label: "Magenta" }, { h: 200, label: "Cyan" },
  ];
  const papers = [
    { c: "#FAF7F2", label: "Crème" }, { c: "#F0F2F8", label: "Givre" },
    { c: "#FFFFFF", label: "Pur" }, { c: "#0B1020", label: "Nuit" },
  ];
  const update = (patch) => {
    const next = { ...tweaks, ...patch };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
  };
  return (
    <div className="tweaks-panel">
      <h5>Tweaks</h5>
      <div className="tweak">
        <label>Teinte accent</label>
        <div className="swatches">
          {hues.map(h => (
            <button key={h.h} className={"sw " + (tweaks.accentHue === h.h ? "on" : "")}
              style={{ background: `oklch(0.55 0.2 ${h.h})` }}
              onClick={() => update({ accentHue: h.h })} title={h.label} />
          ))}
        </div>
      </div>
      <div className="tweak">
        <label>Surface</label>
        <div className="swatches">
          {papers.map(p => (
            <button key={p.c} className={"sw " + (tweaks.paper === p.c ? "on" : "")}
              style={{ background: p.c }}
              onClick={() => update({ paper: p.c })} title={p.label} />
          ))}
        </div>
      </div>
      <div className="tweak">
        <label>Densité : {tweaks.density.toFixed(2)}×</label>
        <input type="range" min="0.8" max="1.3" step="0.05" value={tweaks.density}
          onChange={e => update({ density: +e.target.value })} />
      </div>
    </div>
  );
}
