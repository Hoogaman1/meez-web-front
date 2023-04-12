import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import Store from '../state-manager/store';
import 'nprogress/nprogress.css';

//Config
import { theme } from '../configs/theme';

//Assets
import '../assets/styles/globals/general.css';

// Utils
import { rtlLangs } from '../utils/constants';

NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }: AppProps) => {
    const { locale } = useRouter();
    const [direction, setDirection] = useState<'ltr' | 'rtl'>('rtl');
    const darkModeTheme = createTheme({ direction: direction }, theme());

    useEffect(() => {
        setDirection(locale! in rtlLangs ? 'rtl' : 'ltr');
        document.dir = locale! in rtlLangs ? 'rtl' : 'ltr';
    }, [locale]);

    return (
        <Provider store={Store}>
            <ThemeProvider theme={darkModeTheme}>
                <Toaster
                    position='bottom-left'
                    containerStyle={{
                        zIndex: 9999,
                        textAlign: 'right',
                        direction: direction
                    }}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
};

export default appWithTranslation(App);
