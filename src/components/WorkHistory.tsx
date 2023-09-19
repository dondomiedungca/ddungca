import React, { forwardRef } from "react";

const WorkHistory = (props: any, ref: any) => {
  const isbxDate = "August 2022 - Present";
  const istorDate = "March 2019 - Aug. 2022";
  return (
    <section ref={ref} className="bg-white min-h-300 relative w-full">
      <div className="w-3/4 lg:w-1/2 mx-auto min-h-200 bg-none pt-40">
        <p className="text-brown-4 font-semibold text-sm">
          Here are the awesome companies that I&apos;ve been working with over
          the years. Dealing with the challenges led me to improve myself and
          become more creative and productive during my working hours.
          <br />
          <br />
          The usage of their latest technology also helps me to grow my skill
          set. Continuing the learn of new tech trends boosts me to develop and
          contribute some of them to my current job.
        </p>
        <div className="flex flex-row w-full gap-5 bg-caramel-8 p-3 lg-1:p-10 mt-16 drop-shadow-sm rounded-lg">
          <p className="hidden text-brown-6 font-normal text-sm lg-1:flex flex-row items-start w-2/6 mt-1">
            {isbxDate}
          </p>
          <div className="w-full lg-1:w-2/3">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col lg-1:flex-row items-start lg-1:items-center lg-1:gap-4">
                <p className="block lg-1:hidden text-brown-6 font-normal text-xs">
                  {isbxDate}
                </p>
                <div className="flex flex-row gap-1 lg-1:gap-4 items-center">
                  <p className="text-brown-6 font-semibold text-xs lg-1:text-lg">
                    FULL STACK DEVELOPER
                  </p>
                  <p>
                    <img src="/dot.png" className="w-2" alt="" />
                  </p>
                  <p className="text-brown-6 font-semibold text-sm lg-1:text-lg">
                    ISBX
                  </p>
                </div>
              </div>
              <a
                href="https://www.isbx.com/"
                target="_blank"
                className="bg-white drop-shadow-md rounded-lg p-2 -mt-1 duration-200 transform active:scale-75 transition-transform"
              >
                <img src="/company-link.png" className="w-4" alt="" />
              </a>
            </div>
            <p className="text-brown-2 text-xs lg-1:text-sm font-semibold mt-5">
              Developing and maintaining applications focused on both web and
              mobile is my position here. Communication with the Project
              Managers, collaboration with the team and QA is one of the keys to
              delivering high and scalable feature of the product.
              <br />
              <br />
              As a developer, I push myself to conduct manual tests and
              automation tests to ensure bug-free applications.
            </p>
            <div className="flex flex-row flex-wrap gap-3 mt-4">
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">React</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">NextJS</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">Postgres</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">Docker</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">
                  React Native
                </p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">AWS</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">GIT</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">JIRA</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">LINUX</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">MACOS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full gap-5 bg-caramel-8 p-2 lg-1:p-10 mt-10 drop-shadow-sm rounded-lg">
          <p className="hidden text-brown-6 font-normal text-sm lg-1:flex flex-row items-start w-2/6 mt-1">
            {istorDate}
          </p>
          <div className="w-full lg-1:w-2/3">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-col lg-1:flex-row items-start lg-1:items-center lg-1:gap-4">
                <p className="block lg-1:hidden text-brown-6 font-normal text-xs">
                  {istorDate}
                </p>
                <div className="flex flex-row gap-1 lg-1:gap-4 items-center">
                  <p className="text-brown-6 font-bold sm:font-semibold text-2xs sm:text-lg-2 lg-3:text-lg-1 lg-2:text-lg">
                    WEB DEVELOPER
                  </p>
                  <p>
                    <img src="/dot.png" className="w-2" alt="" />
                  </p>
                  <p className="text-brown-6 font-bold sm:font-semibold text-2xs sm:text-lg-2 lg-3:text-lg-1 lg-2:text-lg">
                    ISTOR DATA SOLUTIONS
                  </p>
                </div>
              </div>
              <a
                href="#"
                className="bg-white drop-shadow-md rounded-lg p-2 -mt-1 duration-200 transform active:scale-75 transition-transform"
              >
                <img src="/company-link.png" className="w-4" alt="" />
              </a>
            </div>
            <p className="text-brown-2 text-xs lg-1:text-sm font-semibold mt-5">
              Delivering feature requests from clients, and maintaining the
              server racks from different countries. As a developer, I
              prioritize the scalability of the application and also collaborate
              with the manager and QA.
              <br />
              <br />
              In this job, I also managed multiple projects, conducted manual
              test and analyze some of the huge data from the cloud.
            </p>
            <div className="flex flex-row flex-wrap gap-3 mt-4">
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">Laravel</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">VueJS</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">React</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">MYSQL</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">
                  React Native
                </p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">AWS</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">GIT</p>
              </div>
              <div className="bg-caramel-5 px-4 py-1 rounded-full border-1 border-brown-6">
                <p className="text-xs font-semibold text-brown-4">LINUX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(WorkHistory);
