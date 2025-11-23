let moon=document.querySelector(".fa-moon");
let body=document.querySelector("body");
let header=document.querySelector("header");
let logo=document.querySelector(".image-logo");
let links=document.getElementsByClassName(".der-link")
var innerpart=document.querySelectorAll(".inner-part");
let condition=true;
    moon.addEventListener("click",()=>{
    if(condition){
        console.log("clicked");
        moon.classList.toggle("fa-sun");
        moon.classList.toggle("fa-moon")
        body.classList.toggle("dark-mode");
        header.classList.toggle("header-dark");
        innerpart.forEach(function(el){
        el.classList.toggle('inner-partforlightmode'); 
        });
        logo.src="dark-mode-logo.png";
        condition=false;
    }
    else{
        logo.src="editkaro-logo.png"
        moon.classList.toggle("fa-sun");
        moon.classList.toggle("fa-moon")
        body.classList.toggle("dark-mode");
        header.classList.toggle("header-dark");
        condition=true;
    }
});




let menu_icon=document.querySelector(".fa-bars");
let link=document.querySelector(".links");
menu_icon.addEventListener("click",()=>{
    console.log("clicked");
    link.classList.toggle("links");
    menu_icon.classList.toggle("fa-xmark");
    menu_icon.classList.toggle("fa-bars");
});

