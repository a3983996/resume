
let header = document.querySelector("header");
let headerA = document.querySelectorAll("nav ul li a");
let logo = document.querySelector(".logo");


window.addEventListener("scroll", () => {
    if (window.pageYOffset != 0) {
        header.style.backgroundColor = "black";
        header.style.opacity = "0.8";
        logo.style = "max-height:0; overflow:hidden; ";
        headerA.forEach(a => {
            a.style.color = "white";
        });
    } else {
        header.style = "";
        logo.style = "";
        headerA.forEach(a => {
            a.style = "";
        });
    }
});

