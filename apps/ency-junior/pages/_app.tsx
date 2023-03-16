import { ThemeProvider } from '@mui/material';
import { mytheme } from '@nese/ui-components';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to ency-junior!</title>
      </Head>
      <main className="app">
        <ThemeProvider theme={mytheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
