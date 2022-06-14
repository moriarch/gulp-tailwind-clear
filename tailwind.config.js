module.exports = {
  purge: ["./src/**/*.css", "./**/*.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '960px',
      'lg': '1140px',
      'xl': '1360px',
    },
    container: {
      center: true,
      padding:'15px',
    },
    extend: {
      container:{
        screens: {
          'sm': '640px',
          'md': '960px',
          'lg': '1140px',
          'xl': '1360px',
        }
      },
      colors: {
        primary: "#C2783B",
        graybg:"#F3F3F3",
        txt:  "#3F3F3F",
      },
    },
  },
  variants: { extend: {} },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
