const $ = v => document.querySelector(v);
const nav = $("#nav");
const toggle = $("#toggle");
toggle.addEventListener("click", () => nav.classList.toggle("active"));