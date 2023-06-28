const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = plugin(function({ addBase, addComponents, addUtilities, addVariant, theme }) {
  addBase({
    'h1': { fontSize: theme('fontSize.2xl') },
    'h2': { fontSize: theme('fontSize.xl') },
    'h3': { fontSize: theme('fontSize.lg') },
  })
  addComponents({    
    '.btn': {
      '@apply text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700': {}
    },
    '.btn-blue': {
      backgroundColor: '#3490dc',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#2779bd'
      },
    },
    '.btn-red': {
      backgroundColor: '#e3342f',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#cc1f1a'
      },
    },
  })
  addUtilities({
    '.content-auto': {
      'content-visibility': 'auto',
    },
    '.content-hidden': {
      'content-visibility': 'hidden',
    },
    '.content-visible': {
      'content-visibility': 'visible',
    },
  })
  addVariant('hocus', ['&:hover', '&:focus'])
  addVariant('optional', '&:optional')
  addVariant('group-optional', ':merge(.group):optional &')
  addVariant('peer-optional', ':merge(.peer):optional ~ &')
},{  
  theme: {    
  }  
})