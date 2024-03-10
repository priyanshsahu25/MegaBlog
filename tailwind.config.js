/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '359px',
      // 'sm': '576px',
      // 'md': '960px',
      // 'xl': '1280px',
      // 'lg': '1440px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px'
    
    },
  },
  
  plugins: [],
}

