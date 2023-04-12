/* eslint-disable no-unused-vars */
import '@emotion/react';

declare module '@emotion/react' {
    interface Theme {
        colors: {
            primary: string;
            secondary: string;
            lightSecondary: string;

            hover: {
                primary: string;
                secondary: string;
            };
        };
    }
}

declare module '@mui/material/styles' {
    interface Theme {
        colors: {
            primary: string;
            secondary: string;
            lightSecondary: string;

            hover: {
                primary: string;
                secondary: string;
            };
        };
    }
}
