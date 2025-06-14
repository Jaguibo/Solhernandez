/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",         // todos los HTML en raíz
    "./src/**/*.{html,js,jsx}"  // tu carpeta src por si usas componentes o scripts
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
