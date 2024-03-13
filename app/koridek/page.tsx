import Image from "next/image";
import Link from "next/link";
import { ubuntu } from "../components/fonts";
import style from "@/app/styles/page.module.css"

export default function Koridek(){
    return(
        <section className={`flex lg:h-48 gap-4 h-50 ${style.slide}`}>
           <Image src="/line.png" alt="" width={8} height={8}/> 
           <div>
            <h1 className={`text-2xl mb-2 ${ubuntu.className}`}>Koridek.</h1>
            <p className="pb-2">I have developed the website mockup for KORIDEK, which showcases the company and its activities. I made sure that the interface is both beautiful and intuitive. I used Figma as the tool to create this mockup.</p>
            <Link href="https://www.figma.com/proto/z2adsTWoqKQoShAaVLrlDb/Untitled?type=design&node-id=9-31&t=UiJtTGEg2iikVMOI-0&scaling=min-zoom&page-id=9%3A30&starting-point-node-id=16%3A25" target="_blank" className={`w-28  ${style.link} ${style.bordergradient}`}>View mockup</Link>
           </div>
        </section>
    )
}