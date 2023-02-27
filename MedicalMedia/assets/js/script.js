"use strict";

let leftIcon=document.querySelector("#news-card .title .left");
let rightIcon=document.querySelector("#news-card .title .right");

function rightCarousel(){
    let activeCard=document.querySelector(".active")
    activeCard.classList.remove("active")
    if(activeCard.nextElementSibling!=null){
        activeCard.nextElementSibling.classList.add("active")
    }
    else{
        activeCard.parentNode.firstElementChild.classList.add("active")
    }

}
function leftCarousel(){
    let activeCard=document.querySelector(".active")
    activeCard.classList.remove("active")
    if(activeCard.previousElementSibling!=null){
        activeCard.previousElementSibling.classList.add("active")
    }
    else{
        activeCard.parentNode.lastElementChild.classList.add("active")
    }

}


rightIcon.addEventListener("click",rightCarousel);
leftIcon.addEventListener("click",leftCarousel);
