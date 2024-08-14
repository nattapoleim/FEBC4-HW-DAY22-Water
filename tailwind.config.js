/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         colors: {
            primary: '#101720',
            secondary: '#fffafa',
         },
         fontFamily: {
            noto: ['Noto Sans Thai', 'sans-serif'],
         },
      },
   },
   plugins: [],
}
