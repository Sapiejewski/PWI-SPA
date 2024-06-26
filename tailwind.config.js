const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
	theme: {
		extend: {},
	},
	plugins: [
		addVariablesForColors,
		require("@tailwindcss/aspect-ratio"),
		require("flowbite/plugin"),
	],
}
function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"))
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	)

	addBase({
		":root": newVars,
	})
}
