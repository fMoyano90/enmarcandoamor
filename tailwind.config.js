/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amor: {
          rosa: '#ED5A89',
          malva: '#AD6D82',
          gris: '#6E6065',
          verde: {
            claro: '#5AED69',
            medio: '#6D9871',
            oscuro: '#334334'
          }
        }
      }
    },
  },
  plugins: [],
}
