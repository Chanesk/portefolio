import type { Metadata } from "next";
import { montserrat } from '@/app/components/fonts'
import "./globals.css";
import Header from "./components/header";


export const metadata: Metadata = {
  title: "Agnès KABANGA",
  description: "Discover my portfolio, passionate developer. Explore my skills in web development, my completed projects, and my contributions in the field of software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-main text-text ${montserrat.className}`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
