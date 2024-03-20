import Link from "next/link";
import { ubuntu } from "../components/fonts";
import style from "@/app/styles/page.module.css"
export default function Maza(){
    return(
        <section className={` ${style.slide}` }>
            <div>
                <h1 className={`text-2xl mb-2 ${ubuntu.className}`}>Maza.</h1>
                <p className="pb-2">{"I have developed the website mockup for MAZA, which showcases the company and its activities. I made sure that the interface is both beautiful and intuitive. I used Figma as the tool to create this mockup."}</p>
                <Link href="https://www.figma.com/proto/9hJnunrQbhdUXILB59C1m2/Maza?type=design&node-id=17-11&t=UiJtTGEg2iikVMOI-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=17%3A26" target="_blank" className={`w-28 ${style.link} ${style.bordergradient}`}>View mockup</Link>
            </div>
        </section>
    )
}