/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#f4f4f4',
        accent: '#ffb703'
      },
      boxShadow: {
        premium: '0 20px 60px rgba(255,255,255,0.12)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
