
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
const modalBody = document.getElementById('modal-body'); // Selectionne la section body de la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Selectionne les 2 bouttons qui ouvrent la modal
const form = document.getElementById('form'); // Selectionne le formulaire
const formData = document.querySelectorAll(".formData"); // Selectionne les différentes sections du formulaire sous forme de NodeList
const modalBtnCross = document.querySelector(".close"); // Selectionne l'icone permettant la fermeture de la modale
const firstName = document.querySelector("#first"); // Selectionne l'input first name
const lastName = document.querySelector("#last"); // Selectionne l'input last name
const mail = document.querySelector("#email"); // Selectionne l'input Email
const birthdate = document.querySelector("#birthdate"); // Selectionne l'input birthdate
const quantity = document.querySelector("#quantity"); // Selectionne l'input quantity - Participation tournois
const radioInputs = document.getElementsByName('location'); // Selectionne les inputs radio sous forme de Nodelist
const checkBox1 = document.querySelector("#checkbox1"); // Selectionne l'input checkbox conditions d'utilisation
const checkBox1Label = document.querySelector('#checkbox1-label'); // Selectionne le label de la checkbox conditions d'utilisation
const textControl = document.querySelectorAll(".text-control"); // Selectionne tous les éléments avec la class .text-control
const submitBtn = document.querySelector("#submitBtn"); // Selectionne le boutton submit du formulaire
const modalConfirmation = document.querySelector("#confirmation-message");


// Regex Variables
const regexName = /^([\u00C0-\u017Fa-zA-Z]{1,}(?:[-]?[\u00C0-\u017Fa-zA-Z]{1,}))$/;
const regexMail = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;
const regexQuantity = /\b([0-9]|[1-9][0-9])\b/;


// Validation Variables
let formValid = false; // Validation globale du formulaire
let firstValide = false; // Validation de l'input firstName
let lastValide = false; // Validation de l'input lasttName
let mailValide = false; // Validation de l'input mail
let birthdateValide = false; // Validation de l'input birthdate
let quantityValide = false; // Validation de l'input quantity
let radioValide = false; // Validation de l'input radio
let checkboxValide = false; // Validation de l'input checkbox condition d'utilisation


// launch modal event
// Ajoute un event listener sur les 2 bouttons de la 'hero section' (boutton visible en fonction de la résolution - media query)
// la fonction callback est appelée au click et permet d'afficher la modal qui change son display 'none' en display 'block'
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
// Fonction intégré en callback de l'event listener sur les bouttons avec la class '.modal-btn'
// Elle modifie le display de la modal (none -> block) ce qui la fait apparaitre
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
// Ajout d'un event listener sur la croix qui permet la fermeture de la modale
// Au click la fonction callback est appelée et permet de fermer la modal en changant son display 'block' en display 'none'.
modalBtnCross.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = 'none';
}


// Vérification de la validité des inputs directement lors de la saisie grace aux Regex
// Validité de l'input first(prénom) lors de la saisie
firstName.addEventListener("input", function(event) {
  event.preventDefault();
  if(regexName.test(event.target.value)) {
    formData[0].setAttribute("data-error-visible", false);
    formData[0].removeAttribute("data-error");
  } else {
    formData[0].setAttribute("data-error-visible", true);
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    console.log('error input prénom');
  };
})

// Validité de l'input last(nom) lors de la saisie
lastName.addEventListener("input", function(event) {
  event.preventDefault();
  if(regexName.test(event.target.value)) {
    formData[1].setAttribute("data-error-visible", false);
    formData[1].removeAttribute("data-error");
  } else {
    formData[1].setAttribute("data-error-visible", true);
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    console.log('error input nom');
  };
})

// Validité de l'input email lors de la saisie
mail.addEventListener("input", function(event) {
  event.preventDefault();
  if(regexMail.test(event.target.value)) {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].removeAttribute("data-error");
  } else {
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", "Veuillez enter une adresse mail valide.");
    console.log('error input email');
  };
})

// Validité de l'input number(nombre de tournois) lors de la saisie
quantity.addEventListener("input", function(event) {
  event.preventDefault();
  if(regexQuantity.test(event.target.value)) {
    formData[4].setAttribute("data-error-visible", false);
    formData[4].removeAttribute("data-error");
  } else {
    formData[4].setAttribute("data-error-visible", true);
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre entre 0 et 99.");
    console.log('error input nombre tournois');
  };
})


// Fonction ajoutée en Callback de l'eventListener du boutton d'envoi du formulaire
// Vérifie si l'ensemble des champs obligatoires ont été remplis et de manière correcte
function checkInputsValidation() {
  if(regexName.test(firstName.value) === false) {
    formData[0].setAttribute("data-error-visible", true);
    formData[0].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    console.log('error input prénom');
  }else {
    formData[0].setAttribute("data-error-visible", false);
    formData[0].removeAttribute("data-error");
    firstValide = true;
  }

  if(regexName.test(lastName.value) === false) {
    formData[1].setAttribute("data-error-visible", true);
    formData[1].setAttribute("data-error", "Veuillez entrer 2 caractères ou plus pour le champ du nom.");
    console.log('error input nom');
  }else {
    formData[1].setAttribute("data-error-visible", false);
    formData[1].removeAttribute("data-error");
    lastValide = true;
  }

  if(regexMail.test(mail.value) === false) {
    formData[2].setAttribute("data-error-visible", true);
    formData[2].setAttribute("data-error", "Veuillez enter une adresse mail valide.");
    console.log('error input mail');
  }else {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].removeAttribute("data-error");
    mailValide = true;
  }

  if(birthdate.value == "") {
    formData[3].setAttribute("data-error-visible", true);
    formData[3].setAttribute("data-error", "Vous devez entrer votre date de naissance.");
    console.log('error input birth');
  }else {
    formData[3].setAttribute("data-error-visible", false);
    formData[3].removeAttribute("data-error");
    birthdateValide = true;
  }

  if(regexQuantity.test(quantity.value) === false) {
    formData[4].setAttribute("data-error-visible", true);
    formData[4].setAttribute("data-error", "Vous devez entrer un nombre entre 0 et 99.");
    console.log('error input tournois');
  }else {
    formData[4].setAttribute("data-error-visible", false);
    formData[4].removeAttribute("data-error");
    quantityValide = true;
  }

  //https://stackoverflow.com/a/51760293
  if(!(radioInputs[0].checked || radioInputs[1].checked || radioInputs[2].checked || radioInputs[3].checked || radioInputs[4].checked || radioInputs[5].checked)) {
    formData[5].setAttribute("data-error-visible", true);
    formData[5].setAttribute("data-error", "Vous devez choisir une ville.");
    console.log('error input radio');
  }else {
    formData[5].setAttribute("data-error-visible", false);
    formData[5].removeAttribute("data-error");
    radioValide = true;
  }

  if(!checkBox1.checked) {
    checkBox1Label.setAttribute("data-error-visible" , true);
    checkBox1Label.setAttribute("data-error", "Vous devez acceptez les termes et conditions.");
    console.log('error input checkbox');
  }else {
    checkBox1Label.setAttribute("data-error-visible", false);
    checkBox1Label.removeAttribute("data-error");
    checkboxValide = true;
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

  if(formValid) {
    form.style.display = "none";
    modalConfirmation.style.display = "flex";
    modalConfirmation.style.justifyContent = "center";
    modalConfirmation.style.alignItems = "center";
    modalConfirmation.style.flexDirection = 'column';
    modalConfirmation.style.height = "680px";
    document.getElementById('btnCloseConfirmation').addEventListener('click', closeModal);
  }
}