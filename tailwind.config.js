/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./libs/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        fontFamily: {
            montserrat: ['Montserrat', 'sans-serif'],
            oswald: ['Oswald', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                'competition-gradient': 'linear-gradient(0deg, #6D3C8E -24.26%, rgba(31, 17, 40, 0) 167.65%)',
            },
            boxShadow:{
                'tab-select': '0px 3px 8px 0px #0000001F',
                'vt-card': '0px 0px 46px 2px #00000017'
            },
            colors: {
                yellow: {
                  600: "#FBAF1D"
                },
                purple: {
                    300: "#BD67FF",
                    400: "#6A308F",
                    500: "#6D3C8E",
                    600: "#622B86",
                    700: "#6A308F",
                    800: "#612B84",
                    900: "#1E0128",
                    950: "#100015"
                },
                grey: {
                    50: "#E0DEDD",
                    200: "#F5F5F5",
                    400: "#989898",
                    600: "#595959",
                    700: "#464655",
                },
                lightgreen: {
                    400: "#02CD17",
                    500: "#02CA16",
                },
                red: {
                    500: "#D20B0B"
                }
            }
        },
    },
    plugins: [],
}

