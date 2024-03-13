import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";

export default function header(){
    return(
        <header className="px-5vw py-6 flex justify-between items-center">
            <Link href="/" >
                <Image src='/logo.png' alt="logo" width={80} height={40}  style={{objectFit:"contain"}} className="hidden md:block w-full h-auto"/>
                <Image src='/logo.png' alt="logo" width={40} height={20}  style={{objectFit:"contain"}} className=" md:hidden w-full h-auto"/>
            </Link>
            <div className="flex md:gap-4 gap-2 text-grey">
                <Link href="#"><IoMdMail className="md:h-6 md:w-6 h-4 w-4" /></Link>
                <Link href="#"><IoLogoGithub className="md:h-6 md:w-6 h-4 w-4"/></Link>
                <Link href="#"><CiLinkedin className="md:h-6 md:w-6 h-4 w-4"/></Link>
            </div>
        </header>
    )
}