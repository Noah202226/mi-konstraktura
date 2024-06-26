import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MI-Konstruktura",
  description: "Construction Builder and Cabinets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
