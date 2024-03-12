import Image from "next/image";
import { ubuntu } from "@/app/components/fonts"

export default function Home() {
  return (
        <section className="flex h-49 gap-4">
          <Image src="/line.png" alt="" width={4} height={8}/>
          <div>
            <h1 className={`text-2xl ${ubuntu.className}`}>Welcome.</h1>
            <p>{"Hello, my name is Agnes KABANGA, i’m a front-end developer based in Nairobi and Kinshasa. I specialize in working on various types of projects, including brochure websites and blogs."}</p>
            <p className="pt-4">{"I have a passion for problem-solving, creating pixel-perfect designs, beautiful interface and implementing intuitive user experiences."}</p>
          </div>
        </section>
  );
}
