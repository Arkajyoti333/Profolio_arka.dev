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

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div
        id="/home"
        className=" mt-[5.5rem] borde flex flex-wrap justify-center items-center min-h-auto bg-gray-100"
      >
        <div className=" flex flex-wrap justify-center  h-screen w-[80%]">
          <div className=" flex flex-wrap justify-between h-full w-full m-1 ">
            {/* Intro Text section  */}

            <div className="w-[65%] flex flex-wrap mx-1 px-3">
              <div className="flex flex-col ml-5  pl-3  max-w-[50rem] mt-[6rem] overflow-hidden relative">
                <div className="flex items-center">
                  <h1 className="text-[3.5rem] font-bold text-gray-800 mx-3 max-h-[11rem]  m-0">
                    Full-Stack Javascript Developer
                  </h1>
                  <img
                    src={Hello}
                    alt="hand Icon ."
                    className=" absolute h-[4rem] w-[4rem] ml-3 left-[18rem] top-[6.3rem]"
                  />
                </div>
                <p className="m-0 p-2 text-xl text-slate-700 max-w-[30rem] ">
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

            {/* profile picture section  */}

            <div className="flex  flex-wrap   w-[34%]    max-h-auto ">
              <img
                src={Profile}
                alt="dp"
                className="profile-image mt-[5rem] relative z-1 "
              />
            </div>
          </div>
        </div>
                              
                              {/* this is Tech stack section  */}

        <div className="absolute  -bottom-3   flex flex-wrap   w-full p-1 ">
          <div className="flex flex-wrap  w-[80%] items-center p-1 ml-[11rem]">
            <span className="flex  justify-center  hover:text-red-600 cursor-pointer">
              <p className="text-xl font-bold  transition-transform duration-300 ease-in-out hover:-translate-y-2.5 ">
                Tech stack <span className="mx-3 font-mono text-3xl">|</span>
              </p>
            </span>
            <div className="flex flex-wrap flex-row  p-1  mx-3 px-3 w-[80%] ">
              <ul className="flex flex-wrap flex-row px-1 gap-x-4 mx-3 my-1">
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
