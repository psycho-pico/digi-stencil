/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#3490dc',
                secondary: '#ff6347',
            },
            fontSize: {
                base: '16px',
            },
            fontWeight: {
                normal: 400,
            },
        },
    },
    plugins: []
}

