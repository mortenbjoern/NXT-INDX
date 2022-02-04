module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '816px',
      // => @media (min-width: 960px) { ... }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Bebas Neue', 'Helvetica Neue', 'sans-serif'],
    },
    colors: {
      light: '#FBF5E9',
      solar: '#FBE2B6',
      'solar-shade': '#FAD89E',
      'solar-tint': '#FDECCF',
      dark: '#062B23',
      'dark-tint': '#07362C',
      accent: '#974002',
      grey: '#AFB6B5',
    },
    spacing: {
      0.25: '2px',
      0.5: '4px',
      0.75: '6px',
      1: '8px',
      1.25: '10px',
      1.5: '12px',
      1.75: '14px',
      2: '16px',
      2.5: '20px',
      3: '24px',
      3.5: '28px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '80px',
      12.5: '100px',
      15: '120px',
      17.5: '140px',
      20: '160px',
      25: '200px',
      30: '240px',
      35: '280px',
      40: '320px',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
