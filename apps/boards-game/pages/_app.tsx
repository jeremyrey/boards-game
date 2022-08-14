import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

import { UIProvider } from '@boards-game/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Head>
        <title>Welcome to boards-game!</title>
      </Head>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default CustomApp;
