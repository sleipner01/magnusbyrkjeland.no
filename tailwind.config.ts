import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				typewriter: {
					"0%": { width: "0%" },
					"100%": { width: "100%", borderRight: "none" },
				},
				blink: {
					"0%, 100%": { opacity: "1" },
					"50%": { opacity: "0" },
				},
				rollOutLeftAndDown: {
					"0%": {
						transform: "translateX(0) translateY(0) rotate(0deg)",
						opacity: "1",
					},
					"100%": {
						transform: "translateX(-100%) translateY(100%) rotate(-45deg)",
						opacity: "0",
					},
				},
				rollInLeftAndUp: {
					"0%": {
						transform: "translateX(100%) translateY(100%) rotate(45deg)",
						opacity: "0",
					},
					"100%": {
						transform: "translateX(0) translateY(0) rotate(0deg)",
						opacity: "1",
					},
				},
				slideInBottomOutTop: {
					"0%": { transform: "translateY(100%)", opacity: "0" },
					"40%": { transform: "translateY(0)", opacity: "1" },
					"80%": { transform: "translateY(0)", opacity: "1" },
					"100%": { transform: "translateY(-100%)", opacity: "0" },
				},
				slideInBottomDelayed: {
					"0%": { transform: "translateY(100%)", opacity: "0" },
					"40%": { transform: "translateY(0)", opacity: "1" },
					"100%": { transform: "translateY(0)", opacity: "1" },
				},
			},
			animation: {
				typewriter: "typewriter 1s steps(14) 1s 1 normal both",
				blink: "blink 1s steps(2) infinite",
				slideInBottomOutTop: "slideInBottomOutTop 2s ease-in-out forwards 4s",
				slideInBottomDelayed: "slideInBottomDelayed 1s ease-in-out forwards 6s",
				rollOutLeftAndDown: "rollOutLeftAndDown .6s ease-in-out forwards 8s",
				rollInLeftAndUp: "rollInLeftAndUp .6s ease-in-out forwards 8s",
			},
		},
	},
	plugins: [],
};
export default config;
