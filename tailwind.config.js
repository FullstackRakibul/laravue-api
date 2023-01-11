/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "container-color": "var(--container-color)",
        "button-color": "var(--button-color)",
        "button-hover-color": "var(--button-hover-color)",
        "primary-font-color":"var(--primary-font-color)",
        "border-color" : "var(--border-color)",
        "bgcolor":"var(--bgcolor)",
      },

    },
    container: {
      padding: '2rem',
      center: true,
    },

  },
  plugins: [],
}
