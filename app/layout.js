// import { Geist, Geist_Mono } from "next/font/google";
// import { Permanent_Marker } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Script from "next/script";


// export const permanentMarker = Permanent_Marker({
//   subsets: ["latin"],
//   weight: "400", // Permanent Marker only supports 400
//   variable: "--font-permanent-marker", // Optional: for Tailwind or custom CSS
// });


export const metadata = {
  title: "GlobalSeven | Timely Insights: Breaking News Updates, Global Headlines, and Detailed Coverage",
  description: "Stay informed on global news quickly and easily with our well-structured blog posts.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
