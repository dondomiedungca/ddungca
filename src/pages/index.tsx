import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Particles from "@/components/Particles";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-white ${inter.className}`}>
      <section className="relative overflow-x-clip pb-20 sm:pb-40 min-h-500 md:min-h-700">
        <Particles />
        <Header />
        <div className="w-3/4 lg:w-1/2 mx-auto relative z-30 pt-20 lg:pt-32">
          <div className="intro-section w-full pt-20 sm:pt-32 flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-5xl text-center font-bold text-brown-2">
              Hi, I&apos;m Dondomie Dungca
            </h1>
            <div className="location flex flex-row items-center justify-center gap-2 mt-5 lg:mt-10">
              <div className="flex flex-col justify-center items-center">
                <motion.img
                  src="/map.png"
                  className="w-7"
                  alt=""
                  animate={{ y: [8, 16, 8] }}
                  transition={{ repeat: Infinity, duration: 1, type: "just" }}
                />
                <img src="/oval.png" className="w-10 -translate-y-1" alt="" />
              </div>
              <p className="text-brown-4 text-sm font-semibold">
                Manila, Philippines
              </p>
            </div>
            <div className="summary mt-10 w-full lg:w-3/4">
              <p className="font-semibold text-gray-500 text-xs sm:text-lg text-center">
                A Full Stack developer with over 4 years of experience
                delivering highly efficient and scalable application focus on
                both web and mobile.
                <br />
                <br />
                When I am not at my computer, I&apos;m watching some courses and
                tutorials about AI and DevOps.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/waves.svg"
          className="absolute w-full -bottom-32 lg:-bottom-72 h-32 lg:h-72"
          alt=""
        />
      </section>
      <Projects />
      <Skills />
    </main>
  );
}
