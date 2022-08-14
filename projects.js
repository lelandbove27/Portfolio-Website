let rmImageSource = document.getElementById('img1').src;
let rmDisplayedImage = document.getElementById('rm-displayed-image');
rmDisplayedImage.src = rmImageSource;

//query select all displayed-image elements, add the
//default class to all of the first images in each 
//thing and then query select all of those and then
//match them up in the array properly for all default images

let smallImages = document.querySelectorAll('.small-image');
smallImages.forEach(image => {
    image.addEventListener('click', function(event) {
        let destination = event.target.parentNode;
        destination = destination.previousElementSibling;
        destination.src = image.src;
    });
});