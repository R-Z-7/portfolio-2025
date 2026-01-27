import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0a0f1c", // Deep Luxury Navy
                secondary: "#111827",
                accent: "#38bdf8", // Sky 400
                "accent-dark": "#0ea5e9",
                "glass-border": "rgba(255, 255, 255, 0.08)",
                "glass-bg": "rgba(10, 15, 28, 0.6)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                display: ["var(--font-space)", "sans-serif"],
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "float": "float 6s ease-in-out infinite",
                "tilt": "tilt 10s infinite linear",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                tilt: {
                    "0%, 50%, 100%": { transform: "rotate(0deg)" },
                    "25%": { transform: "rotate(0.5deg)" },
                    "75%": { transform: "rotate(-0.5deg)" },
                },
            },
            boxShadow: {
                "glow": "0 0 20px rgba(56, 189, 248, 0.15)",
                "glow-lg": "0 0 40px rgba(56, 189, 248, 0.2)",
            }
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
