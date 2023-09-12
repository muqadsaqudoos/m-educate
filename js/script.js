burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')



burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-resp');
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
})

function myfunction(){
    alert("Congratulation! Your request has been submitted.")
}
function myfunction2(){
    alert("Welcome to M-Educate!")
}