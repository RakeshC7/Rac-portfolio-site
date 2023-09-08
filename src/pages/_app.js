import '@/styles/globals.css';
import Navbar from './../components/layout/Navbar';
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Navbar />
      <Component {...pageProps} />
    </Fragment>
  )
}
