import { useState } from "react";
import ProjectCard from "../../components/Card/ProjectCard";
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
        <div className=" bg_imageProject flex justify-center items-center my-3 text-3xl py-8 shadow-lg font-semibold  bg-transparent text-white"  >
          <h1 className="text-4xl font-semibold text-blue-400">Projects</h1>
        </div>
        <div className="flex flex-wrap sm:flex-row fex-col my-3  justify-center items-center gap-4">
      
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
       
        </div>
      </div>
    </>
  );
};

export default Project;
