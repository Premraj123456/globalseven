// import { Geist, Geist_Mono } from "next/font/google";
import { Permanent_Marker } from 'next/font/google';
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

export const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400', // Permanent Marker only supports 400
  variable: '--font-permanent-marker', // Optional: for Tailwind or custom CSS
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "GlobalSeven | Timely Insights: Breaking News Updates, Global Headlines, and Detailed Coverage",
  description: "Stay informed on global news quickly and easily with our well-structured blog posts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G5Q431YDBN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G5Q431YDBN');
          `}
        </Script>
      </head>
      <body
        className={`antialiased `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
