document.addEventListener('DOMContentLoaded', () => {
  // ✅ Toggle menú móvil
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // ✅ Botón Back to Top
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    });

    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ✅ Formulario de contacto
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');
  if (form && successMessage) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      successMessage.classList.remove('hidden');
      setTimeout(() => {
        form.submit();
      }, 2000);
    });
  }
});
