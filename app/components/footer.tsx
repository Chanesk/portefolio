import Link from "next/link";

export default function Footer(){
    return(
        <footer className="md:mt-12">
            <p className="text-center md:text-base text-sm">Prefer to email us? Send your inquiry to: <Link href='mailto:agneskabanga01@gmail.com' className="font-medium text-green">agneskabanga01@gmail.com</Link></p>
            <p className="text-center text-sm pb-4 pt-2 ">©2024 Agnès KABANGA </p>
        </footer>
    )
}