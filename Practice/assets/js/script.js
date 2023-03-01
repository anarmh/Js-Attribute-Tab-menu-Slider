"use strict";

// let  link=document.querySelector("a");

// let linkedinBtn=document.querySelector(".linkedin");
// let googleBtn=document.querySelector(".google");


// googleBtn.addEventListener("click",function(){
//     link.setAttribute("href","https://www.google.com/")
//     link.setAttribute("target","_blank")
//     link.click()
// })
// linkedinBtn.addEventListener("click",function(){
//     link.setAttribute("href","https://www.linkedin.com/")
//     link.click()
// })

// tab-menu
// let menues = document.querySelectorAll(".headers .item");
// let contents = document.querySelectorAll(".contents .item-text")
// menues.forEach(menu => {
//     menu.addEventListener("click", function (e) {
//         document.querySelector(".active").classList.remove("active")
//         e.target.classList.add("active")

//         contents.forEach(content => {
//             if (this.getAttribute("data-id") == content.getAttribute("data-id")) {
//                 content.classList.remove("d-none");
//             }
//             else {
//                 content.classList.add("d-none");
//             }

//         });
//     })
// });

// slider

let prevLeft=document.querySelector(".left");
let nxtRight=document.querySelector(".right");


nxtRight.addEventListener("click",function(){
   let activeImage=document.querySelector(".active")
   activeImage.classList.remove("active")
   if(activeImage.nextElementSibling.classList!=null){
    activeImage.nextElementSibling.classList.add("active")
   }
   else{
    activeImage.parentNode.firstChild.classList.add("active")
   }
})


