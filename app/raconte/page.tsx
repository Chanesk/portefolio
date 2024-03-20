import Link from "next/link";
import { ubuntu } from "../components/fonts";
import style from "@/app/styles/page.module.css"

export default function Ranconte(){
    return(
        <section className={`${style.slide}`}>
            <div>
                <h1 className={`text-2xl mb-2 ${ubuntu.className}`}>Raconte.</h1>
                <p>{"I have developed a website called Raconte, which is a blog platform that allows users to read stories. I started by creating a mockup using Figma to ensure a visually appealing design. The stack is expressJS API, MongoDB and Angular."}</p>
                <div className="flex gap-8 font-bold mt-4">
                    <Link href="https://raconte-chanesk.vercel.app/" target="_blank" className={`w-20  ${style.link} ${style.bordergradient}`}>View site</Link>
                    <Link href="https://github.com/Chanesk/raconte_blog" target="_blank" className={`w-26  ${style.link} ${style.bordergradient}`}>View Github</Link>
                    <Link href="https://www.figma.com/proto/7KY2oU6ZNub8aiQcJ2IIpY/blog-angular?type=design&node-id=9-21&t=UiJtTGEg2iikVMOI-0&scaling=min-zoom&page-id=9%3A20"  target="_blank" className={`w-26  ${style.link} ${style.bordergradient}`}>View mockup</Link>
                </div>
            </div>
        </section>
    )
}