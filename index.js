//Objekte
const navElem1 = document.getElementById("elem1");
const navElem2 = document.getElementById("elem2");
const navElem3 = document.getElementById("elem3");
const navElem4 = document.getElementById("elem4");
const navMenuButtonImage1 = document.getElementById("nav-btn-image1");
const navMenuButtonImage2 = document.getElementById("nav-btn-image2");
//Funktionen
function displayMenu() {
    if (navMenuButtonImage1.classList.contains("hide")) {
        navMenuButtonImage1.classList.remove("hide");
        navMenuButtonImage2.classList.add("hide");
    } else {
        navMenuButtonImage2.classList.remove("hide");
        navMenuButtonImage1.classList.add("hide");
    };
    navElem1.classList.toggle("hide");
    navElem2.classList.toggle("hide");
    navElem3.classList.toggle("hide");
    navElem4.classList.toggle("hide");
}