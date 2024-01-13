const header = document.querySelector("header")
const nav = document.querySelector("nav")
const menu = document.querySelector(".box-sandwich")
const headerNav = document.querySelector(".header-navgation")
const headerRedes = document.querySelector(".header-redes")
const hr1 = document.querySelector(".hr1")
const hr2 = document.querySelector(".hr2")
const hr3 = document.querySelector(".hr3")


window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120)
    nav.classList.toggle("sticky", window.scrollY > 120)
 
})





menu.addEventListener("click",()=>{
menu.classList.toggle("menu")
hr1.classList.toggle("menu")
hr2.classList.toggle("menu")
hr3.classList.toggle("menu")
headerNav.classList.toggle("menu")
headerRedes.classList.toggle("menu")

})