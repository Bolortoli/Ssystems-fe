import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "animate.css";
import "../styles/flaticon.css";
import "../styles/fontawesome.min.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Global Styles
import "../styles/style.css";
import "../styles/responsive.css";

import Head from "next/head";
import GoTop from "../components/Shared/GoTop";
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import { appWithTranslation } from 'next-i18next';
import ComingSoon from './index'
import Messenger from "../components/Chatbot/messenger";

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const router = useRouter();
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])


  React.useEffect(() => {
    AOS.init();
  }, []);

  const loadingScreenStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#f7f7f7', // Background color for the loading screen
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const logoStyle = {
    maxWidth: '300px', // Adjust the width and height to match your logo's dimensions
    height: 'auto',
  };

  return (
    <>
      {loading ? (
        <div style={loadingScreenStyle}>
          <img
            src="/images/black-logo.png"
            alt="Logo"
            style={logoStyle}
          />
        </div>
      ) : (
        <IntlProvider locale={locale}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Data center SSystems</title>
          </Head>
          <Component {...pageProps} />
          {/* <ComingSoon /> */}
          <Messenger />

          {/* Go Top Button */}
          <GoTop scrollStepInPx="50" delayInMs="10.50" />
        </IntlProvider>
      )}
    </>
  );
}

export default appWithTranslation(MyApp);
