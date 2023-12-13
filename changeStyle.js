document.addEventListener('DOMContentLoaded', function() {
    const styleButtons = document.querySelectorAll('.jsstyle');
    const styleLink = document.getElementById('style-link');
    const vinylImage = document.getElementById('rotate');

    styleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const stylePath = this.getAttribute('data-style');
            styleLink.href = stylePath;
        
            // Check if the button has data-src attribute
            const newSrc = this.getAttribute('data-src');
            if (newSrc) {
                vinylImage.src = newSrc;

            }
        });
    });
});
