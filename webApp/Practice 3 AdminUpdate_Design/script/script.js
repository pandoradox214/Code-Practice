
 /*Navigation*/

 function FuncNav(){
  var x = document.getElementById("nav");
  if (x.className === "navigation") {
    x.className += " responsive";
  }
  else {
    x.className = "navigation";
  }
} 

window.onscroll = function() {myFunction()};
  var header = document.getElementById("main-nav");
  var sticky = header.offsetTop;

  function myFunction() {
  if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
  } 
  else {
      header.classList.remove("sticky");
  }
 }
/*
var stickscroll = document.getElementById("stick-scroll");
var navbar = document.getElementById("main-nav");

var navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  var scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    header.classList.add('navbarOffsetMargin');
  } 
  else {
    navbar.classList.remove('sticky');
    header.classList.remove('navbarOffsetMargin');
  }
});*/
/*Navigation*/

/*Script for automatic slideshow*/
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 11){
        counter = 1;
      }
    }, 5000);

/*Script for automatic slideshow*/

/*Script for opening or expanding an image*/
document.querySelectorAll
('.mealList img').forEach(image =>{
image.onclick=() =>{
document.querySelector('.open-image').style.display='block';
document.querySelector('.open-image img').src = image.getAttribute('src')
}
})
document.querySelector('.open-image span').onclick=() =>{
    document.querySelector('.open-image').style.display='none';

}
/*Script for opening or expanding an image*/




