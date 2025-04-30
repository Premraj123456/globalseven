// import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

// export const metadata = {
//   title: "GlobalSeven | Timely Insights: Breaking News Updates, Global Headlines, and Detailed Coverage",
//   description: "Stay informed on global news quickly and easily with our well-structured blog posts.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body
        className={`antialiased flex flex-col items-center`}
      >
        
        {children}
        
      </body>
    </html>
  );
}
