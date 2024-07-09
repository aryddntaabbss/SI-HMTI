import plugin from "tailwindcss/plugin";
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html" ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        "good-blue": "#126BF1",
        "dark-blue": "#162741",
        "bad-blue": "#072D66",
        "light-blue": "#E8EEF8",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "-1px 3px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
      animation: {
        slideup: 'slideup 0.2s ease-out'
      },
      keyframes: {
        slideup: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    plugin( function ( { matchUtilities, theme } )
    {
      matchUtilities(
        {
          "text-shadow": ( value ) => ( {
            textShadow: value,
          } ),
        },
        { values: theme( "textShadow" ) }
      );
    } ),
  ],
};
