var rotateButton = document.getElementById("js-rotate");
var moveImage = document.getElementById("move");

var rotationDegrees = 0;

rotateButton.addEventListener("click", function() {
    if (rotationDegrees === 0) {
        rotationDegrees = 35; // Rotate by 20 degrees
    } else {
        rotationDegrees = 0; // Reset rotation to 0 degrees
    }
    
    moveImage.style.transform = `rotate(${rotationDegrees}deg)`;
});
