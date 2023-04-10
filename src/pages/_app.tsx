import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import NProgress from 'nprogress';
import Router from 'next/router';
import Store from '../state-manager/store';
import 'nprogress/nprogress.css';

//Config
import { theme } from '../configs/theme';

//Assets
import '../assets/styles/globals/general.css';

NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
    const darkModeTheme = createTheme(theme());

    return (
        <Provider store={Store}>
            <ThemeProvider theme={darkModeTheme}>
                <Toaster
                    position='bottom-left'
                    containerStyle={{
                        zIndex: 9999,
                        textAlign: 'right',
                        direction: 'rtl'
                    }}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}
