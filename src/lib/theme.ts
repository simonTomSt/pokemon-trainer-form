'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-ibm-vga)',
    subtitle1: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '20px'
    }
  },
  palette: {
    primary: {
      main: '#9747FF',
      light: '#9747FF40',
      dark: '#7135BF'
    },
    error: {
      main: '#FF4E4E'
    },
    grey: {
      100: '#2A2A2A',
      200: '#7F7F7F',
      300: '#E4E4E4',
      400: '#EEEEEE'
    }
  },
  boxShadow: {
    purple: '0px 0px 0px 4px rgba(151, 71, 255, 0.25)',
    grey: '0px 4px 10px 2px rgba(0, 0, 0, 0.1)'
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        variant: 'contained'
      }
    }
  }
});

export default theme;
