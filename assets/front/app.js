require('./app.scss');

let main = document.getElementById('main-menu');
let list = document.getElementById('responsive-list');
let closeButton = document.getElementById('close-button');

let closeAction = ['opacity-0', 'scale-95', 'hidden'];
let openAction = ['opacity-100', 'scale-100', 'shown'];

function hide() {
  if(list.classList.contains('shown')) {
    list.classList.remove(...openAction);
    list.classList.add(...closeAction);
  }
}

function show() {
  if(list.classList.contains('hidden')) {
    list.classList.remove(...closeAction);
    list.classList.add(...openAction);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  main.onclick = function() { show(); }
  closeButton.onclick = function() { hide(); }
});

// Sélectionner l'élément par son ID
let barres = document.querySelectorAll(".barre");
let cards = document.querySelectorAll(".card");

// Ajouter un écouteur d'événements pour le hover
cards.forEach(function(card, index) {
  card.addEventListener("mouseover", function () {
    // Changer la couleur de fond de l'élément
    barres[index].classList.remove('w-16');
    barres[index].classList.add('active');
  });

  // Ajouter un autre écouteur d'événements pour le "mouseout" (lorsque la souris quitte l'élément)
  card.addEventListener("mouseout", function () {
    // Remettre la couleur de fond originale de l'élément
    barres[index].classList.remove('active');
    barres[index].classList.add('w-16');
  });
});
