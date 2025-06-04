document.addEventListener('DOMContentLoaded', () => {
  // Alert on donation button click
  
  const donationBtn = document.querySelector('.btn-primary');
  const modal = document.getElementById('donationModal');
  const closeBtn = document.querySelector('.close-btn');

  if (donationBtn && modal && closeBtn) {
    donationBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
    });

    // Optional: Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  }


  // Log hover over navigation links
  const navLinks = document.querySelectorAll('.nav');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      console.log(`Hovering: ${link.textContent}`);
    });
  });

  // Fade in content on scroll
  const fadeTarget = document.querySelector('.contain');
  if (fadeTarget) {
    const fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.3 });
    fadeObserver.observe(fadeTarget);
  }

  // Highlight the active nav link based on current page URL
  const currentPage = window.location.pathname.split("/").pop(); // e.g. "gallery.html"
  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (linkPage === "#" && currentPage === "")) {
      link.classList.add('active-nav');
    } else {
      link.classList.remove('active-nav');
    }
  });

  // Scroll animation for landscape images only
  const landscapeImages = document.querySelectorAll('.landscape-img.scroll-animate');
  const landscapeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        landscapeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  landscapeImages.forEach(img => landscapeObserver.observe(img));
});
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('active');
}


