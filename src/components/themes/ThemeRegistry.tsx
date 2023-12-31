'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'; // or `v14-appRouter` if you are using Next.js v14


export default function ThemeRegistry(props: any) {
    const { options, children } = props;
    return (
        <AppRouterCacheProvider options={options}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}