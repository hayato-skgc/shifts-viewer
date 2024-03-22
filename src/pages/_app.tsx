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

import { Provider } from 'jotai';

export const theme = createTheme({
  typography: {
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