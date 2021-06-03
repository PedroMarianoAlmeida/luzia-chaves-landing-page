import type { AppProps } from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';

import FacebookPixel from './../src/components/reusable/FacebookPixel';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <FacebookPixel>
        <Component {...pageProps} />
      </FacebookPixel>
    </>
  );
}

export default MyApp;
