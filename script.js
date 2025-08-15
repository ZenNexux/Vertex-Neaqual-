// Highlight active navigation link dynamically
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop();

      links.forEach(link => {
          if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
                    }
                      });
                      });