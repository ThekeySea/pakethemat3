  // AOS Initialization
      AOS.init({
        duration: 1000,
        once: false,
      });

      // Feather icons initialization
      feather.replace();

      // Horizontal scroll for fasilitas section
      document.addEventListener("DOMContentLoaded", function () {
        const fasilitasRow = document.querySelector(".fasilitas-row");

        if (fasilitasRow) {
          fasilitasRow.addEventListener(
            "wheel",
            function (evt) {
              evt.preventDefault();
              const scrollAmount = evt.deltaY * 2;
              fasilitasRow.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
              });
            },
            { passive: false }
          );
        }
      });

      // Scroll to top function
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Hamburger menu functionality
      const navbarNav = document.querySelector('.navigasi');
      const hamburger = document.querySelector('#hamburger-menu');

      hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        navbarNav.classList.toggle('active');
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
          navbarNav.classList.remove('active');
        }
      });

      // Close menu when clicking on navigation links
      const navLinks = document.querySelectorAll('.navigasi a');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navbarNav.classList.remove('active');
        });
      });

      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        });
      });

      // Form submission handling
      document.getElementById('reservationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.firstName || !data.lastName || !data.email || !data.phone || 
            !data.guests || !data.checkin || !data.checkout || !data.room) {
          alert('Mohon lengkapi semua field yang wajib diisi!');
          return;
        }

        // Check if checkout date is after checkin date
        const checkinDate = new Date(data.checkin);
        const checkoutDate = new Date(data.checkout);
        
        if (checkoutDate <= checkinDate) {
          alert('Tanggal check-out harus setelah tanggal check-in!');
          return;
        }

        // Show success message
        alert(`Terima kasih ${data.firstName}! Reservasi Anda telah diterima. Kami akan menghubungi Anda segera untuk konfirmasi.`);
        
        // Reset form
        this.reset();
      });

      // Navbar background on scroll
      window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
          navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        } else {
          navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        }
      });

      // Auto-hide mobile menu on resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
          navbarNav.classList.remove('active');
        }
      });
