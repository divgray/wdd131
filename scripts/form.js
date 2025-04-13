document.getElementById("currentyear").innerText = new Date().getFullYear();

const currentYear = document.getElementById("currentyear");
currentYear.innerText = new Date().getFullYear();

document.querySelector("#lastModified").innerHTML = `Last modified: ${document.lastModified}`;


const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];
  
const select = document.querySelector('#productName');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  select.appendChild(option);
});

  
const counter = localStorage.getItem('reviewCount') || 0;
localStorage.setItem('reviewCount', Number(counter) + 1);
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('count').textContent = localStorage.getItem('reviewCount');
});