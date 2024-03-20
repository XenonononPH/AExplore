//Jebel Jais
var pin1 = document.getElementById("JJ");
var popup1 = document.getElementById("JJ_Pop");

pin1.addEventListener("mouseover", showPopupA);
pin1.addEventListener("mouseout", hidePopupA);

function showPopupA(evt) {
  var iconPos = pin1.getBoundingClientRect();
  popup1.style.left = (iconPos.right + 40) + "px";
  popup1.style.top = (window.scrollY + iconPos.top - 100) + "px";
  popup1.style.display = "block";
}

function hidePopupA(evt) {
  popup1.style.display = "none";
}

//Khatt Springs
var pin2 = document.getElementById("KS");
var popup2 = document.getElementById("KS_Pop");

pin2.addEventListener("mouseover", showPopupB);
pin2.addEventListener("mouseout", hidePopupB);

function showPopupB(evt) {
  var iconPos = pin2.getBoundingClientRect();
  popup2.style.left = (iconPos.right + 40) + "px";
  popup2.style.top = (window.scrollY + iconPos.top - 100) + "px";
  popup2.style.display = "block";
}

function hidePopupB(evt) {
  popup2.style.display = "none";
}

//Jebel Jais Flight Zipline
var pin3 = document.getElementById("JJFZ");
var popup3 = document.getElementById("JJFZ_Pop");

pin3.addEventListener("mouseover", showPopupC);
pin3.addEventListener("mouseout", hidePopupC);

function showPopupC(evt) {
  var iconPos = pin3.getBoundingClientRect();
  popup3.style.left = (iconPos.right + 40) + "px";
  popup3.style.top = (window.scrollY + iconPos.top - 100) + "px";
  popup3.style.display = "block";
}

function hidePopupC(evt) {
  popup3.style.display = "none";
}