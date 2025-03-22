/*Hamburger menu */
const hamMenu = document.getElementsByClassName(".ham-menu");

const offScreenMenu = document.getElementsByClassName(".off-screen-menu");

hamMenu.getElementsByClassName("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

/*get dates js */
alert(document.lastModified);

let oLastModif = new Date(document.lastModified);

let nLastModif = Date.parse(document.lastModified);

const pattern = /last_modif\s*=\s*([^;]*)/;

const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
const lastModif = Date.parse(document.lastModified);

if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;

  if (isFinite(lastVisit)) {
    alert("This page has been changed!");
  }
}
