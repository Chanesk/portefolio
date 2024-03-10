import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

export default function header(){
    return(
        <header className="px-5vw py-6 flex justify-between items-center">
            <div>
                <Image src='/logo.png' alt="logo" width={48} height={24} className="md:w-20 md:h-10"/>
            </div>
            <nav className="flex md:gap-4 gap-2 text-grey">
                <Link href="#"><IoMdMail className="md:h-6 md:w-6 h-4 w-4" /></Link>
                <Link href="#"><IoLogoGithub className="md:h-6 md:w-6 h-4 w-4"/></Link>
                <Link href="#"><CiLinkedin className="md:h-6 md:w-6 h-4 w-4"/></Link>
            </nav>
        </header>
    )
}