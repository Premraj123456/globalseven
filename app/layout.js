import { Permanent_Marker } from 'next/font/google';
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";
import GTag from './components/GTag';

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
        <GTag /> {/* 👈 Load GTAG manually */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
