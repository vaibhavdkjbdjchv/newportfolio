import React, { useState } from "react";
// import images from "../images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import { easeIn, easeInOut } from "motion";

function ProjectsCards({
  image,
  title,

  description,
  livelink,
  live,
  detailsLink,
}) {
  const [divactive, setdivactive] = useState(false);

  function divactivediv() {
    setdivactive(!divactive);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: easeInOut }}
      className={`w-[95%] py-5 duration-500 ease-in rounded-l-2xl lg:flex-row flex-col  justify-center gap-5 p-2 flex  bg-gradient-to-br rounded-2xl from-[#333333ad] via-[#141414ad] to-[#18181832] text-white`}
    >
      <img
        src={image}
        alt=""
        className={` rounded-l-lg  duration-300 ease-in ${
          divactive ? "lg:w-[40%] lg:h-[20%]" : "lg:w-[25%] lg:h-[20%]"
        }`}
      />
      <div className=" py-1 flex flex-col  px-2   items-start">
        <div className="w-[100%] bg flex lg:justify-start justify-between gap-5">
          <h1 className="text-lg  fontUse font-bold">{title}</h1>
          <div className="flex cursor-pointer relative">
            <div className=" ">
              <div className="flex cursor-pointer relative">
                <a
                  href={livelink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`border-2 px-6 flex duration-300 ease-in  text-white rounded-3xl ${
                    live === "live" || live === "Live"
                      ? "  border-green-500 hover:bg-green-500 "
                      : " border-white hover:bg-white hover:text-black font-bold"
                  }`}
                >
                  {live}
                </a>
                <span class="absolute right-0 flex size-3">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75${
                      live === "live" || live === "Live"
                        ? " bg-white"
                        : " bg-white"
                    }`}
                  ></span>
                  <span
                    className={`relative inline-flex size-3 rounded-full ${
                      live == "live" || live === "Live"
                        ? "bg-green-500 "
                        : "bg-white "
                    }`}
                  ></span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className={`w-[90%]  text-sm lg:text-lg font-semibold duration-500 ease-in fontUse pt-5 ${
              divactive ? "text-white" : "text-[#ffffff96]"
            }`}
          >
            {description}
          </div>
          <motion.div
            animate={!divactive ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.1, ease: easeInOut }}
            className="w-[100%]  duration-500 ease-in flex justify-end px-5 py-2 lg:py-5"
          >
            <button
              className={`'text-lg font-bold fontUse' ${
                divactive ? " hidden" : "visible"
              }`}
              onClick={divactivediv}
            >
              More details...
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={divactive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1, ease: easeInOut }}
            className={`py-1 flex flex-col px-2 duration-500 ease-in  justify-between items-start text-white 
            ${!divactive ? " hidden" : "visible"}`}
          >
            {detailsLink}
            <motion.div
              animate={divactive ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.2, ease: easeInOut }}
              className="w-[100%]  duration-500 ease-in flex justify-end px-5 py-2 lg:py-5"
            >
              <button
                className={`' text-red-700 text-lg font-bold fontUse' ${
                  divactive ? " visible" : "hidden"
                }`}
                onClick={divactivediv}
              >
                Show Less...
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectsCards;
