<script>
    // Select menu icon and navigation links
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');

    // Add event listener to toggle menu visibility
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
</script>
