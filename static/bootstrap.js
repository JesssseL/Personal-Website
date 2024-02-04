//show toast when page loaded
$(document).ready(function(){
  $('#alertToast').toast('show');
});

//allow carousel to be scrolled
$(document).ready(function () {
  $('#carouselExample').carousel();
});

//loading screen stuff
let myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("homePage").style.display = "block";
}
