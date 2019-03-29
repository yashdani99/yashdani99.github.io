var i = 0;
var txt = "Hello, I am a student at UC Davis majoring in Compuer Science and minoring in Technology Managment." +
          " I am currently a Web Developer and IT Support for an anthropology lab and a tutor for other students learning" +
          " Python, C, or C++."

var txt2 = "I am passionate about using technology to provide others with the resources they need to leave a positive " +
           "impact on the world. I love playing sports, solving riddles, and spending time with friends. If you have " +
           "any questions send me an email at yadani@ucdavis.edu."

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
  if (i >= txt.length) {
    setTimeout(nextAppear(), 5000);
  }
  profileIn();
}

function nextAppear() {
  document.getElementById("next").style.display = "block";
}

function text2Prep() {
  document.getElementById("next").style.display = "none";
  i = 0;
  document.getElementById("introtext").style.display = "none";
  text2In();
}

function text2In() {
  if (i < txt2.length) {
    document.getElementById("introtext2").innerHTML += txt2.charAt(i);
    i++;
    setTimeout(text2In, speed);
  }
}
