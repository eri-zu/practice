import { Html, Head, Main, NextScript } from "next/document";
import { Header } from "@/components/_view/header/header";
import { Footer } from "@/components/_view/footer/footer";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;900&family=Zen+Maru+Gothic:wght@700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/apple-touch-icon.png"></link>
      </Head>
      <body>
        <Header></Header>
        <Main />
        <Footer></Footer>
        <NextScript />
      </body>
    </Html>
  );
}
