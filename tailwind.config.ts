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
        blue: {
          primary: "rgb(var(--primary-blue)/<alpha-value>)",
          secondary: "rgb(var(--secondary-blue) / <alpha-value>)",
          dark: "rgb(var(--dark-blue) / <alpha-value>)",
          light: "rgb(var(--light-blue) / <alpha-value>)"

        }
      }
    },
  },
  plugins: [],
}
export default config
