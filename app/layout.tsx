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
  title: "Yuna Espejo — Software Engineer Portfolio",
  description: "Junior Software Engineer based in Barcelona. Building data tools, motorsport analytics and F1 visualizations. Starting Computer Science at UOC. Junior Consultant at Timestamp Group.",
  keywords: ["software engineer", "F1", "motorsport analytics", "data visualization", "Barcelona", "portfolio", "FastF1", "React", "Python", "canvas API"],
  authors: [{ name: "Yuna Espejo" }],
  openGraph: {
    title: "Yuna Espejo — Software Engineer Portfolio",
    description: "Data tools, motorsport analytics and F1 visualizations.",
    url: "https://yunaespejo.com",
    siteName: "Yuna Espejo",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuna Espejo — Software Engineer Portfolio",
    description: "Data tools, motorsport analytics and F1 visualizations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="5A14052F7F4EC98C40C83F5D37BE2EC8" />
        <meta name="google-site-verification" content="Dr-xPGaIr0n8v7ouJJhUGzob8NCYkb5eLIOsWHpLbr8" />
      </head>
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