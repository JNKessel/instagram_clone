// bg-blue-medium -> hex value
// text-red-primary -> hex value
// text-gray-primary -> hex value
// text-blue-medium -> hex value
// border-gray-primary -> hex value

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fill: (theme) => ({
        red: theme("colors.red.primary"),
      }),
      colors: {
        white: "#ffffff",
        blue: {
          medium: "#005c98",
        },
        black: {
          light: "#262626",
          faded: "#00000059",
        },
        gray: {
          base: "#616161",
          background: "#fafafa",
          primary: "#dbdbdb",
        },
        red: {
          primary: "#ed4956",
        },
      },
    },
  },
  plugins: [],
};
