var i = 0;
var txt = "Hello, I am a student at UC Davis majoring in Compuer Science and minoring in Technology Managment." +
          " I am currently a Web Developer and IT Support for an anthropology lab and a tutor for other students learning" +
          " Python, C, or C++.  If you have any questions send me an email at yadani@ucdavis.edu. "

var speed = 20;

function profileIn() {
  $(document).ready(function(){
     $("#profile").fadeIn(2000);
     $("#name").fadeIn(3000);
     $("#quote").fadeIn(4000);
    });
}

window.onload = function textIn() {
  if (i < txt.length) {
    document.getElementById("introtext").innerHTML += txt.charAt(i);
    i++;
    setTimeout(textIn, speed);
  }
  profileIn();
}
