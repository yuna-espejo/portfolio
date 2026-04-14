import "./globals.css";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import Navbar from "./components/Navbar";
import ContactButton from "./components/ContactButton";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700", "900"],
});

export const metadata = {
  title: "Yuna Espejo",
  description: "Software engineer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${montserrat.variable} ${inter.className}`}>
        <LanguageProvider>
          <Navbar />
          <ContactButton />
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}