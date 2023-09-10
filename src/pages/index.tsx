import Header from "@/components/Header";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import Particles from "@/components/Particles";
import { useEffect, useState } from "react";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-white ${inter.className}`}>
      <section className="relative overflow-clip h-800">
        <Particles />
        <Header />
        <div className="w-3/4 lg:w-1/2 mx-auto absolute z-20 left-1/2 -translate-x-1/2 mt-20 lg:mt-40">
          <div className="intro-section w-full py-24 flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-6xl text-center font-bold text-brown-2">
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
            <div className="summary mt-10 text-center w-full lg:w-3/4">
              <p className="font-semibold text-gray-500 text-xs sm:text-lg">
                I&apos;m a Full Stack Developer focus on both web and mobile
                application. I love learning and exploring new tech stack
                especially on modern technology.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-96 bg-none relative"></section>
      <section className="h-96 bg-none relative"></section>
      <section className="h-96 bg-none relative"></section>
    </main>
  );
}
