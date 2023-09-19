import React from "react";
import { motion } from "framer-motion";

const Header = ({
  projectRefs,
  workHistoryRef,
  skillsRef,
  contactRef,
}: any) => {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0.3 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-full mt-14 lg:mt-18 flex flex-row items-center justify-center gap-5 sm:gap-8 fixed z-50"
    >
      <button
        onClick={() =>
          contactRef.current?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-caramel px-2 py-1 sm:px-4 sm:py-2 drop-shadow-md rounded-3xl flex flex-row items-center justify-center gap-1 duration-200 transform active:scale-75 transition-transform"
      >
        <img className="w-6 sm:w-10" src="/memoji2.png" alt="" />
        <small className="text-gray-500 text-2xs sm:text-xm font-bold">
          ME
        </small>
      </button>
      <div className="flex flex-row gap-7 sm:gap-10 py-2 px-4 sm:py-3 sm:px-5 items-center justify-center bg-white drop-shadow-lg rounded-full">
        <a
          onClick={() =>
            projectRefs.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer font-bold text-brown-1 text-2xs sm:text-sm"
        >
          PROJECTS
        </a>
        <a
          onClick={() =>
            workHistoryRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer font-bold text-brown-1 text-2xs sm:text-sm"
        >
          WORK HISTORY
        </a>
        <a
          onClick={() =>
            skillsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
          className="cursor-pointer font-bold text-brown-1 text-2xs sm:text-sm"
        >
          SKILLS
        </a>
      </div>
    </motion.div>
  );
};

export default Header;
