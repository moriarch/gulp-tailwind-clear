module.exports = {
  content: ["./src/**/*.html", './src/**/*.{js,jsx,ts,tsx,vue}'],
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
        lightbg:"#34415A",
        darkbg:  "#1C2431",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: { extend: {} },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
