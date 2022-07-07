/* eslint-disable require-jsdoc */
import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
