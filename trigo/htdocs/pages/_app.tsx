import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout";
import { MenuFlag } from "@/components/context/MenuFlag";
import Head from "next/head";
import { meta } from "@/data/meta";

// 動的な内容
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.ogp} />
      </Head>
      <MenuFlag>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MenuFlag>
    </>
  );
}
