const  styleSwitcherToggle = document.querySelector(".style_switcher_toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector('.style_switcher').classList.toggle("open");
});



// hide style switcher on scroll 
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style_switcher").classList.contains("open")){
        document.querySelector('.style_switcher').classList.remove("open");
    }
});


// Theme colors 
const alternateStyles = document.querySelectorAll(".alternate_style");
function setActiveStyle(color){
   alternateStyles.forEach((style)=>{
       if(color===style.getAttribute("title")){
           style.removeAttribute("disabled");
       }
       else{
           style.setAttribute("disabled",true)
       }
   });
}


// theme light 

const dayNight = document.querySelector(".day_night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})