//Guide for code from https://www.youtube.com/watch?v=KcdBOoK3Pfw - Changed variable names, ease in and out speed, CSS sizes changed, different images etc.
const carouselSlide = document.querySelector('.slideShow'); //Creates a read only variable for the class slideShow
const carouselImages = document.querySelectorAll('.slideShow img');//Creates a read only variable for the images within class Slideshow
//Buttons
const prevBtn = document.querySelector('#prevBtn'); //Creates a read only variable for the prevBtn
const nextBtn = document.querySelector('#nextBtn'); //Creates a read only variable for the nextBtn

//Counter
let counter = 1; 
const size = carouselImages[0].clientWidth; 
carouselSlide.style.transform = 'translateX(' +(-size * counter)+'px)'; //This ensures that the images stay the same size when they change

//Button Listeners
nextBtn.addEventListener('click',()=>{ //Adding click Function
    if(counter >= carouselImages.length -1) return; //If the counter hits -1, then it will return, ensures that the images keep flowing on the slideShow
    carouselSlide.style.transition = "transform 0.4s ease-in-out" //Gives a 0.5s dealy for the images to ease in and out
    counter++; //Makes the counter add 1 so the slideShow moves in the correct direction
    carouselSlide.style.transform = 'translateX(' +(-size * counter)+ 'px)'; //This ensures that the images stay the same size when they change
});
prevBtn.addEventListener('click',()=>{ //Adding click Function
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.5s ease-in-out" //Gives a 0.5s dealy for the images to ease in and out
    counter--; //Makes the counter minus 1 so the slideShow moves in the correct direction
    carouselSlide.style.transform = 'translateX(' +(-size * counter)+ 'px)'; //This ensures that the images stay the same size when they change
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id === 'lastClone'){ //When the counter reaches the variable "lastClone", it will allow it to go back to the first image and not display a blank screen
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' +(-size * counter)+ 'px)'; //This ensures that the images stay the same size when they change
    }
    if(carouselImages[counter].id === 'firstClone'){ //When the counter reaches the variable "firstClone", it will allow it to go back to the first image and not display a blank screen
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' +(-size * counter)+ 'px)'; //This ensures that the images stay the same size when they change
    }
});

