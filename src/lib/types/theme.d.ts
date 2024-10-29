import '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Palette {
    surface: Palette['primary'];
  }
  interface PaletteOptions {
    surface: PaletteOptions['primary'];
  }

  interface Theme {
    boxShadow: {
      purple: string;
      grey: string;
    };
  }
  interface ThemeOptions {
    boxShadow: {
      purple: string;
      grey: string;
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    soft: true;
  }
}
