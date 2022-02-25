const colors = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{ts,tsx,js,jsx,css}'],
    theme: {
        colors: {
            primary: colors.orange,
            secondary: colors.gray,
            info: colors.cyan,
            danger: colors.red,
            transparent: 'transparent',
            current: 'currentColor',
        },
        extend: {},
    },
    plugins: [],
};
