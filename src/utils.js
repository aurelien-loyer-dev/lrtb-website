/* LRTB — shared utilities (loaded before all JSX components) */
var D = window.TL_DATA;

function useReveal() {
  React.useEffect(function () {
    var els = document.querySelectorAll(".reveal");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach(function (el) { io.observe(el); });
    return function () { io.disconnect(); };
  });
}

function clubById(id) {
  return D.clubs.find(function (c) { return c.id === id; }) || { name: id };
}
