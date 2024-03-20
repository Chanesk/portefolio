import Image from "next/image";
import Link from "next/link";
import { ubuntu } from "../components/fonts";
import style from "@/app/styles/page.module.css"

export default function Gonaive(){
    return(
        <section className={`${style.slide}`}>
            <div>
                <h1 className={`text-2xl mb-4 ${ubuntu.className}`}>La Gonaïve.</h1>
                <p className="pb-2">{"I developed the Gonaïve showcase site, a platform that highlights the company's activities. The stack is Strapi API and NextJS. The reporisitory for this one is private for at the moment."}</p>
                <Link href="https://www.lagonaive.com" target="_blank" className={`w-20 font-bold ${style.link} ${style.bordergradient}`}>View site</Link>
            </div>
        </section>
    )
}