
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
const form = document.getElementById('form');
const formData = document.querySelectorAll(".formData"); // Selectionne les différentes sections du formulaire sous forme de ??
const modalBtnCross = document.querySelector(".close"); // Selectionne l'icone permettant la fermeture de la modale
const firstName = document.querySelector("#first"); // Selectionne l'input first name
const lastName = document.querySelector("#last"); // Selectionne l'input last name
const mail = document.querySelector("#email"); // Selectionne l'input Email
const birthdate = document.querySelector("#birthdate"); // Selectionne l'input birthdate
const quantity = document.querySelector("#quantity"); // Selectionne l'input quantity - Participation tournois
const radioInputs = document.getElementsByName('location');
const checkBox1 = document.querySelector("#checkbox1");
const checkBox1Label = document.querySelector('#checkbox1-label');
const textControl = document.querySelectorAll(".text-control"); // Selectionne tous les éléments avec la class .text-control
const submitBtn = document.querySelector("#submitBtn"); // Selectionne le boutton submit du formulaire


// Regex Variables
const regexName = /^([\u00C0-\u017Fa-zA-Z]{1,}(?:[-]?[\u00C0-\u017Fa-zA-Z]{1,}))$/;
const regexMail = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;
const regexQuantity = /\b([0-9]|[1-9][0-9])\b/;


// Validation Variables
let formValid = false;
let firstValide = false;
let lastValide = false;
let mailValide = false;
let birthdateValide = false;
let quantityValide = false;
let radioValide = false;
let checkboxValide = false;


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



// Vérification de la validité l'input first(prénom) lors de la saisie
firstName.addEventListener("input", function(event) {
  event.preventDefault();
  if(regexName.test(event.target.value)) {
    formData[0].setAttribute("data-error-visible", false);
    formData[0].removeAttribute("data-error");
    return true;
  } else {
    formData[0].setAttribute("data-error-visible", true);
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    console.log('error input prénom');
    return false;
  };
})

// Vérification de la validité de l'input last(nom) lors de la saisie
lastName.addEventListener("input", function(event) {
  event.preventDefault();
  if(regexName.test(event.target.value)) {
    formData[1].setAttribute("data-error-visible", false);
    formData[1].removeAttribute("data-error");
    return true;
  } else {
    formData[1].setAttribute("data-error-visible", true);
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    console.log('error input nom');
    return false;
  };
})

// Vérification de la validité de l'input email lors de la saisie
mail.addEventListener("input", function(event) {
  event.preventDefault();
  if(regexMail.test(event.target.value)) {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].removeAttribute("data-error");
    return true;
  } else {
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", "Veuillez enter une adresse mail valide.");
    console.log('error input email');
    return false;
  };
})

// Vérification de la validité de l'input number(nombre de tournois) lors de la saisie
quantity.addEventListener("input", function(event) {
  event.preventDefault();
  if(regexQuantity.test(event.target.value)) {
    formData[4].setAttribute("data-error-visible", false);
    formData[4].removeAttribute("data-error");
    return true;
  } else {
    formData[4].setAttribute("data-error-visible", true);
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre entre 0 et 99.");
    console.log('error input nombre tournois');
    return false;
  };
})


function checkInputsValidation() {
  if(regexName.test(firstName.value) === false) {
    formData[0].setAttribute("data-error-visible", true);
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    console.log('error input prénom');
  }else {
    formData[0].setAttribute("data-error-visible", false);
    formData[0].removeAttribute("data-error");
    firstValide = true;
    //return formValid = false;
  }
  if(regexName.test(lastName.value) === false) {
    formData[1].setAttribute("data-error-visible", true);
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    console.log('error input nom');
  }else {
    formData[1].setAttribute("data-error-visible", false);
    formData[1].removeAttribute("data-error");
    lastValide = true;
    //return formValid = false;
  }
  if(regexMail.test(mail.value) === false) {
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", "Veuillez enter une adresse mail valide.");
    console.log('error input mail');
  }else {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].removeAttribute("data-error");
    mailValide = true;
    //return formValid = false;
  }
  if(birthdate.value == "") {
    formData[3].setAttribute("data-error-visible", true);
    formData[3].setAttribute("data-error", "Veuillez enter une date de naissance valide.");
    console.log('error input birth');
  }else {
    formData[3].setAttribute("data-error-visible", false);
    formData[3].removeAttribute("data-error");
    birthdateValide = true;

    //return formValid = false;
  }
  if(regexQuantity.test(quantity.value) === false) {
    formData[4].setAttribute("data-error-visible", true);
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre entre 0 et 99.");
    console.log('error input tournois');
  }else {
    formData[4].setAttribute("data-error-visible", false);
    formData[4].removeAttribute("data-error");
    quantityValide = true;
    //return formValid = false;
  }
  //https://stackoverflow.com/a/51760293
  if(!(radioInputs[0].checked || radioInputs[1].checked || radioInputs[2].checked || radioInputs[3].checked || radioInputs[4].checked || radioInputs[5].checked)) {
    formData[5].setAttribute("data-error-visible", true);
    formData[5].setAttribute("data-error", "Vous devez selectionner une ville.");
    console.log('error input radio');
  }else {
    formData[5].setAttribute("data-error-visible", false);
    formData[5].removeAttribute("data-error");
    radioValide = true;
    //return formValid = false;
  }
  if(!checkBox1.checked) {
    checkBox1Label.setAttribute("data-error-visible" , true);
    checkBox1Label.setAttribute("data-error", "Vous devez accepter les conditions d'utilisation.");
    console.log('error input checkbox');
  }else {
    checkBox1Label.setAttribute("data-error-visible", false);
    checkBox1Label.removeAttribute("data-error");
    checkboxValide = true;
    //return formValid = false;
  }
  if(firstValide && lastValide && mailValide && birthdateValide && quantityValide && radioValide && checkboxValide) {
    return formValid = true;
  }
}



// Function pour l'envoi du formulaire
submitBtn.addEventListener('click', validate);

function validate(event) {
  event.preventDefault();
  checkInputsValidation();

  if(formValid === true) {
    form.style.display = "none";
  }

}