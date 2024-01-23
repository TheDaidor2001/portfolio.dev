/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'main': "url('/images/cara.webp')",
			},

			animation: {
				"background-shine": "background-shine 2s linear infinite",
				'infinite-scroll': 'infinite-scroll 15s linear infinite',
			  },
			keyframes: {
				"background-shine": {
				  "from": {
					"backgroundPosition": "0 0"
				  },
				  "to": {
					"backgroundPosition": "-200% 0"
				  }
				},
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				}
			  }
		},
	},
	
	plugins: [],
}
