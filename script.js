const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Work on buttons
const prevButt = document.querySelector('#prevButt');
const nextButt = document.querySelector('#nextButt');

//Add a counter to monitor on which image we're on
let counter = 1;

//Set the width to slide to know how do we need to slide
const size = carouselImages[0].clientWidth;

