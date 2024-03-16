import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    hdYellow: {
      50: '#fffeda',
      100: '#fff8ad',
      200: '#fff47d',
      300: '#fff04b',
      400: '#ffeb1a',
      500: '#e6d200',
      600: '#b3a300',
      700: '#807400',
      800: '#4d4600',
      900: '#1c1700'
    },
    hdGray: {
      50: '#f8f0f2',
      100: '#d9d9d9',
      200: '#bfbfbf',
      300: '#a6a6a6',
      400: '#8c8c8c',
      500: '#737373',
      600: '#595959',
      700: '#404040',
      800: '#262626',
      900: '#120b0d'
    }
  },
  fonts: {
    heading: 'Roboto sans-serif',
    body: 'Roboto sans-serif'
  },
  styles: {
    global: {
      body: {
        background: 'hdGray.800'
      }
    }
  }
});

export default theme;
