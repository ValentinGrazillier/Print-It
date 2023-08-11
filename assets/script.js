const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Initialisation de la Slide Active
let indexSlideActive = 0;

// Sélection des éléments pour la création d'Event Listener

document.addEventListener("DOMContentLoaded", function () {
	const FlècheGauche = document.querySelector('.arrow_left');
	const FlècheDroite = document.querySelector('.arrow_right');

	// Ajout d'Event Listener et de console.log afin de vérifier le fonctionnement

	FlècheGauche.addEventListener('click', function() {
		// Vérification fonctionnement flèche
		console.log("Clic sur la flèche de gauche");
		// Création d'une boucle
		if (indexSlideActive === 0) {
			indexSlideActive = slides.length-1; 
		} else {
		// Ajout au défilement au clic
		indexSlideActive--}
		carrousel (slides[indexSlideActive].image, slides[indexSlideActive].tagLine)
 	});

	FlècheDroite.addEventListener('click', function() {
		// Vérification fonctionnement flèche
		console.log("Clic sur la flèche de droite");
		// Création d'une boucle
		if (indexSlideActive === slides.length-1) {
			indexSlideActive = 0; 
		} else {
		// Ajout du défilement au clic
		indexSlideActive++}
		carrousel (slides[indexSlideActive].image, slides[indexSlideActive].tagLine)
  	});
});

// Sélection des élements pour la création des points

document.addEventListener("DOMContentLoaded", function() {
    const Points = document.querySelector('.dots');

	// Création des points en fonction du nombre d'éléments dans le carrousel

	slides.forEach(function(slide, index) {
		const Point = document.createElement('div');
		Point.classList.add('dot');
	
		if (index === 0) {
			Point.classList.add('dot_selected'); 
		}
	
		Points.appendChild(Point);
	});
});

// Récupération des informations de chaque Slide

function carrousel (image, tagLine) {
	const Image = document.querySelector('#banner .banner-img');
	const Tagline = document.querySelector('#banner p');

	let Prefixe = "./assets/images/slideshow/"

	Image.src = Prefixe + image

	Tagline.innerHTML = tagLine

	// Changement de point actif 

	const TableauPoints = document.querySelectorAll('.dot');

	// Suppression du point actif au clic

	TableauPoints.forEach(element => {
		element.classList.remove('dot_selected');
	})

	TableauPoints[indexSlideActive].classList.add('dot_selected');
}