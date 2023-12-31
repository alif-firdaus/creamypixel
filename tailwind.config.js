/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{html,js,jsx}", "./public/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			colors: {
				// Background //
				bgbase: "var(--bgbase)",
				bgsecondary: "var(--bgsecondary)",
				bgtertiary: "var(--bgtertiary)",

				// Accent //
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				sand: "var(--sand)",
				black: "var(--black)",
			},
			padding: {
				sectionpxsm: "var(--sectionpxsm)",
			},

			animation: {
				marquee: "marquee 30s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateX (0%)" },
					"100%": { transform: "translateX(-100%)" },
				},
			},

			fontFamily: {
				outfit: ["Outfit"],
			},
		},
	},
	plugins: [],
};
