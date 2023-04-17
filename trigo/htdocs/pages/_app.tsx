import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Layout } from "@/components/layout";
import { MenuFlag } from "@/components/context/MenuFlag";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MenuFlag>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MenuFlag>
  );
}
