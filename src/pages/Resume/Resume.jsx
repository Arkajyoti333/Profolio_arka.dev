import React from "react";
import "./Resume.css";
// import { motion } from "framer-motion";
// import bgImage from "../../assets/Genarate/bgImage.webp"

const Resume = () => {
  return (
    <>
      <div
        id="/resume"
        className="bg_image mt-[5.3rem] text-3xl flex flex-wrap justify-center items-center  h-[350px] text-red-700 font-semibold m-3 border-4 border-green-500 "
      >
        <div className=" text-slate-900 bg-transparent bg-opacity-10  backdrop-blur-md shadow-md  min-h-full w-full">
 
    I am Arkajyoti Kundu
        </div>
       
      </div>
    </>
  );
};

export default Resume;


{/* 
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="bg-blue-100 p-4 rounded-md cursor-pointer"
        > */}
    
        {/* </motion.div> */}