import Head from "next/head";
import { Providers } from "./providers";
import { Header } from "./components/header/Header";
import { Footer } from "./components/Footer";

export const metadata = {
  title: "Cortez Amarillo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BWJSJYF5MT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BWJSJYF5MT');
            `,
          }}
        />
      </Head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
