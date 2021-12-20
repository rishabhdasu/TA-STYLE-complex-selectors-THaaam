let toggleLeft = document.querySelector(".toggle-indicator-left");
let toggleRight = document.querySelector(".toggle-indicator-right");
let toggleContainer = document.querySelector(".toggle-container");


toggleContainer.addEventListener("click", function () {
  
    if(toggleLeft.style.display === "none") {
    toggleLeft.style.display = "block";
    toggleRight.style.display = "none";
   } else {
    toggleLeft.style.display = "none";
    toggleRight.style.display = "block";
   } 
});