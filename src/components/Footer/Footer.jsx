import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



const Footer=()=>{


    return (
        <>
        <div  className="flex flex-wrap justify-center bg-[#2D2E32]   text-white  border-2 shrink-0 rounded ml-3 bottom-0 ">
            <div className="flex flex-wrap mt-5 w-[80%] flex-col justify-center   ">
            <div className="flex flex-wrap  justify-center mt-5 ">
                <ul className="flex flex-wrp w-auto justify-row items-center  p-3 gap-x-10 text-[28px] mt-3">
                    <li className="cursor-pointer transition-transform ease-in-out duration-300 hover:scale-125 hover:text-blue-300"><a href="https://www.linkedin.com/in/arkajyoti-kundu-784264242/" target="_blank"><FaLinkedin /></a></li>
                    <li className="cursor-pointer transition-transform ease-in-out duration-300 hover:scale-125 hover:text-blue-300"><a href="https://github.com/Arkajyoti333" target="_blank"><FaGithub /></a></li>
                    <li className="cursor-pointer transition-transform ease-in-out duration-300 hover:scale-125 hover:text-blue-300"><a href="https://www.facebook.com/arkajyoti.kundu.9/" target="_blank"><FaFacebook /></a> </li>
                    <li className="cursor-pointer transition-transform ease-in-out duration-300 hover:scale-125 hover:text-blue-300"><a href="https://www.instagram.com/arkajyoti_jr/" target="_blank"><FaInstagram /></a></li>
                </ul>
            </div>
            <div className="flex flex-wrap flex-row justify-evenly min-w-screen m-3 p-1 border-t-2 border-white min-w-[75%]">
          <p className=" font-semibold text-center">
            Copyright © 2024 All rights reserved | This Awesome site is made by Arkajyoti Kundu 
          </p>
        </div>
            </div>      
        </div>
        </>
    );
}


export default Footer;