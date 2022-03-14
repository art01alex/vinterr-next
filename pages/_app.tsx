import '../styles/reset.css';
import '../styles/globals.css';
import '../styles/nav.css';
import { AppProps } from 'next/dist/shared/lib/router/router';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import LoadingScreen from './_loadingScreen';
import ButScrollUp from '../components/butScrollUp';



function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  });

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      {!loading ?
        <>
          <Head>
            <title>Магазин женского трикотажа</title>
          </Head>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </>
        :
        <LoadingScreen />}
      <ButScrollUp />
    </>
  );
}

export default MyApp;
