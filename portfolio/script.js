"use strict";

const tabs = document.querySelectorAll(".pi");
const tabsContainer = document.querySelector(".tabs");
const tabsContent = document.querySelectorAll(".operations");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".pi");

  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operation__tab--active"));

  // Activate tab
  clicked.classList.add("tab--active");

  // Activate content area
  document
    .querySelector(`.operation__tab--${clicked.dataset.tab}`)
    .classList.add("operation__tab--active");
});

