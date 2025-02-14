import React from "react";
import "./Resume.css";
import { FaRegFileCode } from "react-icons/fa";
// import { motion } from "framer-motion";
// import bgImage from "../../assets/Genarate/bgImage.webp"

const Resume = () => {
  return (
    <>
      <div
        id="/resume"
        className="bg_image mt-[5.3rem]  flex flex-wrap justify-center items-center  h-[350px] "
      >
        <div className="flex flex-col gap-10 justify-center items-center text-white bg-transparent   shadow-md  min-h-full w-full">
          <h1 className="text-4xl mb-5">Resume</h1>
          <a href="https://drive.google.com/file/d/1d99KidRh0rQqKItn4SSgsUDkxQyZRpFK/view?usp=sharing" target="_blanck" ><FaRegFileCode className="text-6xl  text-[#FB923D]"  /></a>
        </div>
      </div>
    </>
  );
};

export default Resume;

{
  /* 
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="bg-blue-100 p-4 rounded-md cursor-pointer"
        > */
}

{
  /* </motion.div> */
}
