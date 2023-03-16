import '@mui/material/styles';
import { TypographyStyleOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles/createTypography' {
  interface Typography {
    myVariant: TypographyStyle;
  }
  interface TypographyOptions {
    myVariant: TypographyStyleOptions;
  }
}

declare module '@mui/material/Typography/Typography' {
  interface TypographyPropsVariantOverrides {
    myVariant: true;
  }
}

export const myVariant: TypographyStyleOptions = {
  fontFamily: 'Poppins',
  fontSize: '1.125rem',
  lineHeight: 2,
  fontWeight: 400,
  fontStyle: 'italic',
};
