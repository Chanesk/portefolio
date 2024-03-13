import type { Metadata } from "next";
import { montserrat } from '@/app/components/fonts'
import "./globals.css";
import Header from "./components/header";
import Navbar from "./components/nav-bar";


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
      <body className={`bg-main text-text h-full text-base  ${montserrat.className}`}>
        <Header/>
        <main className="h-96 flex lg:justify-center items-center gap-36 px-5vw md:gap-20">
          <div className="lg:w-3/6 w-4/6">
            {children}
          </div>
          <Navbar/>
        </main>
      </body>
    </html>
  );
}
