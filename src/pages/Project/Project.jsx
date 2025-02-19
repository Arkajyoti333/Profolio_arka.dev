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
        className=" text-3xl font-semibold my-3 py-5  gap-3  min-h-screen min-w-full"
      >
        <div className=" bg_imageProject rounded-sm shadow-2xl shadow-orange-400  flex justify-center items-center mt-3 mb-16 text-3xl py-24  font-semibold  bg-transparent text-white"  >
          <h1 className="text-4xl font-semibold text-[#FFFFFF] rounded-md shadow-md backdrop-blur-sm">Projects</h1>
        </div>
        <div className="flex flex-wrap sm:flex-row fex-col my-3 justify-center items-center gap-4  py-3">
      
      {projectData.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))} 
        </div>
      </div>
    </>
  );
};

export default Project;
