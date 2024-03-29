import "@/styles/globals.css";
import Header from "@/components/Header";
import Head from "next/head";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
  <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet"/>
  </Head>
  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
