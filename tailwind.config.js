/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyberpunk Color Palettes
        'cyber-blue': '#00f3ff',
        'cyber-pink': '#ff00ff',
        'cyber-purple': '#9d00ff',
        'cyber-yellow': '#f7ff00',
        'cyber-green': '#00ff9f',
        'cyber-orange': '#ff6b00',
        'cyber-red': '#ff013c',
        
        // Darker shades for depth
        'cyber-dark-blue': '#000c3d',
        'cyber-dark-purple': '#1a0b2e',
        'cyber-dark-pink': '#2d0a31',
      },
      backgroundImage: {
        // Different grid patterns
        'cyber-grid': "linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)",
        'cyber-dots': "radial-gradient(circle, #00f3ff 1px, transparent 1px)",
        'cyber-hex': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L15 0 L45 0 L60 30 L45 60 L15 60' fill='none' stroke='%2300f3ff' stroke-opacity='0.2'/%3E%3C/svg%3E\")",
        'cyber-circuit': "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none' stroke='%2300f3ff' stroke-opacity='0.2'/%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%2300f3ff' stroke-opacity='0.2'/%3E%3C/svg%3E\")",
      },
      animation: {
        'cyber-glitch': 'glitch 1s infinite',
        'cyber-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cyber-float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      boxShadow: {
        'cyber': '0 0 10px rgba(0, 243, 255, 0.5)',
        'cyber-lg': '0 0 20px rgba(0, 243, 255, 0.5), 0 0 40px rgba(0, 243, 255, 0.3)',
        'cyber-pink': '0 0 10px rgba(255, 0, 255, 0.5)',
        'cyber-purple': '0 0 10px rgba(157, 0, 255, 0.5)',
      }
    },
  },
  plugins: [],
} 