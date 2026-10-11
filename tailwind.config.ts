import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: { sm: '640px', md: '880px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
    extend: {
    colors: { brand: { navy: '#071D57', blue: '#1456B8', violet: '#6325C7', purple: '#7927C8', gold: '#F4AE22', amber: '#F9C34A', ink: '#15213B', muted: '#68748B' } },
    fontFamily: { sans: ['var(--font-inter)', 'sans-serif'] },
    boxShadow: { soft: '0 18px 55px rgba(7, 29, 87, 0.10)', glow: '0 12px 35px rgba(244, 174, 34, 0.28)' },
    backgroundImage: { 'brand-gradient': 'linear-gradient(135deg, #071D57 0%, #1456B8 52%, #6325C7 100%)', 'gold-gradient': 'linear-gradient(135deg, #F9C34A 0%, #E99A0B 100%)' },
    keyframes: { float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } } },
    animation: { float: 'float 6s ease-in-out infinite' }
  } }, plugins: []
};
export default config;
