import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    body1Italic: TypographyStyle;
  }
  interface TypographyOptions {
    body1Italic: TypographyStyleOptions;
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    body1Italic: true;
  }
}

export const body1Italic: TypographyStyleOptions = {
  fontFamily: 'Poppins',
  fontSize: '1.125rem',
  lineHeight: 2,
  fontWeight: 400,
  fontStyle: 'italic',
};
