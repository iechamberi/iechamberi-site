/**
 * Custom icons
 * @see Docs https://vue.chakra-ui.com/icon#adding-custom-icons
 */
const CustomIcons = {
  check: {
    path: `
      <g fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </g>
    `,
  },
  'chevron-down': {
    path: `
      <g fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </g>
    `,
  },
}

/**
 * Custom theme
 * @see Docs https://vue.chakra-ui.com/extending-theme
 */
const CustomTheme = {
  breakpoints: ['30em', '48em', '62em', '80em'],
  colors: {
    amber: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B',
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F',
    },
  },
}

export { CustomIcons, CustomTheme }
