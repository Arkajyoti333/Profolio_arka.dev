import ProjectCard from "../../components/Card/ProjectCard";
import "../Resume/Resume.css";
// text-[#B6834A]

const Project = () => { 
  return (
    <>
      <div
        id="/project"
        className=" text-3xl font-semibold my-3  gap-1  min-h-screen min-w-full"
      >
        <div className=" bg_image flex justify-center items-center my-3 text-3xl py-5 shadow-lg font-semibold  bg-transparent text-white"  >
          <h1>Projects</h1>
        </div>
        <div className="flex flex-wrap sm:flex-row fex-col my-3  justify-center items-center gap-4">
      
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
