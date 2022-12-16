module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4060ab',
          secondary: '#646FD4',
          accent: '#FFD24C',
          neutral: '#3D4451',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('tw-elements/dist/plugin')],
};
