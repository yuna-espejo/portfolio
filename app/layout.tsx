import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import ContactButton from "./components/ContactButton";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yuna Espejo",
  description: "Software engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ContactButton />
        {children}
        <Analytics />
      </body>
    </html>
  );
}