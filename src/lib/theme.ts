import { createTheme, responsiveFontSizes, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles/createTypography' {
    interface Typography {
        fontWeightHeavy: number;
    }
    interface TypographyOptions {
        fontWeightHeavy: number;
    }
}

const THEME: ThemeOptions = {
    typography: {
        fontFamily: `'Roboto', sans-serif`,
        fontWeightLight: 100,
        fontWeightMedium: 300,
        fontWeightRegular: 400,
        fontWeightHeavy: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 500,
        },
        h4: {
            fontSize: '1.6rem',
            fontWeight: 500,
        },
        h5: {
            fontSize: '1.4rem',
            fontWeight: 500,
        },
        h6: {
            fontSize: '1.2rem',
            fontWeight: 500,
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
        },
        body2: {
            fontSize: '.8rem',
            fontWeight: 400,
        },
        button: {
            fontWeight: 700,
        },
    },
    palette: {
        primary: { main: '#0D8242', dark: '#0D8242', light: '#0D8242' },
        secondary: { main: '#0D8242', dark: '#0D8242', light: '#0D8242' },
        contrastThreshold: 3,
        tonalOffset: 0.5,
        mode: 'dark',
    },
    shape: {
        borderRadius: 4,
    },
};

const light: ThemeOptions = {
    ...THEME,
    palette: {
        ...THEME.palette,
        mode: 'light',
    },
};

const dark: ThemeOptions = {
    ...THEME,
    palette: {
        ...THEME.palette,
        mode: 'dark',
    },
};

export const lightTheme = responsiveFontSizes(createTheme(light));
export const darkTheme = responsiveFontSizes(createTheme(dark));
