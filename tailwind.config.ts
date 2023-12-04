import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'border-color': '#d3d3d3',
      },
      screens: {
        '2lg': '1152px',
      },
      fontFamily: {
        "body": "var(--font-jost)",
        "headers": "var(--font-syne)"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config