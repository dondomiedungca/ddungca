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
      { path: "/expo-logo.png", width: "w-10" },
      { path: "/postgres.png", width: "w-10" },
      { path: "/nestjs.png", width: "w-10" },
      { path: "/socket.io.png", width: "w-10" },
      { path: "/docker-logo.png", width: "w-10" },
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#717171"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M25.98047,2.99023c-0.03726,0.00118 -0.07443,0.00444 -0.11133,0.00977h-5.86914c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3.58594l-10.29297,10.29297c-0.26124,0.25082 -0.36648,0.62327 -0.27512,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27512l10.29297,-10.29297v3.58594c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-5.87305c0.04031,-0.29141 -0.04973,-0.58579 -0.24615,-0.80479c-0.19643,-0.219 -0.47931,-0.34042 -0.77338,-0.33192zM6,7c-1.09306,0 -2,0.90694 -2,2v15c0,1.09306 0.90694,2 2,2h15c1.09306,0 2,-0.90694 2,-2v-10v-2.57812l-2,2v2.57813v8h-15v-15h8h2h0.57813l2,-2h-2.57812h-2z"></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href="https://github.com/nodnod08/leiger-web"
              target="_blank"
              className="bg-white-1 cursor-pointer rounded-full drop-shadow-md p-2 duration-200 transform active:scale-75 transition-transform"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="28"
                height="28"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#717171"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(8.53333,8.53333)">
                    <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                  </g>
                </g>
              </svg>
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
            the functionaliity to share user screen and tabs, toggling the video
            and microphone.
          </p>
          <p className="text-center sm:text-left text-brown-7 font-semibold text-xs sm:text-sm mt-7">
            TECT STACK USED
          </p>
          <div className="w-full sm:w-3/4 flex flex-row py-5 gap-5 sm:gap-7 flex-wrap items-center justify-center">
            <img src="/webrtc.png" className="w-5 sm:w-7 max-w-max" alt="" />
            <img src="/mongodb.png" className="h-5 sm:h-7 max-w-max" alt="" />
            <img src="/nestjs.png" className="w-5 sm:w-7" alt="" />
            <img src="/socket.io.png" className="w-5 sm:w-7" alt="" />
            <img src="/postgres.png" className="w-8 sm:w-10 min-w-32" alt="" />
            <img src="/vite.png" className="w-5 sm:w-7" alt="" />
          </div>
          <div className="hidden mt-10 sm:flex flex-row justify-between items-center">
            <div className="flex flex-row items-center gap-2">
              <a
                href="https://capable-moxie-0abfb6.netlify.app/"
                target="_blank"
                className="cursor-pointer bg-white-1 rounded-full drop-shadow-md p-2 duration-200 transform active:scale-75 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#717171"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M25.98047,2.99023c-0.03726,0.00118 -0.07443,0.00444 -0.11133,0.00977h-5.86914c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3.58594l-10.29297,10.29297c-0.26124,0.25082 -0.36648,0.62327 -0.27512,0.97371c0.09136,0.35044 0.36503,0.62411 0.71547,0.71547c0.35044,0.09136 0.72289,-0.01388 0.97371,-0.27512l10.29297,-10.29297v3.58594c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-5.87305c0.04031,-0.29141 -0.04973,-0.58579 -0.24615,-0.80479c-0.19643,-0.219 -0.47931,-0.34042 -0.77338,-0.33192zM6,7c-1.09306,0 -2,0.90694 -2,2v15c0,1.09306 0.90694,2 2,2h15c1.09306,0 2,-0.90694 2,-2v-10v-2.57812l-2,2v2.57813v8h-15v-15h8h2h0.57813l2,-2h-2.57812h-2z"></path>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                href="https://github.com/nodnod08/leiger-web"
                target="_blank"
                className="cursor-pointer bg-white-1 rounded-full drop-shadow-md p-2 duration-200 transform active:scale-75 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#717171"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <img src="/leiger-logo.png" className="mt-1 h-8" alt="" />
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
          I also build a mobile application made from Expo React Native. This
          application included the functionality of Chat, Video call,
          Authentication via Google authentication and custom authentication.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row relative z-20 sm:items-center justify-start sm:justify-center px-5 mt-5">
          <div>
            <p className="relative z-20 text-brown-7 font-semibold text-xs sm:text-sm">
              TECH STACK USED
            </p>
            <div
              ref={project2Ref}
              className="relative z-20 mt-3 sm:mt-7 flex flex-row flex-wrap justify-center sm:justify-center gap-4 sm:gap-5 w-full overflow-y-hidden"
            >
              {project2Images.map((imgObj, i) => (
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
              ))}
            </div>
            <div className="flex flex-col gap-2 mt-12 bg-white rounded-lg drop-shadow-xl">
              <div className="bg-none rounded-full drop-shadow-lg px-3 py-2 flex flex-row items-center gap-2">
                <img src="/encryption.png" className="w-4 sm:w-6" alt="" />
                <p className="font-semibold text-brown-6 text-xs">
                  DATA ENCRYPTION
                </p>
              </div>
              <div className="bg-none rounded-full drop-shadow-lg px-3 py-2 flex flex-row items-center gap-2">
                <img src="/connection.png" className="w-4 sm:w-6" alt="" />
                <p className="font-semibold text-brown-6 text-xs">
                  WORKING CONNECTION
                </p>
              </div>
              <div className="bg-none rounded-full drop-shadow-lg px-3 py-2 flex flex-row items-center gap-2">
                <img src="/authentication.png" className="w-4 sm:w-6" alt="" />
                <p className="font-semibold text-brown-6 text-xs">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="28"
              height="28"
              viewBox="0,0,256,256"
            >
              <g
                fill="#717171"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(8.53333,8.53333)">
                  <path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path>
                </g>
              </g>
            </svg>
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
