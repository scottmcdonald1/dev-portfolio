module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        antonio: ['Antonio', 'sans-serif'],
        bowlbyOne: ['Bowlby One', 'cursive'],
        bowlbyOneSC: ['Bowlby One SC', 'cursive'],
        monda: ['Monda', 'sans-serif'],
        oxygenMono: ['Oxygen Mono', 'monospace'],
        
      },
      colors: {
        white: "rgba(255,255,255)",
        black: "rgba(0,0,0)",
        vert59: "rgb(66,143,112)",
        orangeVif: "rgb(196,94,58)",
        ombreNaturelle31: "rgb(90,85,80)",
        vertAnglaisPale: "rgb(190,203,183)",
        outremerGris: "rgb(217,225,221)",
        vertOliveVif: "rgb(184,161,54)",
        roseClair: "rgb(214,175,166)",
        bleuCeruleen31: "rgb(62,110,144)",
        bleuCeruleen59: "rgb(122,167,203)",
        outremerMoyen: "rgb(143,171,201)",
      },
      container: {
        center: true,
      },
      boxShadow: {
        'sharp': '-4px 5px 0px rgba(90,85,80,.2);',
        'spread': '-4px 5px 10px rgba(90,85,80);',
        'smallSpread': '-4px 5px 10px rgba(90,85,80,.2);',
        'smallSpreadWhite': '-4px 5px 10px rgba(255,255,255);',
        'insetSmallSpread': 'inset -4px 5px 10px rgba(90,85,80,.2);',
        'insetWhite': 'inset -4px 5px 10px rgba(255,255,255);',
        'sharpHover': '0px 6px 0px rgba(64,60,58,.4);',
        'largeSpread': '0px 0px 20px rgba(90,85,80)',
      },
      dropShadow: {
        'smDark': '0 1px 2px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}
