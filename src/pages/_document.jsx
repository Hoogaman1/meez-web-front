/* eslint-disable react/prop-types */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

// MyDocument.getInitialProps = async ctx => {
//     const initialProps = await Document.getInitialProps(ctx);
//     const dir = ctx.locale === 'en' ? 'ltr' : 'rtl';

//     console.log(dir);

//     return { ...initialProps, dir };
// };
