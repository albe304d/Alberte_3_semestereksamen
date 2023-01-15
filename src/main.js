import "./style.css";
import Alpine from "alpinejs";
window.Alpine = Alpine;
Alpine.start();

// Darkmode lightmode toggle
const darkmode = document.querySelector("#dark");
const lightmode = document.querySelector("#light");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

darkmode.addEventListener("click", function () {
  console.log("clickDark");
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
});

lightmode.addEventListener("click", function () {
  console.log("clickLight");
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
});

// MENU
const menu_click = document.querySelector(".menu_click");
var menu_punkter = document.querySelector(".menu_punkter");
var menu_luk = document.querySelector(".menu_luk");

menu_click.addEventListener("click", (e) => {
  menu_punkter.classList.toggle("hidden");
});

menu_luk.addEventListener("click", (e) => {
  menu_punkter.classList.add("hidden");
});

// Cookieboks

const accepterCookie = document.querySelector("#accepter");
const afvisCookie = document.querySelector("#afvis");
const boks = document.querySelector("#cookieboks");

accepterCookie.addEventListener("click", fjernBoks);
afvisCookie.addEventListener("click", fjernBoks);

function fjernBoks() {
  boks.classList.add("hidden");
  sessionStorage.setItem("fjernboks", true);
}

if (sessionStorage.getItem("fjernboks")) {
  boks.classList.add("hidden");
}
