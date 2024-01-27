"use strict";
const myForm=document.getElementById('my-form');
const passField=myForm.querySelector('#password');
const passToggle=myForm.querySelector('#pass-toggle');
const eyeLocker=myForm.querySelector('#line');

passToggle.addEventListener("click",togglePss)
myForm.addEventListener('submit', function(event) {
//  reset password field for submtion security
  passField.setAttribute("type", "password");
  eyeLocker.style.opacity="0";
});
function togglePss(){
    if (passField.getAttribute("type") === "password") {
        passField.setAttribute("type", "text");
        eyeLocker.style.opacity="1";
      } else {
        passField.setAttribute("type", "password");
        eyeLocker.style.opacity="0";
      }
}
