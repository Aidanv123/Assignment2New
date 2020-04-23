//Hamburger Navigation code from https://www.youtube.com/watch?v=gXkqy0b4M5g - Also for main.css navigation code.
//Creating a function called navSlide
function navSlide(){
    //creates a read only variable called burger, which links to the .burgernav
    const burger = document.querySelector('.burgernav');
    //creates a read only variable called nav, which links to the .navigationLinks
    const nav = document.querySelector('.navigationLinks');
    //creates a read only variable called navLinks, which links to the .navigationLinks images
    const navLinks = document.querySelectorAll('.navigationLinks li');

    // Toggles the const nav when clicked
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    //Animate links //For each link we run a function, which is why we have used querySelectorAll on line 9, to use all images
    navLinks.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation=''
        } else{
        link.style.animation = `navLinkFade 0.5s ease forwards $(index / 7 + 0.3)s`;//Here is where it does the actual animation
        }
    });
    //Burger animation
    burger.classList.toggle('toggle');
});

}
  //Then the function navSlide is ran, which was first created
  navSlide();


//Guide for code from https://www.youtube.com/watch?v=KcdBOoK3Pfw - Changed variable names, ease in and out speed, CSS sizes changed, different images etc.
const Slide = document.querySelector('.slideShow'); //Creates a read only variable for the class slideShow
const Images = document.querySelectorAll('.slideShow img');//Creates a read only variable for the images within class Slideshow
//Buttons
const prevBtn = document.querySelector('#prevBtn'); //Creates a read only variable for the prevBtn
const nextBtn = document.querySelector('#nextBtn'); //Creates a read only variable for the nextBtn

//Counter
let counter = 1; 
const size = Images[0].clientWidth; 
Slide.style.transform = 'translateX(' +(-size * counter)+'px)'; //This ensures that the images stay the same size when they change

//Button Listeners
nextBtn.addEventListener('click',()=>{ //Adding click Function
    if(counter >= Images.length -1) return; //If the counter hits -1, then it will return, ensures that the images keep flowing on the slideShow
    Slide.style.transition = "transform 0.4s ease-in-out" //Gives a 0.5s dealy for the images to ease in and out
    counter++; //Makes the counter add 1 so the slideShow moves in the correct direction
    Slide.style.transform = 'translateX(' +(-size * counter)+ 'px)'; //This ensures that the images stay the same size when they change
});
prevBtn.addEventListener('click',()=>{ //Adding click Function
    if(counter <= 0) return; //If the counter is <= to 0 then it returns to the first image
    Slide.style.transition = "transform 0.5s ease-in-out" //Gives a 0.5s dealy for the images to ease in and out
    counter--; //Makes the counter minus 1 so the slideShow moves in the correct direction
    Slide.style.transform = 'translateX(' +(-size * counter)+ 'px)'; //This ensures that the images stay the same size when they change
});

Slide.addEventListener('transitionend', ()=>{
    if(Images[counter].id === 'lastClone'){ //When the counter reaches the variable "lastClone", it will allow it to go back to the first image and not display a blank screen
        Slide.style.transition = "none";
        counter = Images.length - 2;
        Slide.style.transform = 'translateX(' +(-size * counter)+ 'px)'; //This ensures that the images stay the same size when they change
    }
    if(Images[counter].id === 'firstClone'){ //When the counter reaches the variable "firstClone", it will allow it to go back to the first image and not display a blank screen
        Slide.style.transition = "none";
        counter = Images.length - counter;
        Slide.style.transform = 'translateX(' +(-size * counter)+ 'px)'; //This ensures that the images stay the same size when they change
    }
}); //1 Issue being the slider will crash until the page has been reset

//Adding a message function when clicking 'Contact Me'
function emailMe() { //Calls the function created within the HTML
    alert("Email Recieved") //sends an alert saying "Email Recieved" when the button is clicked
}

//Real Time Clock JS
//Code is from https://www.youtube.com/watch?v=C2CrBlGvbEM - Changed variable names and size of text etc.
//Creating the variables
function realTimeClock(){
    var rtClock = new Date();
    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();

//Adding AM and PM system
var amPM = (hours < 12) ? "AM" : "PM";
//Convert the hours component to a 12hr format
hours = (hours > 12) ? hours - 12 : hours;
//Padding the hours, minutes and seconds with leading zeros
hours = ("0" + hours).slice(-2);
minutes = ("0" + minutes).slice(-2);
seconds = ("0" + seconds).slice(-2);
//Display the clock
document.getElementById('clock').innerHTML =
    hours + "  :  " + minutes + "  :  " + seconds + " " + amPM;
var t = setTimeout(realTimeClock, 500);
}

//Hiding a Div //Code found from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp Was edited 
//Creates a function within JS called clickHere
function hiddenButton(clickHere) {
    var hidden = document.getElementById("hiddenDiv");  //Calls for the hiddenDiv element of the portfolio page
    if (hidden.style.display === "none") { //Compares if hiddenDiv is none
      hidden.style.display = "block";//If it is then it displays it as a block
    } else { //Else it will display it as none
      hidden.style.display = "none";
    }
  }