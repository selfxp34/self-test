(() => {
  "use strict";
  const e = document.querySelector(".mobile-nav"),
    t = document.querySelector(".header__burger");
  t.addEventListener("click", () => {
    e.classList.contains("mobile-nav-active")
      ? (e.classList.remove("mobile-nav-active"),
        (t.innerHTML =
          '<svg width="30" height="17" viewBox="0 0 30 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <line x1="0.75" y1="1.25" x2="29.25" y2="1.25" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>\n        <line x1="0.75" y1="8.30859" x2="29.25" y2="8.30859" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>\n        <line x1="0.75" y1="16.25" x2="29.25" y2="16.25" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>\n      </svg>'))
      : (e.classList.add("mobile-nav-active"),
        (t.innerHTML =
          '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <line x1="0.979126" y1="23.9808" x2="23.9601" y2="0.999874" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>\n        <line x1="2.03966" y1="1.021" x2="25.0206" y2="24.002" stroke="#142B35" stroke-width="1.5" stroke-linecap="round"/>\n        </svg>\n        '));
  });
  const s = document.querySelectorAll(".section__card-item"),
    n = document.querySelectorAll(".dots-wrapper span"),
    i = document.querySelectorAll(".slider__body-2 > div"),
    o = document.querySelectorAll(".dots-wrapper-slider span");
  let c = 0;
  function r(e) {
    s.forEach((e) => e.classList.remove("active")),
      n.forEach((e) => e.classList.remove("active")),
      i.length > 0 && i.forEach((e) => e.classList.remove("active")),
      o.length > 0 && o.forEach((e) => e.classList.remove("active"));
    const t = e % 3;
    s[t].classList.add("active"),
      n[t].classList.add("active"),
      i.length > 0 && i[t].classList.add("active"),
      o.length > 0 && o[t].classList.add("active");
  }
  setInterval(function () {
    c++, r(c);
  }, 5e3),
    n.forEach((e, t) => {
      e.addEventListener("click", () => {
        (c = t), r(c);
      });
    }),
    o.forEach((e, t) => {
      e.addEventListener("click", () => {
        (c = t), r(c);
      });
    }),
    r(c);
  const l = document.getElementById("phone");
  IMask(l, { mask: "000_000_0000" });
})();
