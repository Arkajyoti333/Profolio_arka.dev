import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="flex flex-wrap   my-1 mx-1 p-1  h-auto border-b-2 rounded-md border-gray-300  text-gray-700 shadow-md">
        <nav className=" flex flex-wrap justify-between flex-row w-full   mx-5 my-1 p-1 text-lg  ">
          <Link
            to="/"
            className=" h-auto p-1 m-3 font-extrabold text-slate-900 text-xl cursor-pointer hover:text-orange-600"
          >
            arkajyoti.dev
          </Link>
          <ul className=" flex flex-wrap justify-center items-center mx-10 gap-x-4  font-bold p-1">
            <li className="cursor-pointer  hover:text-green-600">
              <NavLink
                to="/home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-600" : "text-gray-800"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-blue-600">
              <NavLink
                to="/about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-600" : "text-gray-800"}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-cyan-500">
              <NavLink
                to="/skill"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-600" : "text-gray-800"}`
                }
              >
                Skill
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-yellow-500">
              <NavLink
                to="/project"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-600" : "text-gray-800"}`
                }
              >
                Project
              </NavLink>
            </li>
            <li className="cursor-pointer mx-1 hover:text-teal-600">
              <NavLink
                to="/contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-600" : "text-gray-800"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
