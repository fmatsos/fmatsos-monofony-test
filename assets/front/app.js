require('./app.scss');

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
