// "use strict";
const myForm=document.getElementById('my-form');
console.log(myForm)
const passField=myForm.querySelector('#password');
const passToggle=myForm.querySelector('#pass-toggle');
const eyeLocker=myForm.querySelector('#line');

passToggle.addEventListener("click",togglePss)

function togglePss(){
    if (passField.getAttribute("type") === "password") {
        passField.setAttribute("type", "text");
        eyeLocker.style.opacity="1";
      } else {
        passField.setAttribute("type", "password");
        eyeLocker.style.opacity="0";
      }
}
function formReset(e){
    e.target.preventDefault()
    console.log('yahooo')
}