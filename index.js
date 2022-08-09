let currentImageNumber = 0;
let totalImages = 4;
function cycleImage(direction) {
    let currentImage;
    let previousImage = document.getElementById(`img${currentImageNumber}`);
    previousImage.classList.toggle('invisible-image');
    if(direction == "left") {
        currentImageNumber -= 1
        if(currentImageNumber < 0) {
            currentImageNumber = totalImages - 1;
        }
        currentImage = document.getElementById(`img${currentImageNumber}`);
    }
    else if(direction == "right") {
        currentImageNumber = (currentImageNumber + 1) % totalImages;
        currentImage = document.getElementById(`img${currentImageNumber}`);
    }
    currentImage.classList.toggle('invisible-image');
    console.log('done');
}

let leftArrow = document.getElementById('left-arrow');
let rightArrow = document.getElementById('right-arrow');
leftArrow.addEventListener('click', function() {
    cycleImage('left');
});
rightArrow.addEventListener('click', function() {
    cycleImage('right');
});

//use id manipulation to make the next one opaque or not

