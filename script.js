"use strict";
const documentShow_Modal = document.querySelectorAll(".show-modal");
const documentModal = document.querySelector(".modal");
const documentOverlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const modalFunc = function () {
  documentModal.classList.toggle("hidden");
  documentOverlay.classList.toggle("hidden");
};

for (let i = 0; i < documentShow_Modal.length; i++)
  documentShow_Modal[i].addEventListener("click", modalFunc);

btnCloseModal.addEventListener("click", modalFunc);
documentOverlay.addEventListener("click", modalFunc);

document.addEventListener('keydown', function(event){
    console.log(event.key);
    event.key == 'Escape' && !documentModal.classList.contains('hidden')?
    modalFunc(): console.log(); 
    
})

