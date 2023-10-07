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
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
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
      {/* <Messenger /> */}

      {/* Go Top Button */}
      <GoTop scrollStepInPx="50" delayInMs="10.50" />
    </IntlProvider>
  );
}

export default appWithTranslation(MyApp);
