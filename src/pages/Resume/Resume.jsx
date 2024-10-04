// React
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <>
      <div
        id="/resume"
        className="text-3xl text-red-700 font-semibold m-3 border-4 border-green-500 flex flex-wrap justify-center items-center min-h-screen"
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="bg-blue-500 p-4 rounded-md cursor-pointer"
        >
          Drag or Hover Me!
        </motion.div>
      </div>
    </>
  );
};

export default Resume;
