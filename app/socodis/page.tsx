import Link from "next/link";
import Image from "next/image";
import { ubuntu } from "../components/fonts";
import style from '@/app/styles/page.module.css'
export default function Socodis(){
    return(
        <section className={` ${style.slide}`}>
            <div>
                <h1 className={`text-2xl mb-2 ${ubuntu.className}`}>Socodis-Equipment.</h1>
                <p  className="pb-2">{"I developed the Socodis Equipment showcase site, a platform that highlights the company's activities. The stack is NextTS. The reporisitory for this one is private for at the moment."}</p>
                <div className="flex gap-8 font-bold mt-2">
                    <Link href="https://www.socodis-equipment.com" target="_blank" className={`w-20  ${style.link} ${style.bordergradient}`}>View site</Link>
                    <Link href="https://www.figma.com/proto/1lBx1oioJKXCmrpHb85NbN/socodis?type=design&node-id=16-23&t=UiJtTGEg2iikVMOI-0&scaling=min-zoom&page-id=16%3A22&starting-point-node-id=16%3A67" target="_blank" className={`w-26  ${style.link} ${style.bordergradient}`}>View mockup</Link>
                </div>
            </div>
        </section>
    )
}