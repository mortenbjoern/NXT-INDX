module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '816px',
      // lg: '1079px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      display: ['Bebas Neue', 'Helvetica Neue', 'sans-serif'],
    },
    colors: {
      white: '#F5F0F0',
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
      0: '0px',
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
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
    },
    fontSize: {
      'label-8': ['8px', '8px'],
      'label-10': ['10px', '10px'],
      'label-12': ['12px', '12px'],
      'label-14': ['14px', '14px'],
      'label-16': ['16px', '16px'],
      'label-20': ['20px', '20px'],
      'label-24': ['24px', '24px'],
      'label-28': ['28px', '28px'],
      'label-32': ['32px', '32px'],
      'label-40': ['40px', '40px'],
      'label-48': ['48px', '48px'],
      'body-12': ['12px', '16.8px'],
      'body-14': ['14px', '19.6px'],
      'body-16': ['16px', '22.4px'],
      'body-20': ['20px', '28px'],
      'body-24': ['24px', '33.6px'],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
};
