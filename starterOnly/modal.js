
// Injecte une class '.responsive' à l'élément '.myTopnav'. La fonction est appelée via le HTML au clic sur le menu hamburger
// Permet de toggle le menu avec un clic sur l'icone hamburger - le display des éléments passe de 'none' à 'block'
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnCross = document.querySelector(".close"); // Récupère l'icone permettant la fermeture de la modale

// launch modal event
// ajoute un event listener sur les 2 bouttons de la hero section (boutton visible en fonction de la résolution - media query)
// la fonction callback est appelée au click et permet d'afficher la modal qui change son display 'none' en display 'block'
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
// fonction intégré en callback de l'event listener sur les bouttons avec la class '.modal-btn'
// elle modifie le display de la modal (none -> block) ce qui la fait apparaitre
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
// ajout d'un event listener sur la croix qui permet la fermeture de la modale
// au click la fonction callback est appelée et permet de fermer la modal en changant son display 'block' en display 'none'
modalBtnCross.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = 'none';
}

