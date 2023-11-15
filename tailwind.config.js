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

				// Accent //
				primary: "var(--primary)",
				sand: "var(--sand)",
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
