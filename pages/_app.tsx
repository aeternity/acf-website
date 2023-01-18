import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";
import { assetUrl } from "../lib";

const siteName = "æternity crypto foundation";
const getPageTitle = (pageName: string) => `${pageName} - ${siteName}`;

export const updateTitleTag = (pageName: string) => (
  <Head>
    <title>{getPageTitle(pageName)}</title>
  </Head>
);

function MyApp({ Component, pageProps }: AppProps) {
  console.log(pageProps, Component);
  return (
    <>
      <Head>
        <link rel="icon" href={assetUrl("/favicon.png")} />
        <title>{siteName}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
