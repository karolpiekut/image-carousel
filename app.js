const leftArrow = document.querySelector('#left-arrow');
const rightArrow = document.querySelector('#right-arrow');
const galleryDivs = document.querySelectorAll('.image-div');

let imageId = 1;
let imageTopId = galleryDivs.length;

function controls(par) {
    if (imageId === imageTopId) {
        if (par.id === "left-arrow") {
            imageId--;
            console.log(imageId);
        } else if (par.id === "right-arrow") {
            imageId = 1;
            console.log(imageId);
        }
    } else if (imageId === 1) {
        if (par.id === "left-arrow") {
            imageId = imageTopId;
            console.log(imageId);
        } else if (par.id === "right-arrow") {
            imageId++;
            console.log(imageId);
        }
    } else {
        if (par.id === "left-arrow") {
            imageId--;
            console.log(imageId);
        } else if (par.id === "right-arrow") {
            imageId++;
            console.log(imageId);
        }
    }
}

function makeItMove(){
    for (let i = 0; i < galleryDivs.length; i++) {
        if (Number(galleryDivs[i].id.slice(2)) !== imageId) {
            document.querySelector(`#${galleryDivs[i].id}`).className = 'image-div hide';
        } else {
            document.querySelector(`#${galleryDivs[i].id}`).className = 'image-div show';
        }
    }
}

function together(){
    controls(this);
    makeItMove();
}

makeItMove();
leftArrow.addEventListener('click', together);
rightArrow.addEventListener('click', together);


