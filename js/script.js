// ***********************************typing aanimation *************************************
const nav_toggler = document.querySelector('.nav_toggler');
const responsiveNavigation = document.querySelector(".responsiveNavigation");
const submit = document.getElementById('submit');

nav_toggler.addEventListener("click",()=>{
    responsiveNavigation.style.display="block";
    document.body.backgroundcolor="red";
    console.log("clicked");

})

var typed = new Typed(".typing",{
    strings:[" ","Web Designer","Web Developer","Freelancer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true 
})
// const sendEmail = (e) => {
//     e.preventDefault();
//     emailjs.sendForm('service_b667ujv', 'template_igli6ee', e.target, '9BNVOVsjqrJWYGVUv')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         }); 
// submit.addEventListener("submit",()=>{
//     sendEmail();
// });