/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            attributionLink: "hsl(228, 45%, 44%)",
        },
        extend: {
            colors: {
                green: {
                    200: "hsl(148, 38%, 91%)",
                    600: "hsl(169, 82%, 27%)",
                },
                red: {
                    DEFAULT: "hsl(0, 66%, 54%)",
                },
                white: {
                    DEFAULT: "hsl(0, 0%, 100%)",
                },
                grey: {
                    500: "hsl(186, 15%, 59%)",
                    900: "hsl(187, 24%, 22%)",
                },
            },
            fontFamily: {
                karla: ["Karla"],
            },
        },
    },
    plugins: [],
};
