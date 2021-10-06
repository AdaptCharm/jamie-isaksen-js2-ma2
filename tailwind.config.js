module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accents-1': '#fafafa',
        'accents-2': '#eaeaea',
        'accents-3': '#999',
        'accents-4': '#888',
        'accents-5': '#666',
        'accents-6': '#444',
        'accents-7': '#333',
        'accents-8': '#111',
      },
      textColor: {
        DEFAULT: '#444',
      },
      borderColor: {
        DEFAULT: 'var(--accents-2)',
      },
      boxShadow: {
        1: 'var(--shadow-1)',
        2: 'var(--shadow-2)',
        3: 'var(---shadow-3)',
        4: 'var(--shadow-4)',
        5: 'var(--shadow-5)',
        6: 'var(--shadow-6)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
