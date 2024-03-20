import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

export default function header(){
    return(
        <header className="px-5vw py-4 flex justify-between items-center  md:static fixed top-0 bg-main/60 w-full z-20 backdrop-blur-md">
            <Link href="/" >
                <Image src='/logo.png' alt="logo" width={80} height={40}  style={{objectFit:"contain"}} className="hidden md:block w-full h-auto"/>
                <Image src='/logo.png' alt="logo" width={40} height={20}  style={{objectFit:"contain"}} className=" md:hidden w-full h-auto"/>
            </Link>
            <div className="flex md:gap-4 gap-2 text-grey">
                <Link href="https://twitter.com/Ag28925Agnes" target="_blank"><FaXTwitter className="md:h-6 md:w-6 h-4 w-4" /></Link>
                <Link href="https://github.com/Chanesk" target="_blank"><IoLogoGithub className="md:h-6 md:w-6 h-4 w-4"/></Link>
                <Link href="https://www.linkedin.com/in/agn%C3%A8s-kabanga/" target="_blank"><CiLinkedin className="md:h-6 md:w-6 h-4 w-4"/></Link>
            </div>
        </header>
    )
}