'use client';
import Link from "next/link";
import Image from "next/image";
import { ubuntu } from "@/app/components/fonts";
import style from "@/app/styles/page.module.css";
import clsx from 'clsx'
import { usePathname } from "next/navigation";

export default function Navbar(){
    const pathname = usePathname()
    return(
        <nav className="w-1/6 mt-20 ">
            <h2 className={`text-xl  ${ubuntu.className}`}>Projects</h2>
            <div className="ml-4">
                <Image src="/top.png" alt="" width={56} height={56} className="relative right-4 top-4"/>
                <div className="relative bottom-6 ml-4 mt-2 ">
                    <Link href="/socodis" className={clsx(`w-16 ${style.link} ${style.bordergradient}`,{'text-green': pathname == '/socodis'})}>Socodis</Link> 
                    <Link href="/koridek" className={clsx(`w-16 ${style.link} ${style.bordergradient}`,{'text-green': pathname == '/koridek'})}>Koridek</Link>
                    <Link href="/raconte" className={clsx(`w-16 ${style.link} ${style.bordergradient}`,{'text-green': pathname == '/raconte'})}>Raconte</Link>
                    <Link href="/gonaive" className={clsx(`w-16 ${style.link} ${style.bordergradient}`,{'text-green': pathname == '/gonaive'})}>Gonaive</Link>
                    <Link href="/maza" className={clsx(`w-10 ${style.link} ${style.bordergradient}`,{'text-green': pathname == '/maza'})}>Maza</Link>
                </div>
                <Image src="/down.png" alt="" height={56} width={56} className="relative left-16 bottom-14"/>
            </div>
        </nav>
    )
}