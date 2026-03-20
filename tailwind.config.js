/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-orchid': {
          '50': '#fff5fb',
          '100': '#fde6f7',
          '200': '#fbbdeb',
          '300': '#f78ad5',
          '400': '#f059bc',
          '500': '#e1339d',
          '600': '#c61d7d',
          '700': '#a41664',
          '800': '#881654',
          '900': '#721749',
          '950': '#46062a',
        },
        'deep-night': '#0f070b',
        'data-cyan': {
          '400': '#22d3ee',
          '500': '#06b6d4',
        },
        'soft-slate': '#94a3b8',
      },
    },
  },
  plugins: [],
}
