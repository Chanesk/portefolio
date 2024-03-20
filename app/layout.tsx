import type { Metadata } from "next";
import { montserrat } from '@/app/components/fonts'
import "./globals.css";
import Header from "./components/header";
import Navbar from "./components/nav-bar";
import Footer from "./components/footer";


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
      <body className={`bg-main text-text h-full md:text-base text-sm ${montserrat.className}`}>
        <Header/>
        <main className="md:h-full flex md:justify-center md:items-center lg:gap-36 px-5vw md:gap-20 ">
          <div className="lg:w-3/6 md:w-4/6 w-full">
            {children}
          </div>
          <Navbar/>
        </main>
        <Footer/>
      </body>
    </html>
  );
}
