const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
indigoPalette = {
  50: '#EEF2FF',
  100: '#E0E7FF',
  200: '#C7D2FE',
  300: '#A5B4FC',
  400: '#818CF8',
  500: '#2e2adf',
  600: '#4F46E5',
  700: '#4338CA',
  800: '#3730A3',
  900: '#312E81'
};
bluePalette = {
  50: '#EFF6FF',
  100: '#DBEAFE',
  200: '#BFDBFE',
  300: '#93C5FD',
  400: '#60A5FA',
  500: '#3B82F6',
  600: '#2563EB',
  700: '#1D4ED8',
  800: '#1E40AF',
  900: '#1E3A8A'
};
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Open Sans", Cairo',
          // ...defaultTheme.fontFamily.sans
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
        ]
      },
      fontSize: {
        ss: '0.666666rem'
      },
      colors: {
        dalil: {
          gray: '#35215E',
          lightindigo: '#3B37E3',
          indigo: '#370F84',
          dark: '#8c8af8'
        },
        primary: {
          base: '#4927d0',
          light: '#4a2ee8',
          dark: '#3d259e'
        },
        indigo: indigoPalette,
        blue: bluePalette,
        light: {
          surface: '#f9f8fb',
          onSurfaceStrong: '#0E0D20',
          onSurfacePrimary: '#35265F',
          onSurfaceSecondary: '#606F7B',
          elevatedSurface: defaultTheme.colors.white,
          border: defaultTheme.colors.gray['300']
        },
        dark: {
          surface: 'hsl(240, 12%, 6%)', /* #0b0b0e */
          onSurfaceStrong: '#f0f0f2',
          onSurfacePrimary: '#a8a8b2',
          primaryText: '#a294ee',
          onSurfaceSecondary: '#B8C2CC',
          elevatedSurface: 'hsl(240, 12%, 8%)', // #101014
          elevatedSurface2: '#202042',
          border: '#22222a'
        }
      },
      fill: theme => ({
        'dalil-gray': theme('colors.dalil.gray'),
        'dalil-lightindigo': theme('colors.dalil.lightindigo'),
        'dalil-indigo': theme('colors.dalil.indigo')
      }),
      stroke: theme => ({
        'dalil-gray': theme('colors.dalil.gray'),
        'dalil-lightindigo': theme('colors.dalil.lightindigo'),
        'dalil-indigo': theme('colors.dalil.indigo')
      }),
      boxShadow: {
        dalilmobarmg: '0px 0px 8px rgba(0, 0, 0, 0.101562)',
        reverse: '0 -2px 4px 0 rgba(0, 0, 0, 0.05)',
        'inset-dalil': 'inset 0px 0px 8px rgba(0, 0, 0, 0.101562)'
      },
      inset: {
        24: '6rem'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      transitionTimingFunction: {
        'ease-in-material': 'cubic-bezier(0.4, 0, 1, 1)',
        'ease-out-material': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in-out-material': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-in-out-material-sharp': 'cubic-bezier(0.4, 0, 0.6, 1)'
      }
    }
  },
  variants: {
    display: ['responsive', 'after'],
    margin: ['responsive', 'after'],
    width: ['responsive', 'after'],
    borderWidth: ['responsive', 'after'],
    borderRadius: ['responsive', 'after'],
    borderColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'dark',
      'light',
      'after',
      'light:after',
      'dark:after'
    ],
    backgroundColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'dark',
      'light',
      'dark:hover',
      'light:hover'
    ],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'active',
      'group-hover',
      'dark',
      'light',
      'dark:hover',
      'light:hover'
    ],
    boxShadow: [
      'responsive',
      'hover',
      'focus',
      'active',
    ],
    translate: [
      'responsive',
      'hover',
      'focus',
      'active',
    ],
    scale: [
      'responsive',
      'hover',
      'focus',
      'active',
    ]
  },
  plugins: [
    plugin(function ({ addVariant, theme, e, prefix, config }) {
      const colorModeVariants = ['light', 'dark']
      colorModeVariants.forEach(mode => {
        addVariant(mode, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${mode}-mode .${e(`${mode}${separator}${className}`)}`
          })
        })
      })
      const pseudoVariants = ['after', 'before']
      pseudoVariants.forEach(pseudo => {
        addVariant(pseudo, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `.${e(`${pseudo}${separator}${className}`)}::${pseudo}`
          })
        })
      })
      // generate chained color mode and pseudo variants
      colorModeVariants.forEach(mode => {
        pseudoVariants.forEach(pseudo => {
          addVariant(`${mode}:${pseudo}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${mode}-mode .${e(
                `${mode}${separator}${pseudo}${separator}${className}`
              )}::${pseudo}`
            })
          })
        })
      })
      // states for color modes
      const states = ['hover']
      colorModeVariants.forEach(mode => {
        states.forEach(state => {
          addVariant(`${mode}:${state}`, ({ modifySelectors, separator }) => {
            modifySelectors(({ className }) => {
              return `.${mode}-mode .${e(
                `${mode}${separator}${state}${separator}${className}`
              )}:${state}`
            })
          })
        })
      })
    })
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: ['dark-mode', 'light-mode']
    }
  }
}
