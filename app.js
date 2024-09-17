const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const pic1 = document.querySelector('#id1');
const pic2 = document.querySelector('#id2');
let imageId = 0;

function controls() {
    if (this.id === "left-arrow"){
        pic1.style.display = "none";
        pic2.style.display = "block";
    }
}

leftArrow.addEventListener('click', controls);
rightArrow.addEventListener('click', controls);







