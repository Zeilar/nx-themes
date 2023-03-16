import '@mui/material/styles';
import { createTheme, Palette, PaletteOptions } from '@mui/material';

import * as colors from './colors';

export interface NePalette {
  brandPrimary: Palette['primary'];
  brandSecondary: Palette['primary'];
  brandTertiary: Palette['primary'];
  brandQuaternary: Palette['primary'];
  brandQuinary: Palette['primary'];
  brandSenary: Palette['primary'];
  brandSeptenary: Palette['primary'];
  brandOctonary: Palette['primary'];
  brandNonary: Palette['primary'];
  brandDenary: Palette['primary'];

  text: Palette['primary'];
  common: Palette['primary'];

  primary: Palette['primary'];
  secondary: Palette['primary'];
  tertiary: Palette['primary'];
  background: Palette['primary'];

  error: Palette['primary'];
  warning: Palette['primary'];
  info: Palette['primary'];
  success: Palette['primary'];

  perfSuccess: Palette['primary'];
  perfWarningOne: Palette['primary'];
  perfWarningTwo: Palette['primary'];
  perfFailure: Palette['primary'];

  progress: Palette['primary'];

  dividerSolid: Palette['primary'];
  dividerTransparent: Palette['primary'];
  defaultButton: Palette['primary'];

  listItemSelected: Palette['primary'];
}

export interface NePaletteOptions {
  brandPrimary: PaletteOptions['primary'];
  brandSecondary: PaletteOptions['primary'];
  brandTertiary: PaletteOptions['primary'];
  brandQuaternary: PaletteOptions['primary'];
  brandQuinary: PaletteOptions['primary'];
  brandSenary: PaletteOptions['primary'];
  brandSeptenary: PaletteOptions['primary'];
  brandOctonary: PaletteOptions['primary'];
  brandNonary: PaletteOptions['primary'];
  brandDenary: PaletteOptions['primary'];

  text: PaletteOptions['primary'];
  common: PaletteOptions['primary'];

  primary: PaletteOptions['primary'];
  secondary: PaletteOptions['primary'];
  tertiary: PaletteOptions['primary'];
  background: PaletteOptions['primary'];

  error: PaletteOptions['primary'];
  warning: PaletteOptions['primary'];
  info: PaletteOptions['primary'];
  success: PaletteOptions['primary'];

  perfSuccess: PaletteOptions['primary'];
  perfWarningOne: PaletteOptions['primary'];
  perfWarningTwo: PaletteOptions['primary'];
  perfFailure: PaletteOptions['primary'];

  progress: PaletteOptions['primary'];
  defaultButton: PaletteOptions['primary'];
}

declare module '@mui/material/styles' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Palette extends NePalette {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteOptions extends NePaletteOptions {}

  interface PaletteColor {
    extraLight: string;
    shade: string;
  }
  interface SimplePaletteColorOptions {
    extraLight: string;
    shade: string;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    denary: true;
    tertiary: true;
  }
}

declare module '@mui/material/styles/createPalette' {
  interface CommonColors {
    contrast: string;
  }
  interface SimplePaletteColorOptions {
    extraLight?: string;
    shade?: string;
  }
  interface TypeBackground {
    shade: string;
  }
}

const { palette } = createTheme();
export const brandPrimary = {
  dark: colors.COLOR_BRAND_PRIMARY,
  main: colors.COLOR_BRAND_PRIMARY75,
  light: colors.COLOR_BRAND_PRIMARY50,
  shade: colors.COLOR_BRAND_PRIMARY25,
};

export const brandSecondary = {
  dark: colors.COLOR_BRAND_SECONDARY,
  main: colors.COLOR_BRAND_SECONDARY75,
  light: colors.COLOR_BRAND_SECONDARY50,
  shade: colors.COLOR_BRAND_SECONDARY25,
};

export const brandTertiary = {
  dark: colors.COLOR_BRAND_TERTIARY,
  main: colors.COLOR_BRAND_TERTIARY75,
  light: colors.COLOR_BRAND_TERTIARY50,
  shade: colors.COLOR_BRAND_TERTIARY25,
};

export const brandQuaternary = {
  dark: colors.COLOR_BRAND_QUATERNARY,
  main: colors.COLOR_BRAND_QUATERNARY75,
  light: colors.COLOR_BRAND_QUATERNARY50,
  shade: colors.COLOR_BRAND_QUATERNARY25,
};

export const brandQuinary = {
  dark: colors.COLOR_BRAND_QUINARY,
  main: colors.COLOR_BRAND_QUINARY75,
  light: colors.COLOR_BRAND_QUINARY50,
  shade: colors.COLOR_BRAND_QUINARY25,
};

export const brandSenary = {
  dark: colors.COLOR_BRAND_SENARY,
  main: colors.COLOR_BRAND_SENARY75,
  light: colors.COLOR_BRAND_SENARY50,
  shade: colors.COLOR_BRAND_SENARY25,
};

export const brandSeptenary = {
  dark: colors.COLOR_BRAND_SEPTENARY,
  main: colors.COLOR_BRAND_SEPTENARY75,
  light: colors.COLOR_BRAND_SEPTENARY50,
  shade: colors.COLOR_BRAND_SEPTENARY25,
};

export const brandOctonary = {
  dark: colors.COLOR_BRAND_OCTONARY,
  main: colors.COLOR_BRAND_OCTONARY75,
  light: colors.COLOR_BRAND_OCTONARY50,
  shade: colors.COLOR_BRAND_OCTONARY25,
};

export const brandNonary = {
  dark: colors.COLOR_BRAND_NONARY,
  main: colors.COLOR_BRAND_NONARY75,
  light: colors.COLOR_BRAND_NONARY50,
  shade: colors.COLOR_BRAND_NONARY25,
};

export const brandDenary = {
  dark: colors.COLOR_BRAND_DENARY,
  main: colors.COLOR_BRAND_DENARY75,
  light: colors.COLOR_BRAND_DENARY50,
  shade: colors.COLOR_BRAND_DENARY25,
};

export const text = {
  primary: colors.COLOR_TEXT_PRIMARY,
  secondary: colors.COLOR_TEXT_SECONDARY,
  disabled: colors.COLOR_TEXT_DISABLED,
};

export const common = {
  black: colors.COLOR_COMMON_BLACK,
  contrast: colors.COLOR_COMMON_CONTRAST,
  white: colors.COLOR_COMMON_WHITE,
};

export const primary = {
  dark: colors.COLOR_PRIMARY,
  main: colors.COLOR_PRIMARY80,
  light: colors.COLOR_PRIMARY60,
  extraLight: colors.COLOR_PRIMARY40,
  shade: colors.COLOR_PRIMARY20,
};

export const secondary = {
  dark: colors.COLOR_SECONDARY,
  main: colors.COLOR_SECONDARY80,
  light: colors.COLOR_SECONDARY60,
  extraLight: colors.COLOR_SECONDARY40,
  shade: colors.COLOR_SECONDARY20,
};

export const tertiary = {
  dark: colors.COLOR_TERTIARY,
  main: colors.COLOR_TERTIARY80,
  light: colors.COLOR_TERTIARY60,
  extraLight: colors.COLOR_TERTIARY40,
  shade: colors.COLOR_TERTIARY20,
};

export const error = {
  dark: colors.COLOR_ERROR,
  main: colors.COLOR_ERROR75,
  light: colors.COLOR_ERROR50,
};

export const warning = {
  dark: colors.COLOR_WARNING,
  main: colors.COLOR_WARNING75,
  light: colors.COLOR_WARNING50,
};

export const info = {
  dark: colors.COLOR_INFO,
  main: colors.COLOR_INFO75,
  light: colors.COLOR_INFO50,
};

export const success = {
  dark: colors.COLOR_SUCCESS,
  main: colors.COLOR_SUCCESS75,
  light: colors.COLOR_SUCCESS50,
};

export const perfSuccess = {
  dark: colors.COLOR_PERF_SUCCESS,
  main: colors.COLOR_PERF_SUCCESS75,
  light: colors.COLOR_PERF_SUCCESS50,
  shade: colors.COLOR_PERF_SUCCESS25,
};

export const perfWarningOne = {
  dark: colors.COLOR_PERF_WARNING_ONE,
  main: colors.COLOR_PERF_WARNING_ONE75,
  light: colors.COLOR_PERF_WARNING_ONE50,
  shade: colors.COLOR_PERF_WARNING_ONE25,
};

export const perfWarningTwo = {
  dark: colors.COLOR_PERF_WARNING_TWO,
  main: colors.COLOR_PERF_WARNING_TWO75,
  light: colors.COLOR_PERF_WARNING_TWO50,
  shade: colors.COLOR_PERF_WARNING_TWO25,
};

export const perfFailure = {
  dark: colors.COLOR_PERF_FAILURE,
  main: colors.COLOR_PERF_FAILURE75,
  light: colors.COLOR_PERF_FAILURE50,
  shade: colors.COLOR_PERF_FAILURE25,
};

export const progress = {
  dark: colors.COLOR_PROGRESS,
  main: colors.COLOR_PROGRESS75,
  light: colors.COLOR_PROGRESS50,
  shade: colors.COLOR_PROGRESS25,
};

export const background = {
  default: colors.COLOR_BACKGROUND_DEFAULT,
  paper: colors.COLOR_BACKGROUND_PAPER,
  shade: colors.COLOR_BACKGROUND_SHADE,
};

export const dividerSolid = colors.COLOR_DIVIDER_SOLID;
export const dividerTransparent = colors.COLOR_DIVIDER_TRANSPARENT;

export const defaultButton = palette.augmentColor({
  color: {
    dark: colors.COLOR_TERTIARY60,
    light: colors.COLOR_TERTIARY20,
    main: colors.COLOR_TERTIARY40,
    contrastText: colors.COLOR_TERTIARY,
  },
});

export const listItemSelected = colors.COLOR_LIST_ITEM_SELECTED;
