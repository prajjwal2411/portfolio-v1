const config = {
  plugins: {
    "@tailwindcss/postcss": {
      darkMode: "class",
      theme: {
        container: {
          center: true,
          padding: "1rem",
          screens: {
            // sm: "640px",
            sm: "768px",
            md: "1024px",
            lg: "1280px",
          }
        },
        extend: {
          keyframes: {
            gradient: {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          },
          animation: {
            gradient: "gradient 8s linear infinite",
          },
        },
      },
      plugins: [],
    },
  },
};

export default config;
