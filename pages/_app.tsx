import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";
import { assetUrl } from "../lib";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={assetUrl("/favicon.png")} />
        <title>Aeternity Crypto Foundation</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
