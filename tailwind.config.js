/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'jakarta': ['Plus Jakarta Sans']
    },
    extend: {
      backgroundImage: {
        'home-image': "url('./assets/images/dodl5643yfxld49cwuxy.webp')",
        'start-image': "url('./assets/images/xnqqbwxlgp4uuezdct9j.webp')",
        'journey-image': "url('./assets/images/ahvo0vaedfcxmq8rsgxt.webp')"
      }
    },
  },
  plugins: [],
}

