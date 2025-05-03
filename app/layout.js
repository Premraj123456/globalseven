import { Permanent_Marker } from 'next/font/google';
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";

export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanent-marker',
});

export const metadata = {
  title: "GlobalSeven | Timely Insights: Breaking News Updates, Global Headlines, and Detailed Coverage",
  description: "Stay informed on global news quickly and easily with our well-structured blog posts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* ✅ Google Analytics Script - Load in <head> via strategy */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G5Q431YDBN"
          strategy="beforeInteractive"
        />
        <Script
          id="gtag-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G5Q431YDBN');
            `,
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
