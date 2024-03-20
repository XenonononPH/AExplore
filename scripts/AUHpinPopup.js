//Shiek Zayed Mosque
var pin1 = document.getElementById("ShkZMosq");
var popup1 = document.getElementById("ShkZMosq_Pop");

pin1.addEventListener("mouseover", showPopupA);
pin1.addEventListener("mouseout", hidePopupA);

function showPopupA(evt) {
  var iconPos = pin1.getBoundingClientRect();
  popup1.style.left = (iconPos.left + -410) + "px";
  popup1.style.top = (window.scrollY + iconPos.top - 80) + "px";
  popup1.style.display = "block";
}

function hidePopupA(evt) {
  popup1.style.display = "none";
}

//Ferrari World
var pin2 = document.getElementById("FW");
var popup2 = document.getElementById("FW_Pop");

pin2.addEventListener("mouseover", showPopupB);
pin2.addEventListener("mouseout", hidePopupB);

function showPopupB(evt) {
  var iconPos = pin2.getBoundingClientRect();
  popup2.style.left = (iconPos.right + 40) + "px";
  popup2.style.top = (window.scrollY + iconPos.top - 80) + "px";
  popup2.style.display = "block";
}

function hidePopupB(evt) {
  popup2.style.display = "none";
}

//Yas Water World
var pin3 = document.getElementById("Yas");
var popup3 = document.getElementById("Yas_Pop");

pin3.addEventListener("mouseover", showPopupC);
pin3.addEventListener("mouseout", hidePopupC);

function showPopupC(evt) {
  var iconPos = pin3.getBoundingClientRect();
  popup3.style.left = (iconPos.right + 40) + "px";
  popup3.style.top = (window.scrollY + iconPos.top - 80) + "px";
  popup3.style.display = "block";
}

function hidePopupC(evt) {
  popup3.style.display = "none";
}

//Louvre
var pin4 = document.getElementById("Louv");
var popup4 = document.getElementById("Louv_Pop");

pin4.addEventListener("mouseover", showPopupD);
pin4.addEventListener("mouseout", hidePopupD);

function showPopupD(evt) {
  var iconPos = pin4.getBoundingClientRect();
  popup4.style.left = (iconPos.left + -410) + "px";
  popup4.style.top = (window.scrollY + iconPos.top - 80) + "px";
  popup4.style.display = "block";
}

function hidePopupD(evt) {
  popup4.style.display = "none";
}