/*
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

This is how you would normally define the current and imgs vars
But i'm gonna use destructuring!

*/
var [current, imgs, opacity] = [document.querySelector('#current'), document.querySelectorAll('.imgs img'), 0.4];

// Set first img opacity
imgs[0].style.opacity = opacity;
/* Old, boring, long-winded version of using forEach:

imgs.forEach(function(img) {
    img.addEventListener('click', function(e) {
        current.src = e.target.src;
    })
});

*/

// But instead! Arrow functions oooohhh
imgs.forEach(img => img .addEventListener('click', imgClick));

function imgClick(e) {
    // Reset the opacity when a new imgs is clicked
    imgs.forEach(img => (img.style.opacity = 1));
    // This will change the src of the current image to whatever was clicked
    current.src = e.target.src;

    //Add fade in class when clicked
    current.classList.add('fade-in');

    // Remove fade-in class after .5s
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // This changes the opacity of the thumbnail 
    // to whatever the opacity var is set to
    e.target.style.opacity = opacity;
}