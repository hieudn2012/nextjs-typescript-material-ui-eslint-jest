import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AppPropsWithLayout } from '@src/models';
import '@src/i18n/index';
import '../src/lib/global.css';
import createEmotionCache from '@src/utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { lightTheme } from '@src/lib/theme';

const clientSideEmotionCache = createEmotionCache();

const App = ({ Component, emotionCache = clientSideEmotionCache, pageProps }: AppPropsWithLayout) => {
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default App;
