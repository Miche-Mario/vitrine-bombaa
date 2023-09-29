/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
        primary: '#0576CB',
        lightprimary: '#EFF4F8',
        darkprimary: '#0B63A6',
        secondary: '#EE6123',
      },
      fontFamily: {
        poppinsLight: ['var(--font-poppins-light)'],
        poppinsMedium: ['var(--font-poppins-medium)'],
        poppinsBold: ['var(--font-poppins-bold)'],
        poppinsRegular: ['var(--font-poppins-regular)'],
        poppinsSemiBold: ['var(--font-poppins-semibold)'],
        octarine: ['var(--font-octarine-bold)'],

      },
    },
  
  },
  plugins: [],
}
