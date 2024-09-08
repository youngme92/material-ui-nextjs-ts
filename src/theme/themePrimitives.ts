import { alpha, createTheme, PaletteMode, Shadows } from "@mui/material/styles";

declare module '@mui/material/Paper' {
    interface PaperPropsVariantOverrides {
      highlighted: true;
    }
}
declare module '@mui/material/styles/createPalette' {
interface ColorRange {
    100: string;
    90: string;
    80: string;
    70: string;
    60: string;
    50: string;
    40: string;
    30: string;
    20: string;
    10: string;
    5: string;
}

interface PaletteColor extends ColorRange {}
}

const defaultTheme = createTheme();

const customShadows: Shadows = [...defaultTheme.shadows];

export const brand = {
    100: '#091939',
    90: '#2057C5',
    80: '#3478FE',
    70: '#669AFF',
    60: '#80ABFF',
    50: '#94BBFF',
    40: '#ACCBFF',
    30: '#BFD9FF',
    20: '#DDECFF',
    10: '#ECF6FF',
    5: '#F6FBFF',
  };
  
  export const gray = {
    100: "#1F2023",
    90: '#2A2F39',
    80: '#3C4659',
    70: '#546178',
    60: '#6B768C',
    50: '#838C9F',
    40: '#949DAF',
    30: '#B7BECD',
    20: '#CFD3DD',
    10: '#E6E9EF',
    5: '#F2F3F5',
    3: '#F6F7F8',
    2: '#F9FAFB',
    1: '#FCFCFD',

  };
  
  export const green = {
    50: 'hsl(120, 80%, 98%)',
    100: 'hsl(120, 75%, 94%)',
    200: 'hsl(120, 75%, 87%)',
    300: 'hsl(120, 61%, 77%)',
    400: 'hsl(120, 44%, 53%)',
    500: 'hsl(120, 59%, 30%)',
    600: 'hsl(120, 70%, 25%)',
    700: 'hsl(120, 75%, 16%)',
    800: 'hsl(120, 84%, 10%)',
    900: 'hsl(120, 87%, 6%)',
  };
  
  export const orange = {
    50: 'hsl(45, 100%, 97%)',
    100: 'hsl(45, 92%, 90%)',
    200: 'hsl(45, 94%, 80%)',
    300: 'hsl(45, 90%, 65%)',
    400: 'hsl(45, 90%, 40%)',
    500: 'hsl(45, 90%, 35%)',
    600: 'hsl(45, 91%, 25%)',
    700: 'hsl(45, 94%, 20%)',
    800: 'hsl(45, 95%, 16%)',
    900: 'hsl(45, 93%, 12%)',
  };
  
  export const red = {
    50: 'hsl(0, 100%, 97%)',
    100: 'hsl(0, 92%, 90%)',
    200: 'hsl(0, 94%, 80%)',
    300: 'hsl(0, 90%, 65%)',
    400: 'hsl(0, 90%, 40%)',
    500: 'hsl(0, 90%, 30%)',
    600: 'hsl(0, 91%, 25%)',
    700: 'hsl(0, 94%, 18%)',
    800: 'hsl(0, 95%, 12%)',
    900: 'hsl(0, 93%, 6%)',
  };

  export const white = {
    100: '#ffffff'
  }
  
export const getDesignTokens = (mode: PaletteMode) => {
    customShadows[1] =
      mode === 'dark'
        ? 'hsla(220, 30%, 5%, 0.7) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.8) 0px 8px 16px -5px'
        : 'hsla(220, 30%, 5%, 0.07) 0px 4px 16px 0px, hsla(220, 25%, 10%, 0.07) 0px 8px 16px -5px';
  
    return {
      palette: {
        mode,
        content: {
            hightest: gray[100],
            higher: gray[80],
            high: gray[60],
            medium: gray[40],
            low: gray[30],
            lower: gray[20],
            primary: brand[100],
            'primary-hover': brand[90],
        },
        bg: {
            highest: white[100],   
        }
        // primary: {
        //   light: brand[200],
        //   main: brand[400],
        //   dark: brand[700],
        //   contrastText: brand[50],
        //   ...(mode === 'dark' && {
        //     contrastText: brand[50],
        //     light: brand[300],
        //     main: brand[400],
        //     dark: brand[700],
        //   }),
        // },
        // info: {
        //   light: brand[100],
        //   main: brand[300],
        //   dark: brand[600],
        //   contrastText: gray[50],
        //   ...(mode === 'dark' && {
        //     contrastText: brand[300],
        //     light: brand[500],
        //     main: brand[700],
        //     dark: brand[900],
        //   }),
        // },
        // warning: {
        //   light: orange[300],
        //   main: orange[400],
        //   dark: orange[800],
        //   ...(mode === 'dark' && {
        //     light: orange[400],
        //     main: orange[500],
        //     dark: orange[700],
        //   }),
        // },
        // error: {
        //   light: red[300],
        //   main: red[400],
        //   dark: red[800],
        //   ...(mode === 'dark' && {
        //     light: red[400],
        //     main: red[500],
        //     dark: red[700],
        //   }),
        // },
        // success: {
        //   light: green[300],
        //   main: green[400],
        //   dark: green[800],
        //   ...(mode === 'dark' && {
        //     light: green[400],
        //     main: green[500],
        //     dark: green[700],
        //   }),
        // },
        // grey: {
        //   ...gray,
        // },
        // divider: mode === 'dark' ? alpha(gray[700], 0.6) : alpha(gray[300], 0.4),
        // background: {
        //   default: 'hsl(0, 0%, 99%)',
        //   paper: 'hsl(220, 35%, 97%)',
        //   ...(mode === 'dark' && { default: gray[900], paper: 'hsl(220, 30%, 7%)' }),
        // },
        // text: {
        //   primary: gray[800],
        //   secondary: gray[600],
        //   warning: orange[400],
        //   ...(mode === 'dark' && { primary: 'hsl(0, 0%, 100%)', secondary: gray[400] }),
        // },
        // action: {
        //   hover: alpha(gray[200], 0.2),
        //   selected: `${alpha(gray[200], 0.3)}`,
        //   ...(mode === 'dark' && {
        //     hover: alpha(gray[600], 0.2),
        //     selected: alpha(gray[600], 0.3),
        //   }),
        // },
      },
      typography: {
        fontFamily: ['"Inter", "sans-serif"'].join(','),
        h1: {
          fontSize: defaultTheme.typography.pxToRem(48),
          fontWeight: 600,
          lineHeight: 1.2,
          letterSpacing: -0.5,
        },
        h2: {
          fontSize: defaultTheme.typography.pxToRem(36),
          fontWeight: 600,
          lineHeight: 1.2,
        },
        h3: {
          fontSize: defaultTheme.typography.pxToRem(30),
          lineHeight: 1.2,
        },
        h4: {
          fontSize: defaultTheme.typography.pxToRem(24),
          fontWeight: 600,
          lineHeight: 1.5,
        },
        h5: {
          fontSize: defaultTheme.typography.pxToRem(20),
          fontWeight: 600,
        },
        h6: {
          fontSize: defaultTheme.typography.pxToRem(18),
          fontWeight: 600,
        },
        subtitle1: {
          fontSize: defaultTheme.typography.pxToRem(18),
        },
        subtitle2: {
          fontSize: defaultTheme.typography.pxToRem(14),
          fontWeight: 500,
        },
        body1: {
          fontSize: defaultTheme.typography.pxToRem(14),
        },
        body2: {
          fontSize: defaultTheme.typography.pxToRem(14),
          fontWeight: 400,
        },
        caption: {
          fontSize: defaultTheme.typography.pxToRem(12),
          fontWeight: 400,
        },
      },
      shape: {
        borderRadius: 8,
      },
      shadows: customShadows,
    };
  };