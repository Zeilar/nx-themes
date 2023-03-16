import { createTheme } from '@mui/material/styles';

import * as customPalette from './customPalette';
import { DEFAULT_HTML_FONT_SIZE, DEFAULT_SPACING } from './defaults';
import fonts from './fonts.css';
import * as typographyVariants from './typography/variants';

declare module '@mui/material/styles' {
  interface Theme {
    reader: {
      width: string | number;
    };
  }
  interface ThemeOptions {
    reader?: {
      width?: string | number;
    };
  }
  interface BreakpointOverrides {
    lg2: false;
  }
}

export const mytheme = createTheme({
  typography: {
    htmlFontSize: DEFAULT_HTML_FONT_SIZE,
    fontFamily: 'Poppins',
    ...typographyVariants,
  },
  palette: customPalette,
  spacing: DEFAULT_SPACING,
  components: {
    MuiCssBaseline: fonts,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  reader: {
    width: 854,
  },
});