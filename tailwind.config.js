module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'blue'      : '#4f7df3',
      'gray-blue' : '#c2d3ff',
      'red'       : '#ff5263',
      'white'     : '#ffffff',
      'gray'      : '#969696',
      'dark-blue' : '#151f29',
    },

    fontFamily: {
      'custom' : ['Libre Franklin']
    }
  },
  plugins: [],
}
