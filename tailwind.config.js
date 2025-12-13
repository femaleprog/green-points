/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#FCEEF6', // Pink (User's 3rd color) - nicely contrasts with Green
                    100: '#DFF5CF', // Light Green (User's 2nd color)
                    200: '#cbebc5',
                    300: '#a3d9a5',
                    400: '#7cb575',
                    500: '#4a8a45', // Mid-green interpolation
                    600: '#184511', // Dark Green (User's 1st color) - PRIMARY ACTION
                    700: '#13380e', // Darker for hover
                    800: '#0e290a',
                    900: '#051003',
                },
                // Alias for clarity
                moss: '#184511',
                lime: '#DFF5CF',
                rose: '#FCEEF6',

                background: '#FCEEF6', // Setting the global background to the pink tone for a premium feel
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
