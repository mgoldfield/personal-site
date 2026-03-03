import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          DEFAULT: '#2a2235',
          'light': '#3d3347',
        },
      },
      fontFamily: {
        'sans': ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        'serif': ['var(--font-crimson-pro)', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
