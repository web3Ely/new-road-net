/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            md: "730px",
            lg: "900px",
            xl: "1240px",
        },
        extend: {
            gridTemplateRows: {
                "size-40-xl": "repeat(4,160px)",
                "size-40-lg": "repeat(6,160px)",
                "size-40-md": "repeat(7,160px)",
                "size-40-g1": "160px 3fr",
                "size-40-g1-change": "332px 1fr",
                "size-20": "repeat(7,80px)",
                "size-20-g1": "80px 3fr",
                "size-20-g1-change": "164px 1fr",
            },
            gridTemplateColumns: {
                "size-40-xl": "repeat(7,160px)",
                "size-40-lg": "repeat(5,160px)",
                "size-40-md": "repeat(4,160px)",
                "size-20": "repeat(4,80px)",
            },
            scale: {
                scaleSM: "1.02",
                scaleMD: "1.03",
                scaleLG: "1.06",
            },
        },
    },
    plugins: [],
};
