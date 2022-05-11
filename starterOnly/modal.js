
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
const modalbg = document.querySelector(".bground"); // Selectionne la div parent du formulaire
const modalBtn = document.querySelectorAll(".modal-btn"); // Selectionne les 2 bouttons qui ouvrent la modal
const formData = document.querySelectorAll(".formData"); // Selectionne les différentes sections du formulaire
const modalBtnCross = document.querySelector(".close"); // Selectionne l'icone permettant la fermeture de la modale
const firstName = document.querySelector("#first"); // Selectionne l'input first name
const lastName = document.querySelector("#last"); // Selectionne l'input last name
const mail = document.querySelector("#email"); // Selectionne l'input Email
const birthdate = document.querySelector("#birthdate"); // Selectionne l'input birthdate
const quantity = document.querySelector("#quantity"); // Selectionne l'input quantity - Participation tournois



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
// au click la fonction callback est appelée et permet de fermer la modal en changant son display 'block' en display 'none'.
modalBtnCross.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = 'none';
}



// Gestion input first (prénom)
firstName.addEventListener("input", function(event) {
  event.preventDefault();
  if(/^([\u00C0-\u017Fa-zA-Z]{1,}(?:[-]?[\u00C0-\u017Fa-zA-Z]{1,}))$/.test(event.target.value)) {
    formData[0].setAttribute("data-error-visible", false);
    formData[0].removeAttribute("data-error");
  } else {
    formData[0].setAttribute("data-error-visible", true);
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    console.log('error input prénom');
  };
})

// Gestion input last (nom)
lastName.addEventListener("input", function(event) {
  event.preventDefault();
  if(/^([\u00C0-\u017Fa-zA-Z]{1,}(?:[-]?[\u00C0-\u017Fa-zA-Z]{1,}))$/.test(event.target.value)) {
    formData[1].setAttribute("data-error-visible", false);
    formData[1].removeAttribute("data-error");
  } else {
    formData[1].setAttribute("data-error-visible", true);
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    console.log('error input nom');
  };
})

// Gestion input email
mail.addEventListener("input", function(event) {
  event.preventDefault();
  if(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim.test(event.target.value)) {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].removeAttribute("data-error");
  } else {
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", "Veuillez enter une adresse mail valide.");
    console.log('error input email');
  };
})

// Gestion input number (nombre de tournois)
quantity.addEventListener("input", function(event) {
  event.preventDefault();
  if(/\b([0-9]|[1-9][0-9])\b/.test(event.target.value)) {
    formData[4].setAttribute("data-error-visible", false);
    formData[4].removeAttribute("data-error");
  } else {
    formData[4].setAttribute("data-error-visible", true);
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre entre 0 et 99");
    console.log('error input nombre tournois');
  };
})