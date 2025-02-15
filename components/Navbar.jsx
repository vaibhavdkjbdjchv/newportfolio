import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import images from "../src/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [active2, setActive2] = useState(true);
  const navigate = useNavigate();

  function navbarVisibale() {
    setActive2(!active2);
  }

  return (
    <div className=" w-[100vw]  px-2 h-[10vh] flex justify-between items-center ">
      <nav className="w-[10%]  text-white flex flex-col justify-start items-center ">
        <div className=" z-999 text-7xl px-5" onClick={navbarVisibale}>
          {active2 ? (
            <FontAwesomeIcon icon={faBars} className="w-7" />
          ) : (
            <FontAwesomeIcon icon={faXmark} className="w-7 text-red-600" />
          )}
        </div>
        <div className=" absolute bg top-0 z-99 left-0 flex justify-start items-start">
          <motion.ul
            animate={active2 ? { x: "-100%" } : { x: 0 }}
            transition={{ duration: 0.1 }}
            className={`lg:w-[20vw] w-[50vw] fixed py-15 lg:py-10 h-[100vh] text-sm lg:text-lg flex flex-col justify-evenly rounded-r-3xl items-start lg:px-5 px-2 text-center duration-700 ease-in  bg-[#3b3b3bce] fontChange`}
          >
            <li
              to="/"
              onClick={() => {
                navigate("/");
                setActive("home");
              }}
              className={`w-[100%] cursor-pointer border-b-1 py-10 px-10 font-sans rounded-2xl 
                 duration-500 ease-in ${
                   active === "home"
                     ? "bg-white text-black font-bold hover:text-black hover:bg-white "
                     : "bg-transparent hover:text-black hover:bg-white  "
                 }`}
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/about");
                setActive("about");
              }}
              className={`w-[100%] cursor-pointer border-b-1 py-10 px-10 font-sans rounded-2xl 
                duration-500 ease-in ${
                  active === "about"
                    ? "bg-white text-black font-bold hover:text-black hover:bg-white "
                    : "bg-transparent hover:text-black hover:bg-white font-semibold "
                }`}
            >
              About
            </li>
            <li
              onClick={() => {
                navigate("/projects");
                setActive("projects");
              }}
              className={`w-[100%] border-b-1 py-10 px-10 cursor-pointer   font-sans rounded-2xl 
              duration-500 ease-in ${
                active === "projects"
                  ? "bg-white text-black font-bold hover:text-black hover:bg-white "
                  : "bg-transparent hover:text-black hover:bg-white font-semibold "
              }`}
            >
              Projects
            </li>
            <li
              onClick={() => {
                navigate("/certificates");
                setActive("certificates");
              }}
              className={`w-[100%] border-b-1 cursor-pointer py-10 px-10  font-sans rounded-2xl 
                duration-500 ease-in ${
                  active === "certificates"
                    ? "bg-white text-black font-bold hover:text-black hover:bg-white "
                    : "bg-transparent hover:text-black hover:bg-white  font-semibold"
                }`}
            >
              certificates
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                setActive("contact");
              }}
              className={`w-[100%] cursor-pointer border-b-1 py-10 px-10  font-sans rounded-2xl 
              duration-500 ease-in ${
                active === "contact"
                  ? "bg-white text-black font-bold hover:text-black hover:bg-white "
                  : "bg-transparent hover:text-black hover:bg-white font-semibold "
              }`}
            >
              Contact
            </li>
          </motion.ul>
        </div>
      </nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fontChange w-[80%] text-center font-bold text-2xl"
      >
        Vaibhav Panchal
      </motion.div>
      <div className="w-[10%]">
        <img src={images.profile} alt="" className="w-15 animate-pulse" />
      </div>
    </div>
  );
}
