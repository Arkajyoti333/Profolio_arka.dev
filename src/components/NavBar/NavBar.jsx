import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-wrap  mx-3 p-1 w-auto h-auto border-b-2 rounded-md border-gray-300  text-gray-700 shadow-md  z-10 fixed top-0 left-0 right-0 bg-white">
        <nav className=" flex flex-wrap justify-between flex-row w-full   mx-5 my-1 p-1 text-lg  ">
          <Link
            to="/home"
            className=" h-auto p-1 m-3 font-extrabold text-slate-900 text-xl cursor-pointer hover:text-orange-600"
          >
            arkajyoti.dev
          </Link>
          
          <ul className=" flex flex-wrap justify-center items-center mx-10 gap-x-4  font-bold p-1">
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
                to="/skill"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="active" 
              >
                Skill
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
        </nav>
      </div>
    </>
  );
};

export default NavBar;
