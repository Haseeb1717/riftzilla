  // Toggle sidebar for mobile
  document.getElementById('menuIcon').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
});

// Toggle search input visibility
document.getElementById('searchIcon').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.style.display === 'block') {
        searchInput.style.display = 'none';
    } else {
        searchInput.style.display = 'block';
        searchInput.focus(); // Automatically focus on input when it appears
    }
});



ScrollReveal().reveal('#cards', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    delay: 300,
});
