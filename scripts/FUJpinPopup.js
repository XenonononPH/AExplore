//Al-Bidyah Mosque
var pin1 = document.getElementById("ABM");
var popup1 = document.getElementById("ABM_Pop");

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

//Fujairah Fort
var pin2 = document.getElementById("FF");
var popup2 = document.getElementById("FF_Pop");

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

//Bull Butting
var pin3 = document.getElementById("BB");
var popup3 = document.getElementById("BB_Pop");

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