import React from "react";
import Tilty from "react-tilty";

const Skills = () => {
  return (
    <section className="bg-white min-h-300 relative w-full">
      <img
        src="/waves-bottom.svg"
        className="absolute z-10 top-0 left-0 w-full"
        alt=""
      />
      <div className="relative z-20 flex flex-col md:flex-row gap-10 items-center justify-center w-3/4 lg:w-1/2 mx-auto min-h-200 bg-none pt-24">
        <div className="w-2/5 flex flex-row justify-center items-center">
          <img src="/working.svg" className="w-3/4" alt="" />
        </div>
        <div className="w-full md:w-3/5">
          <Tilty speed={1500} scale={1.1} reverse>
            <div className="flex flex-col duration-100 rounded-md bg-caramel-4 w-full drop-shadow-md p-5 border-l-8 border-l-gray-1 gap-5">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <div className="bg-caramel-6 rounded-full flex flex-row items-center justify-center p-3 gap-3">
                  <img src="/frontend.png" className="w-14 md:w-28" alt="" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-brown-8 text-sm font-bold">
                    Front End Development
                  </p>
                  <p className="text-brown-9 text-xs font-semibold mt-3">
                    Create front end application including the responsiveness,
                    user interactivity and user experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-3 justify-center md:justify-start">
                <div className="rounded-full border-2 border-brown-6 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/html.png" className="w-4" alt="" />
                  <p className="text-xs text-brown-4 font-semibold">HTML</p>
                </div>
                <div className="rounded-full border-2 border-brown-6 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/css.png" className="w-4" alt="" />
                  <p className="text-xs text-brown-4 font-semibold">CSS</p>
                </div>
                <div className="rounded-full border-2 border-brown-6 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/sass.png" className="w-4" alt="" />
                  <p className="text-xs text-brown-4 font-semibold">SASS</p>
                </div>
                <div className="rounded-full border-2 border-brown-6 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/tailwind.png" className="w-4" alt="" />
                  <p className="text-xs text-brown-4 font-semibold">TAILWIND</p>
                </div>
                <div className="rounded-full border-2 border-brown-6 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/mui.png" className="w-4" alt="" />
                  <p className="text-xs text-brown-4 font-semibold">
                    MATERIAL UI
                  </p>
                </div>
                <div className="rounded-full border-2 border-brown-6 py-1 px-2 flex flex-row items-center justify-center gap-1">
                  <img src="/bootstrap.png" className="w-5" alt="" />
                  <p className="text-xs text-brown-4 font-semibold">
                    BOOTSTRAP
                  </p>
                </div>
                <div className="rounded-full border-2 border-brown-6 py-1 px-2 flex flex-row items-center justify-center gap-1">
                  <img src="/js.png" className="w-5" alt="" />
                  <p className="text-xs text-brown-4 font-semibold">
                    JAVASCRIPT
                  </p>
                </div>
              </div>
            </div>
          </Tilty>
          <Tilty speed={1500} scale={1.1} reverse>
            <div className="flex flex-col duration-100 rounded-md bg-brown-6 w-full drop-shadow-lg p-5 border-l-8 border-l-caramel gap-5 mt-5">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <div className="bg-caramel-7 rounded-full flex flex-row items-center justify-center p-3 gap-3">
                  <img src="/backend.png" className="w-14 md:w-28" alt="" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-caramel-6 text-sm font-bold">
                    Back End Development
                  </p>
                  <p className="text-caramel-7 text-xs font-semibold mt-3">
                    Create and work with the modern back end language and tools
                    with the power of security dynamic and reusable plugins.
                  </p>
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-3 justify-center md:justify-start">
                <div className="rounded-full border-2 border-caramel-3 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/php.png" className="w-5" alt="" />
                  <p className="text-xs text-caramel-3 font-semibold">PHP</p>
                </div>
                <div className="rounded-full border-2 border-caramel-3 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/nodejs.png" className="w-5" alt="" />
                  <p className="text-xs text-caramel-3 font-semibold">NODEJS</p>
                </div>
                <div className="rounded-full border-2 border-caramel-3 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/sql.png" className="w-5" alt="" />
                  <p className="text-xs text-caramel-3 font-semibold">SQL</p>
                </div>
                <div className="rounded-full border-2 border-caramel-3 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/docker.png" className="w-5" alt="" />
                  <p className="text-xs text-caramel-3 font-semibold">DOCKER</p>
                </div>
                <div className="rounded-full border-2 border-caramel-3 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/firebase.png" className="w-5" alt="" />
                  <p className="text-xs text-caramel-3 font-semibold">
                    FIREBASE
                  </p>
                </div>
                <div className="rounded-full border-2 border-caramel-3 py-1 px-2 flex flex-row items-center justify-center gap-2">
                  <img src="/aws.png" className="w-5" alt="" />
                  <p className="text-xs text-caramel-3 font-semibold">AWS</p>
                </div>
              </div>
            </div>
          </Tilty>
        </div>
      </div>
    </section>
  );
};

export default Skills;
