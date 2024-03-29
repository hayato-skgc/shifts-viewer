declare module '@mui/material/styles' {
  interface Palette {
    esa: {
      main: string;
      contrastText: string;
    };
  }
  interface PaletteOptions {
    esa?: {
      main?: string;
      contrastText?: string;
    };
  }
}

import type { AppProps, AppType } from 'next/app';

import { SessionProvider } from 'next-auth/react';
import { trpc } from '../utils/trpc';

import { CssBaseline } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Inter, Noto_Sans_JP } from 'next/font/google';

import { Provider } from 'jotai';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
});

const notojp = Noto_Sans_JP({
  weight: '400',
  subsets: ['latin']
});

export const theme = createTheme({
  typography: {
    fontFamily: [
      `"${inter.style.fontFamily}"`,
      `"${notojp.style.fontFamily}"`,
      '"メイリオ"',
      'Meiryo',
      '"ヒラギノ角ゴシック"',
      '"Hiragino Sans"',
      'sans-serif'
    ].join(','),
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    esa: {
      main: '#329c94',
      contrastText: '#fff'
    }
  },
});

const MyApp: AppType = ({ Component,
  pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <SessionProvider session={session}>
      <Provider>
        <AppCacheProvider>
          <ThemeProvider theme={theme} >
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
          </AppCacheProvider>
      </Provider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);