import { useState } from "react";
import ProjectCard from "../../components/Card/ProjectCard";
import projectData from "../Project/Project.js";
import './Project.css'
import Button from "../../components/Button/button.jsx";
// text-[#B6834A]

const Project = () => { 
  const length=projectData.length;
  const [extendent, seteEtendent] = useState(true);
  const [count, setcount] = useState((length/2));

  // console.log(count);
  
  const handleShowMore=()=>{
  
    seteEtendent(prev=>!prev)
    setcount(prev=>prev+length)
  }
  const handleShowLess=()=>{
    seteEtendent(prev=>!prev)
    setcount((length/2))
  }


  return (
    <>
      <div
        id="/project"
        className=" text-3xl font-semibold my-3 py-5  gap-3  min-h-screen min-w-full"
      >
        <div className=" bg_imageProject rounded-sm shadow-2xl shadow-orange-400  flex justify-center items-center mt-3 mb-16 text-3xl py-24  font-semibold  bg-transparent text-white"  >
          <h1 className="text-4xl font-semibold text-[#FFFFFF] rounded-md shadow-md backdrop-blur-sm">Projects</h1>
        </div>
        <div className="flex flex-wrap sm:flex-row fex-col my-3 justify-center items-center gap-4  py-3 ">
      
      {projectData.map((project) => (
     
          project.id<=count && <ProjectCard key={project.id} project={project} />
        
      ))} 
        </div>
        <div className="flex flex-wrap  justify-center m-3" ><Button handleShowLess={handleShowLess} handleShowMore={handleShowMore} extendent={extendent} /> </div>
      </div>
    </>
  );
};

export default Project;
