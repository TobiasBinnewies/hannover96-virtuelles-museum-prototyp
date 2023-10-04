/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Brand Colors */
        'h96-green-light': '#009E3D',
        'h96-green': '#019D3A',
        'h96-white': '#FFFFFF',
        'h96-black': '#000000',

        /* Background Colors */
        'primary-b': '#FFFBEB',
        'secondary-b': '#FAE5AC',

        /* Text Colors */
        'primary-text': '#2D2D2D',
        'secondary-text': '#6B7280',
        'highlight-text': '#009E3D',
        'heading-text': '#019D3A',

        /* Links */
        'link-text': '#FFFFFF',
        'link-text-hover': '#019D3A',

        /* CTA Buttons */
        'cta-text': '#FFFFFF',
        'cta-bg': '#009E3D',
      },
    },
    fontFamily: {
      sans: ['Alfa Slab One', 'sans-serif'],
    },
  },
  plugins: [],
}
