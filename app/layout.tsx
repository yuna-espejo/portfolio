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
  title: "Yuna Espejo · Junior Developer & Automation Engineer",
  description: "Junior consultant at Timestamp Group working with SAP BTP, GitHub Actions and Linux automation. ASIX student starting CS at UOC in September. Building data tools and exploring motorsport analytics with Python.",
  keywords: [
    "Yuna Espejo",
    "junior developer",
    "SAP BTP",
    "automation engineer",
    "GitHub Actions",
    "Linux",
    "Python",
    "portfolio",
    "Barcelona",
    "UOC",
    "motorsport analytics",
    "F1 data",
  ],
  authors: [{ name: "Yuna Espejo" }],
  verification: {
    google: "Dr-xPGaIr0n8v7ouJJhUGzob8NCYkb5eLIOsWHpLbr8",
    other: {
      "msvalidate.01": "5A14052F7F4EC98C40C83F5D37BE2EC8",
    },
  },
  openGraph: {
    title: "Yuna Espejo · Junior Developer & Automation Engineer",
    description: "Junior consultant working with SAP BTP, GitHub Actions and Linux. Starting CS degree at UOC. Building data tools and motorsport visualizations with Python.",
    url: "https://yunaespejo.com",
    type: "website",
    images: [{ url: "https://yunaespejo.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuna Espejo · Junior Developer & Automation Engineer",
    description: "Junior consultant working with SAP BTP, GitHub Actions and Linux. Starting CS degree at UOC. Building data tools and motorsport visualizations with Python.",
    images: ["https://yunaespejo.com/og-image.png"],
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