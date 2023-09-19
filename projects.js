let rmImageSource = document.getElementById('rm-img1').src;
let rmDisplayedImage = document.getElementById('rm-displayed-image');
rmDisplayedImage.src = rmImageSource;

let dbseImageSource = document.getElementById('dbse-img1').src;
let dbseDisplayedImage = document.getElementById('dbse-displayed-image');
dbseDisplayedImage.src = dbseImageSource;

let mfImageSource = document.getElementById('mf-img1').src;
let mfDisplayedImage = document.getElementById('mf-displayed-image');
mfDisplayedImage.src = mfImageSource;

let daImageSource = document.getElementById('da-img1').src;
let daDisplayedImage = document.getElementById('da-displayed-image');
daDisplayedImage.src = daImageSource;

let sdbImageSource = document.getElementById('sdb-img1').src;
let sdbDisplayedImage = document.getElementById('sdb-displayed-image');
sdbDisplayedImage.src = sdbImageSource;

let smallImages = document.querySelectorAll('.small-image');
smallImages.forEach(image => {
    image.addEventListener('click', function(event) {
        let destination = event.target.parentNode;
        destination = destination.previousElementSibling;
        destination.src = image.src;
    });
});