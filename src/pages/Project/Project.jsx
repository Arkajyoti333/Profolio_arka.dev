import { useState } from "react";
import ProjectCard from "../../components/Card/ProjectCard";
import projectData from "../Project/Project.js";
import './Project.css'
// text-[#B6834A]

const Project = () => { 
  const [open, setopen] = useState(false);

  const handleShowMore=()=>{
    setopen(!open)
  }
  return (
    <>
      <div
        id="/project"
        className=" text-3xl font-semibold my-3  gap-1  min-h-screen min-w-full"
      >
        <div className=" bg_imageProject flex justify-center items-center my-3 text-3xl py-12 shadow-lg font-semibold  bg-transparent text-white"  >
          <h1 className="text-4xl font-semibold text-[#FFFFFF] rounded-md shadow-md backdrop-blur-sm">Projects</h1>
        </div>
        <div className="flex flex-wrap sm:flex-row fex-col my-3  justify-center items-center gap-4">
      
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))} 
        </div>
      </div>
    </>
  );
};

export default Project;
