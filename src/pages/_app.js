import { Fragment, useEffect } from 'react';
import Navbar from './../components/layout/Navbar';
import { showWelcomeMessageOnReload } from '../lib/utils';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

  useEffect(() => {
    showWelcomeMessageOnReload();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}
