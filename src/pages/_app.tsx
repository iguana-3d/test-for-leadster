import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globalStyle';
import themes from '../styles/theme';
import NavBar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Leadster</title>
      </Head>
      <ThemeProvider theme={themes.themeLight}>
        <GlobalStyle />
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
