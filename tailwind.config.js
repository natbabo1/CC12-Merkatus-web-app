const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      'vivid-orange': '#FF6100',
      'mermaid-net': '#29C6CD',
      'idyllic-isle': '#90C8D1',
      'blue-shale': '#B9CACD',
      'cosmic-dust': '#DAE1E4',
      'tin-color': '#919191'
    }
  },
  plugins: [require('flowbite/plugin')]
};
