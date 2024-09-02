import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'


import Header from "@/components/ui/header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "Fashion Assistant",
  description: "Your personal AI-powered fashion advisor and stylist",
  keywords: "fashion, AI, stylist, clothing, outfit, style",
  author: "Your Name or Company",
  openGraph: {
    title: "Fashion Assistant",
    description: "Your personal AI-powered fashion advisor and stylist",
    type: "website",
    url: "https://www.intelligent-fashion.com",
    image: "/path-to-your-og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Assistant",
    description: "Your personal AI-powered fashion advisor and stylist",
    image: "/path-to-your-twitter-image.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  );
}
 