const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: ['./src/**/*.{ts,tsx,js,jsx,css}'],
    theme: {
        colors: {
            ...defaultTheme.colors,
            primary: colors.orange,
            secondary: colors.gray,
            info: colors.cyan,
            danger: colors.red,
            transparent: 'transparent',
            current: 'currentColor',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {},
    },
    plugins: [],
};
