'use client';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { createTheme } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

const theme = createTheme({
    typography: {
        fontFamily: "'Poppins', sans-serif",
    },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles styles={{
                    // root scope
                    "html, body": { fontFamily: "'Poppins', sans-serif" },
                    // headings and common UI
                    "h1, h2, h3, h4, h5, h6": { fontFamily: "'Poppins', sans-serif !important" },
                    "button, a, input, textarea, select, .btn": { fontFamily: "'Poppins', sans-serif !important" },
                    // known classes from your components
                    ".hero-title, .hero-subtitle, .hero-description": { fontFamily: "'Poppins', sans-serif !important" },
                    ".apply-now-btn .btn, .mainmenu-nav a, .header-action": { fontFamily: "'Poppins', sans-serif !important" },
                }} />
                {children}
            </ThemeProvider>
        </NextAppDirEmotionCacheProvider>
    );
}
