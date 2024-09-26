import { useState } from "react";
import { Link } from "react-scroll";
import { MdOutlineMailLock } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import "./Home.css";
// import { RiLinkedinBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import Profile from "../../assets/Arka.jpg";
import Hello from "../../assets/hii_img.png";


const Home = () => {


  return (
    <>
      <div
        id="/home"
        className=" mt-[5.5rem] borde flex flex-wrap justify-center items-center min-h-auto bg-gray-100"
      >
        <div className=" flex flex-wrap justify-center  md:h-screen w-full md:w-[80%]">
          <div className=" flex flex-wrap justify-between h-full w-full m-1 ">
            {/* Intro Text section  */}

            <div className="w-full md:w-[65%] flex flex-wrap mx-1 px-3">
              <div className="flex flex-col ml-5  pl-3  w-full md:max-w-[50rem] mt-10 md:mt-[6rem] overflow-hidden relative">
                <div className="flex items-center">
                  <h1 className=" text-[2rem] md:text-[3.5rem] font-bold text-gray-800 mx-1 md:mx-3 md:max-h-[11rem]  m-0">
                    Full-Stack Javascript Developer
                  </h1>
                  <img
                    src={Hello}
                    alt="hand Icon ."
                    className=" absolute  md:h-[4rem] w-[3rem] md:w-[4rem] ml-3 left-[10rem] md:left-[18rem] top-[3rem] md:top-[6.3rem]"
                  />
                </div>
                <p className="m-0 p-2 md:text-xl text-slate-700 w-full md:max-w-[30rem] ">
                  Hi, I'm <span className="font-bold">Arkajyoti Kundu</span> . A
                  passionate  Full-Stack Javascrip Developer based in Kolkata , India.
                  📍
                </p>
                             
                                   {/* contact icon list   */}

                <div className=" flex flex-wrap p-3 gap-y-3 gap-x-7 my-5">
                  <a
                    href="https://www.linkedin.com/in/arkajyoti-kundu-784264242/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CiLinkedin className="text-[35px] text-gray-900  hover:text-sky-700 cursor-pointer" />
                  </a>

                  {/* <RiLinkedinBoxLine  className="text-[35px] text-gray-900 " /> */}
                  <a href="/contact" target="_blank" rel="noopener noreferrer">
                    <FiGithub className="text-[30px] text-gray-900  hover:text-sky-700 cursor-pointer" />
                  </a>
                  <a
                    href="arkajyotikundu415@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdOutlineMailLock className="text-[30px] text-gray-900  hover:text-sky-700 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>

            {/* profile picture section for   */}

            <div className=" hidden   md:flex  flex-wrap   w-[34%]    max-h-auto ">
              <img
                src={Profile}
                alt="dp"
                className="profile-image mt-[5rem] relative z-1 "
              />
            </div>
          </div>
        </div>
                              
                              {/* this is Tech stack section  */}

        <div className="md:absolute  md:-bottom-3   flex flex-wrap   w-full p-1 ">
          <div className="flex flex-wrap  md:w-[80%] justify-center md:justify-normal items-center p-1 md:ml-[11rem]  ">
            <span className="flex  justify-center  hover:text-red-600 cursor-pointer">
              <p className="text-lg md:text-xl font-bold  transition-transform duration-300 ease-in-out hover:-translate-y-2.5 ">
                Tech stack <span className="mx-2 md:mx-3 font-mono text-xl md:text-3xl">|</span>
              </p>
            </span>
            <div className="flex flex-wrap flex-row justify-center p-1 mx-auto my-3 md:my-1 md:mx-3 px-3 w-full md:w-[80%]  ">
              <ul className="flex flex-wrap flex-row justify-center px-1 gap-4 md:gap-x-4 mx-auto md:mx-3 my-1">
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=c,cpp" />
                  </Link>
                </li>
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=js,nodejs" />
                  </Link>
                </li>
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=react,express" />
                  </Link>
                </li>
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=mysql,mongodb" />
                  </Link>
                </li>
                <li className="mx-1 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-2.5">
                  <Link>
                    <img src="https://skillicons.dev/icons?i=html,css,tailwind" />
                  </Link>
                </li>  
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Home;
