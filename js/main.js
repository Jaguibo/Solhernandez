document.addEventListener('DOMContentLoaded', () => {
  // ✅ Toggle menú móvil con accesibilidad mejorada
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      // Cambia estado aria-expanded
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !expanded);
      // Cambia aria-label según estado
      menuBtn.setAttribute(
        'aria-label',
        expanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación'
      );
      // Muestra u oculta menú
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

  // ✅ Formulario de contacto con mensaje de éxito
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
