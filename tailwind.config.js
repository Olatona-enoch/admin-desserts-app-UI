/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: 'hsl(20, 50%, 98%)',
          100: 'hsl(13, 31%, 94%)',
          300: 'hsl(14, 24%, 72%)',
          400: 'hsl(7, 20%, 60%)',
          500: 'hsl(12, 20%, 44%)',
          900: 'hsl(14, 65%, 9%)',
        },
        "custom-red": 'hsl(14, 86%, 42%)',
        "custom-green": 'hsl(159, 69%, 38%)',
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"'],
        'poppins': ['"Poppins"'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}