import { Button, Link } from "react-scroll";
import { IoMenuOutline } from "react-icons/io5";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = (e) => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div className="flex flex-wrap   mx-3 p-1 w-auto h-auto border-b-2 rounded-md border-gray-300  text-gray-700 shadow-md  z-10 fixed top-0 left-0 right-0 bg-white md:bg-transparent bg-opacity-70  backdrop-blur-md">
        <nav className=" flex flex-wrap justify-between flex-row w-full   mx-5 my-1 p-1 text-lg  ">
          {/* logo  */}
          <Link
            to="/home"
            className=" h-auto p-1 m-3 font-extrabold text-slate-900 text-xl cursor-pointer hover:text-orange-600"
          >
            arkajyoti.dev
          </Link>
          {/* Desktop Menu Bar */}
          <ul className="hidden lg:flex flex-wrap justify-center items-center mx-10 gap-x-4  font-bold p-1">
            <li className="cursor-pointer  hover:text-green-600">
              <Link
                to="/home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer mx-1 hover:text-blue-600">
              <Link
                to="/about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer mx-1 hover:text-cyan-500">
              <Link
                to="/resume"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Resume
              </Link>
            </li>
            <li className="cursor-pointer mx-1 hover:text-yellow-500">
              <Link
                to="/project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Project
              </Link>
            </li>
            <li className="cursor-pointer mx-1 hover:text-teal-600">
              <Link
                to="/contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* mobile menu bar */}

          <div className="flex flex-wrap items-center justify-center p-1 lg:hidden ">
          
              <IoMenuOutline
               className="text-3xl  transition-transform duration-300 ease-in-out hover:translate-x-2.5 "
               onClick={handleToggle}
               />
            
          </div>
        </nav>


        {/* mobile menu bar */}
        <div
           className={`${isOpen?"block":"hidden"}
           lg:hidden w-full flex items-center justify-center py-4 shadow-lg bg-transparent  z-50
           `
        
          }
        >
          <ul className=" flex flex-wrap flex-col justify-center items-center  gap-4 font-bold py-1">
            <li className="cursor-pointer  hover:text-green-600">
              <Link
                to="/home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onClick={handleToggle}
              >
                Home
              </Link>
            </li>
            <li className="cursor-pointer mx-1 hover:text-blue-600">
              <Link
                to="/about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onClick={handleToggle}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer mx-1 hover:text-cyan-500">
              <Link
                to="/resume"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onClick={handleToggle}
              >
                Resume
              </Link>
            </li>
            <li className="cursor-pointer mx-1 hover:text-yellow-500">
              <Link
                to="/project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onClick={handleToggle}
              >
                Project
              </Link>
            </li>
            <li className="cursor-pointer mx-1 hover:text-teal-600">
              <Link
                to="/contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active"
                onClick={handleToggle}
              >
                Contact
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default NavBar;
