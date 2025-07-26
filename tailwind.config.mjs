import starlightPlugin from '@astrojs/starlight-tailwind'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [starlightPlugin()],
  theme: {
    extend: {
      colors: {
        'yolo-blue': '#2741E7',
        'yolo-light-blue': '#6CA1E5',
        'yolo-gradient-start': '#2741E7',
        'yolo-gradient-mid': '#425AF3',
        'yolo-gradient-end': '#6CA1E5',
        'yolo-dark-blue': '#1a202c',
        'yolo-gray': '#718096',
        'yolo-light-gray': '#f8f9fa',
        'success': '#10b981',
        'warning': '#f59e0b',
      },
      fontFamily: {
        'plus-jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'inconsolata': ['Inconsolata', 'monospace'],
        'sans': ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui'],
        'mono': ['Inconsolata', 'ui-monospace', 'SFMono-Regular'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.2', fontWeight: '800' }],
        'section-heading': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
        'subsection-heading': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'slide-left': 'slideLeft 0.7s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
        'scale-up': 'scaleUp 0.3s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'draw-line': 'drawLine 1.5s ease-in-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        counter: {
          '0%': { '--counter-value': '0' },
          '100%': { '--counter-value': 'var(--counter-target)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(39, 65, 231, 0.3)',
            transform: 'scale(1)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(39, 65, 231, 0.6)',
            transform: 'scale(1.02)' 
          },
        },
      },
      transitionTimingFunction: {
        'bounce-soft': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'ease-in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'hard': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
        'yolo': '0 4px 25px -5px rgba(39, 65, 231, 0.15), 0 10px 10px -5px rgba(39, 65, 231, 0.04)',
        'yolo-lg': '0 10px 40px -10px rgba(39, 65, 231, 0.25), 0 2px 10px -2px rgba(39, 65, 231, 0.08)',
      },
      backgroundImage: {
        'yolo-gradient': 'linear-gradient(180deg, #2741E7 0%, #425AF3 50%, #6CA1E5 100%)',
        'yolo-gradient-horizontal': 'linear-gradient(90deg, #2741E7 0%, #425AF3 50%, #6CA1E5 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(39, 65, 231, 0.9) 0%, rgba(108, 161, 229, 0.8) 100%)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
}