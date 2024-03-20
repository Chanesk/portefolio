import Image from "next/image";
import { ubuntu } from "@/app/components/fonts";
import style from "@/app/styles/page.module.css";
import { IoPlayOutline } from "react-icons/io5";
import Link from "next/link";

export default function Home() {
  return (
        <section className={` lg:mt-0 md:mt-4 mt-16 ${style.slide}`}>
          <div>
            <h1 className={`md:text-2xl text-xl mt-4 md:mt-0 mb-2 md:w-full w-3/6 ${ubuntu.className} ${style.titleSm}`}>Welcome.</h1>
            <p>Hello, my name is <span className="font-bold">Agnes KABANGA</span>, i am a front-end developer based in Nairobi and Kinshasa. I specialize in working on various types of projects, including brochure websites and blogs.</p>
            <p className="pt-4">{"I have a passion for problem-solving, creating pixel-perfect designs, beautiful interface and implementing intuitive user experiences."}</p>
            <div className="md:flex mt-6 justify-center items-center">
              <div className="flex md:relative md:left-10">
              <Image src="/profil.jpg" alt="" width={160} height={100} className={`rounded-md ${style.filterimg}`}/>
              <div className={`border-green border-2 h-40 w-40 rounded-md relative -z-10 hidden md:block ${style.cadre}`}></div>
              </div>
              <div className="flex lg:flex-row flex-col lg:gap-12 gap-1 md:relative md:right-10 md:mt-0 my-8">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2"><IoPlayOutline className="text-green" /><span className="text-sm">JavaScript (ES6+)</span></div>
                  <div className="flex items-center gap-2"><IoPlayOutline className="text-green"/><span className="text-sm">React</span></div>
                  <div className="flex items-center gap-2"><IoPlayOutline className="text-green"/><span className="text-sm">Node.js</span></div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2"><IoPlayOutline className="text-green"/><span className="text-sm">TypeScript</span></div>
                  <div className="flex items-center gap-2"><IoPlayOutline className="text-green"/><span className="text-sm">NextJS</span></div>
                  <div className="flex items-center gap-2"><IoPlayOutline className="text-green"/><span className="text-sm">Angular</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden mt-10">
            <h2 className={` text-xl w-2/6 ${ubuntu.className} ${style.titleSm}`}>Projects</h2>
            <div className="bg-green/5 p-4 rounded-md mt-4">
                <h1 className={`md:text-2xl text-base mb-2 text-white ${ubuntu.className} `}>Socodis-Equipment.</h1>
                <p  className="pb-2">{"I developed the Socodis Equipment showcase site, a platform that highlights the company's activities. The stack is NextTS. The reporisitory for this one is private for at the moment."}</p>
                <div className="flex gap-8 font-bold mt-2">
                    <Link href="https://www.socodis-equipment.com" target="_blank" className={`w-16  ${style.link} ${style.bordergradient}`}>View site</Link>
                    <Link href="https://www.figma.com/proto/1lBx1oioJKXCmrpHb85NbN/socodis?type=design&node-id=16-23&t=UiJtTGEg2iikVMOI-0&scaling=min-zoom&page-id=16%3A22&starting-point-node-id=16%3A67" target="_blank" className={`w-26  ${style.link} ${style.bordergradient}`}>View mockup</Link>
                </div>
            </div>
           <div className="bg-green/5 p-4 rounded-md mt-4 ">
            <h1 className={` mb-2 text-base text-white ${ubuntu.className}`}>Koridek.</h1>
            <p className="pb-2">I have developed the website mockup for KORIDEK, which showcases the company and its activities. I made sure that the interface is both beautiful and intuitive. I used Figma as the tool to create this mockup.</p>
            <Link href="https://www.figma.com/proto/z2adsTWoqKQoShAaVLrlDb/Untitled?type=design&node-id=9-31&t=UiJtTGEg2iikVMOI-0&scaling=min-zoom&page-id=9%3A30&starting-point-node-id=16%3A25" target="_blank" className={`w-24 font-bold  ${style.link} ${style.bordergradient}`}>View mockup</Link>
           </div>
            <div className="bg-green/5 p-4 rounded-md mt-4" >
                <h1 className={`text-base mb-2 text-white ${ubuntu.className}`}>Raconte.</h1>
                <p>{"I have developed a website called Raconte, which is a blog platform that allows users to read stories. I started by creating a mockup using Figma to ensure a visually appealing design. The stack is expressJS API, MongoDB and Angular."}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 font-bold mt-4">
                    <Link href="https://raconte-chanesk.vercel.app/" target="_blank" className={`w-16  ${style.link} ${style.bordergradient}`}>View site</Link>
                    <Link href="https://github.com/Chanesk/raconte_blog" target="_blank" className={`w-26  ${style.link} ${style.bordergradient}`}>View Github</Link>
                    <Link href="https://www.figma.com/proto/7KY2oU6ZNub8aiQcJ2IIpY/blog-angular?type=design&node-id=9-21&t=UiJtTGEg2iikVMOI-0&scaling=min-zoom&page-id=9%3A20"  target="_blank" className={`w-26  ${style.link} ${style.bordergradient}`}>View mockup</Link>
                </div>
            </div>
            <div className="bg-green/5 p-4 rounded-md mt-4">
                <h1 className={`text-base mb-2 text-white ${ubuntu.className}`}>La Gonaïve.</h1>
                <p className="pb-2">{"I developed the Gonaïve showcase site, a platform that highlights the company's activities. The stack is Strapi API and NextJS. The reporisitory for this one is private for at the moment."}</p>
                <Link href="https://www.lagonaive.com" target="_blank" className={`w-16 font-bold ${style.link} ${style.bordergradient}`}>View site</Link>
            </div>
            <div className="bg-green/5 p-4 rounded-md mt-4 mb-10">
                <h1 className={`text-base mb-2 text-white ${ubuntu.className}`}>Maza.</h1>
                <p className="pb-2">{"I have developed the website mockup for MAZA, which showcases the company and its activities. I made sure that the interface is both beautiful and intuitive. I used Figma as the tool to create this mockup."}</p>
                <Link href="https://www.figma.com/proto/9hJnunrQbhdUXILB59C1m2/Maza?type=design&node-id=17-11&t=UiJtTGEg2iikVMOI-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=17%3A26" target="_blank" className={`w-24 font-bold ${style.link} ${style.bordergradient}`}>View mockup</Link>
            </div>
          </div>
        </section>
        
  );
}
