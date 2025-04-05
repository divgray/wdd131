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


let speed = 14;
let temp = 29;
let feelTemp = document.getElementById('feelTemp')
feelTemp.innerHTML = buildWC(speed, temp);

function buildWC(speed, temp) {
  let feelTEMP = document.getElementById('feelTemp')

  let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
  console.log(wc)

  wc = Math.floor(wc);

  wc = (wc > temp) ? temp : wc;

  console.log(wc)
  feelTemp.innerHTML = wc;
  return wc + "°";
}