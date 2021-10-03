let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sleepcat.png') {
        myImage.setAttribute('src', 'images/pet_dog_sleep.png');
    } else {
        myImage.setAttribute('src', 'images/sleepcat.png');
    }
}