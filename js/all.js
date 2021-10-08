

const lastWord = document.querySelector("#nine");
const animation = document.querySelector(".animation");
const logoSvg = document.querySelectorAll(".logo svg");

$(document).ready(function () {
    lastWord.addEventListener("animationend", () => {
        for (let i = 0; i < logoSvg.length; i++) {
            logoSvg[i].style = "transition: 1s ease; opacity: 0; pointer-events:none;";
        }
        for (let i = 0; i < logoSvg.length; i++) {

            setTimeout(`logoSvg[${i}].style.width="0"`, 0);
        }
        animation.style = "transition:1s ease; width:0px; height:0px; opacity:0";


    })
});

