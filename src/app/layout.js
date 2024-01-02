import { Inria_Sans } from "next/font/google";
import "./globals.css";

const inria = Inria_Sans({ subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{overflowX: 'hidden'}} className={inria.className}>{children}</body>
    </html>
  );
}
