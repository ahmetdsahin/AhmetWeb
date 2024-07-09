/** @type {import('tailwindcss').Config} */

module.exports =  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#f5f5f5',
      "black":'#000',
      'gray-dark': '#3d3d3d',
      'gray-light':'#a6a6a6',
      'green':'#0FFF50',
      'green-dark':"#023020"

    },
    fontFamily: {
      'fira-code': ["'Fira Code'", "monospace"],
    },
    extend: {},
  },
  plugins: [],
}

