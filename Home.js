   
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

    // Set the countdown time (in seconds)
    let countdownTime = (5 * 24 * 60 * 60) + (0 * 60 * 60) + (3 * 60) + 51; // 5 days, 0 hours, 3 minutes, 51 seconds

    // Function to update the countdown
    function updateCountdown() {
        // Calculate the days, hours, minutes, and seconds left
        const days = Math.floor(countdownTime / (24 * 60 * 60));
        const hours = Math.floor((countdownTime % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((countdownTime % (60 * 60)) / 60);
        const seconds = countdownTime % 60;

        // Update the HTML elements with the calculated values
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        // Decrease the countdown time by one second
        countdownTime--;

        // If the countdown reaches zero, stop the timer and optionally show a message
        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.flash-sale').innerHTML = '<h2>TIME IS UP!</h2>';
        }
    }

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);

    // Initial call to display the countdown immediately
    updateCountdown();

    // ScrollReveal animations
    ScrollReveal().reveal('#logo', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        delay: 200,
    });
    ScrollReveal().reveal('#nav-links', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
        delay: 200,
    });
    ScrollReveal().reveal('#nav-linkssidebar', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
        delay: 200,
    });
    ScrollReveal().reveal('#card1', {
        duration: 1100,
        origin: 'bottom',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#card2', {
        duration: 1200,
        origin: 'bottom',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#card3', {
        duration: 1400,
        origin: 'bottom',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#card4', {
        duration: 1600,
        origin: 'bottom',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#card5', {
        duration: 1800,
        origin: 'bottom',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#cards', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#days', {
        duration: 1000,
        origin: 'left',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#hours', {
        duration: 1000,
        origin: 'left',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#minutes', {
        duration: 1000,
        origin: 'right',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#seconds', {
        duration: 1000,
        origin: 'right',
        distance: '100px',
        delay: 300,
    });
    ScrollReveal().reveal('#news-container', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px',
        delay: 300,
    });
    
    ScrollReveal().reveal('.overlay-text-flex', {
        duration: 1000,
        origin: 'left',
        distance: '100px',
        delay: 300,
    });

    ScrollReveal().reveal('.overlay-img-flex', {
        duration: 1000,
        origin: 'right',
        distance: '100px',
        delay: 300,
    });
  
