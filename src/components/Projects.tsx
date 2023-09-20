import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useMemo, forwardRef } from "react";
import { useInView } from "react-intersection-observer";

const Projects = (props: any, ref: any) => {
  const { ref: image1, inView: project1InView } = useInView({
    threshold: 1,
  });
  const { ref: image2, inView: project2InView } = useInView({
    threshold: 0.8,
  });
  const { ref: project2Ref, inView: project2Inview } = useInView({
    threshold: 0.6,
    delay: 0.2,
  });

  const animate = useAnimation();
  const animate2 = useAnimation();
  const animate3 = useAnimation();

  useEffect(() => {
    if (project1InView) {
      animate.start({
        opacity: 1,
        x: 0,
      });
    }
  }, [project1InView]);

  useEffect(() => {
    if (project2InView) {
      animate2.start({
        opacity: 1,
        x: 0,
      });
    }
  }, [project2InView]);

  const project2Images = useMemo(
    () => [
      { path: "/expo-logo.png", width: "w-6", link: "https://expo.dev/" },
      {
        path: "/postgres.png",
        width: "w-7",
        link: "https://www.postgresql.org/",
      },
      { path: "/nestjs.png", width: "w-6", link: "https://nestjs.com/" },
      { path: "/socket.io.png", width: "w-6", link: "https://socket.io/" },
      {
        path: "/docker-logo.png",
        width: "w-6",
        link: "https://www.docker.com/",
      },
    ],
    []
  );

  useEffect(() => {
    if (project2Inview) {
      animate3.start((index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5 * index,
          type: "spring",
          bounce: 0.3,
        },
      }));
    }
  }, [project2Inview]);

  return (
    <section ref={ref} className="bg-caramel-2 min-h-500">
      <p className="relative z-30 top-5 text-brown-4 text-sm font-semibold text-center w-full">
        FEATURED PROJECTS
      </p>
      <div className="relative z-30 w-3/4 lg:w-1/2 bg-white drop-shadow-xl rounded-lg min-h-100 mx-auto mt-20 sm:mt-24 flex flex-col sm:flex-row">
        <div className="p-3 md:p-5 w-full sm:w-1/2">
          <div className="sm:hidden flex flex-row gap-2 justify-end">
            <a
              href="https://capable-moxie-0abfb6.netlify.app/"
              target="_blank"
              className="bg-white-1 cursor-pointer rounded-full drop-shadow-md p-2 duration-200 transform active:scale-75 transition-transform"
            >
              <img src="/link.png" className="w-5" alt="" />
            </a>
            <a
              href="https://github.com/nodnod08/leiger-web"
              target="_blank"
              className="bg-white-1 cursor-pointer rounded-full drop-shadow-md p-2 duration-200 transform active:scale-75 transition-transform"
            >
              <img src="/github-link.png" className="w-5" alt="" />
            </a>
          </div>
          <p className="text-brown-5 font-semibold sm:font-bold text-md sm:text-lg">
            LEIGER
          </p>
          <p className="text-brown-6 font-normal text-sm">
            - Web Application - 2023
          </p>
          <p className="text-brown-4 font-semibold text-xs sm:text-sm mt-7">
            A fully working web meeting conference that used WebRTC including
            the functionality to share user screens and tabs, toggling the video
            and microphone.
          </p>
          <p className="text-center sm:text-left text-brown-7 font-semibold text-xs sm:text-sm mt-7">
            TECT STACK USED
          </p>
          <div className="w-full sm:w-3/4 flex flex-row py-5 gap-5 sm:gap-7 flex-wrap items-center justify-center">
            <a
              href="https://webrtc.org/"
              target="_blank"
              className="cursor-pointer"
            >
              <img src="/webrtc.png" className="w-5 sm:w-7 max-w-max" alt="" />
            </a>
            <a
              href="https://www.mongodb.com/"
              target="_blank"
              className="cursor-pointer"
            >
              <img src="/mongodb.png" className="h-5 sm:h-7 max-w-max" alt="" />
            </a>
            <a
              href="https://nestjs.com/"
              target="_blank"
              className="cursor-pointer"
            >
              <img src="/nestjs.png" className="w-5 sm:w-7" alt="" />
            </a>
            <a
              href="https://socket.io/"
              target="_blank"
              className="cursor-pointer"
            >
              <img src="/socket.io.png" className="w-5 sm:w-7" alt="" />
            </a>
            <a
              href="https://www.postgresql.org/"
              target="_blank"
              className="cursor-pointer"
            >
              <img
                src="/postgres.png"
                className="w-8 sm:w-10 min-w-32"
                alt=""
              />
            </a>
            <a
              href="https://vitejs.dev/"
              target="_blank"
              className="cursor-pointer"
            >
              <img src="/vite.png" className="w-5 sm:w-7" alt="" />
            </a>
          </div>
          <div className="hidden mt-10 sm:flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-2">
              <a
                href="https://capable-moxie-0abfb6.netlify.app/"
                target="_blank"
                className="cursor-pointer bg-white-1 rounded-full drop-shadow-md p-2 duration-200 transform active:scale-75 transition-transform"
              >
                <img src="/link.png" className="w-6" alt="" />
              </a>
              <a
                href="https://github.com/nodnod08/leiger-web"
                target="_blank"
                className="cursor-pointer bg-white-1 rounded-full drop-shadow-md p-2 duration-200 transform active:scale-75 transition-transform"
              >
                <img src="/github-link.png" className="w-6" alt="" />
              </a>
            </div>
            <a
              href="https://capable-moxie-0abfb6.netlify.app/"
              target="_blank"
              className="cursor-pointer"
            >
              <img src="/leiger-logo.png" className="mt-1 h-8" alt="" />
            </a>
          </div>
        </div>
        <div className="w-full sm:w-1/2 min-h-200 sm:min-h-100 relative overflow-x-hidden">
          <motion.img
            ref={image1}
            initial={{ x: -30, opacity: 0 }}
            animate={animate}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="/phone-sharing.png"
            alt=""
            className="absolute z-20 -left-10 top-0 w-48 sm:w-72"
          />
          <motion.img
            ref={image2}
            initial={{ x: 30, opacity: 0 }}
            animate={animate2}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="/macbook-pro-cut.png"
            alt=""
            className="w-64 sm:w-auto absolute z-20 right-0 bottom-0"
          />
        </div>
      </div>
      <div className="relative bg-white sm:block z-30 w-3/4 lg:w-1/2 min-h-300 mx-auto mt-12 sm:mt-14 py-3 sm:py-5 drop-shadow-xl rounded-lg">
        <p className="text-brown-6 font-semibold sm:font-bold text-sm sm:text-lg mx-5 mt-5">
          SKYCHAT
        </p>
        <p className="text-brown-6 font-normal text-sm mx-5">
          - Mobile Application - 2023
        </p>
        <p className="relative z-20 text-brown-4 font-semibold text-xs sm:text-sm mt-7 mx-5">
          I also built a mobile application made from Expo React Native. This
          application included the functionality of Chat, Video call,
          Authentication via Google authentication, and custom authentication.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row relative z-20 sm:items-center justify-start sm:justify-center px-5 mt-5">
          <div>
            <p className="relative z-20 text-brown-7 font-semibold text-xs sm:text-sm">
              TECH STACK USED
            </p>
            <div
              ref={project2Ref}
              className="relative z-20 pt-3 sm:pt-7 flex flex-row flex-wrap justify-center sm:justify-center gap-4 sm:gap-5 w-full overflow-y-hidden"
            >
              {project2Images.map((imgObj, i) => (
                <a
                  href={imgObj.link}
                  key={i}
                  target="_blank"
                  className="cursor-pointer"
                >
                  <motion.img
                    animate={animate3}
                    initial={{
                      opacity: 0,
                      y: 100,
                    }}
                    key={i}
                    src={imgObj.path}
                    custom={i}
                    className={`${imgObj.width}`}
                  />
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-12 bg-white rounded-lg drop-shadow-xl py-2">
              <div className="bg-none rounded-full drop-shadow-lg px-3 p-1 sm:py-2 flex flex-row items-center gap-2">
                <img src="/encryption.png" className="w-4 sm:w-6" alt="" />
                <p className="font-semibold text-brown-6 text-2xs sm:text-xs">
                  DATA ENCRYPTION
                </p>
              </div>
              <div className="bg-none rounded-full drop-shadow-lg px-3 py-1 sm:py-2 flex flex-row items-center gap-2">
                <img src="/connection.png" className="w-4 sm:w-6" alt="" />
                <p className="font-semibold text-brown-6 text-2xs sm:text-xs">
                  WORKING CONNECTION
                </p>
              </div>
              <div className="bg-none rounded-full drop-shadow-lg px-3 py-1 sm:py-2 flex flex-row items-center gap-2">
                <img src="/authentication.png" className="w-4 sm:w-6" alt="" />
                <p className="font-semibold text-brown-6 text-2xs sm:text-xs">
                  MULTIPLE AUTHENTICATION
                </p>
              </div>
            </div>
          </div>
          <div className="z-30 w-full lg:w-1/2 bg-none mt-2 sm:mt-10 sm:mx-auto self-end">
            <img
              src="/skychat-mobile-view.png"
              className="inline sm:hidden w-full drop-shadow-2xl"
              alt=""
            />
            <img
              src="/skychat-web-view.png"
              className="hidden sm:inline w-2/3 drop-shadow-2xl"
              alt=""
            />
          </div>
        </div>
        <div className="relative z-20 flex flex-row items-center justify-between mt-5 mx-5">
          <a
            href="https://github.com/nodnod08/skychat-mobile"
            target="_blank"
            className="cursor-pointer bg-white-1 rounded-full drop-shadow-md p-2 duration-200 transform active:scale-75 transition-transform"
          >
            <img src="/github-link.png" className="w-6" alt="" />
          </a>
        </div>
        <img
          src="/wave-haikei.svg"
          className="absolute bottom-0 z-10 w-full"
          alt=""
        />
      </div>
      <p className=" text-brown-4 text-sm font-semibold text-center w-full mt-24 sm:mt-32">
        WHAT CAN I DO
      </p>
    </section>
  );
};

export default forwardRef(Projects);
