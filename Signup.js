const inputs = document.querySelectorAll(".input");

function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});

ScrollReveal().reveal('.wave', {
duration: 2000,       // Animation duration in milliseconds
distance: '50px',     // Distance the element should move
origin: 'bottom',     // Direction from which the element will appear
opacity: 0,           // Starting opacity
});
ScrollReveal().reveal('.bg-svg', {
duration: 1500,       // Animation duration in milliseconds
distance: '50px',     // Distance the element should move
origin: 'top',     // Direction from which the element will appear
opacity: 0,           // Starting opacity
});

// Toggle sidebar for mobile
document.getElementById('menuIcon').addEventListener('click', function () {
const sidebar = document.getElementById('sidebar');
sidebar.classList.toggle('active');
});
