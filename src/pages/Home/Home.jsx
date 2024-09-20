import bg from "../../assets/pall_pic.jpeg";
import Hello from "../../assets/hii_img.png";
import { CiLinkedin } from "react-icons/ci";
// import { RiLinkedinBoxLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMailLock } from "react-icons/md";

import "./Home.css";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <>
      <div
        id="/home"
        className=" mt-[5.5rem] border border-red-700 flex flex-wrap justify-center items-center min-h-auto bg-gray-100"
      >
        <div className=" flex flex-wrap justify-center  h-screen w-[80%]">
          <div className=" flex flex-wrap justify-between h-full w-full m-1 ">
            {/* Intro Text section  */}

            <div className="w-[65%] border-4 border-black flex flex-wrap mx-1 px-3">
              <div className="flex flex-col ml-5 border-2 pl-3 border-red-500 max-w-[50rem] mt-[6rem] overflow-hidden relative">
                <div className="flex items-center">
                  <h1 className="text-[3.5rem] font-bold text-gray-800 mx-3 max-h-[11rem]  m-0">
                    Front-End React Developer
                  </h1>
                  <img
                    src={Hello}
                    alt="hand"
                    className=" absolute h-[4rem] w-[4rem] ml-3 left-[18rem] top-[6.3rem]"
                  />
                </div>
                <p className="m-0 p-2 text-xl text-slate-700 max-w-[30rem] ">
                  Hi, I'm <span className="font-bold">Arkajyoti Kundu</span> . A
                  passionate Front-end React Developer based in Kolkata , India.
                  📍
                </p>
                <div className="border-2 border-red-500 flex flex-wrap p-3 gap-3 m-3">
                  <a
                    href="https://www.linkedin.com/in/arkajyoti-kundu-784264242/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiLinkedin className="text-[35px] text-gray-900 stroke-1 hover:text-sky-700 cursor-pointer" />
                  </a>

                  {/* <RiLinkedinBoxLine  className="text-[35px] text-gray-900 " /> */}
                  <a href="/contact" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="text-[35px] text-gray-900 stroke hover:text-sky-700 cursor-pointer" />
                  </a>
                  <a
                    href="arkajyotikundu415@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineMailLock className="text-[35px] text-gray-900 stroke hover:text-sky-700 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>

            {/* profile picture section  */}

            <div className="flex  flex-wrap   w-[34%]    max-h-auto ">
              <img
                src={bg}
                alt="dp"
                className="profile-image mt-[5rem] relative z-1 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
