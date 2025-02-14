import ProjectCard from "../../components/Card/ProjectCard";



const Project = () => {
  return (
    <>
      <div
        id="/project"
        className=" text-3xl text-red-700 font-semibold m-3 border-4 border-green-500 flex flex-wrap  justify-center items-center min-h-screen"
      >
        <div>
      
          <ProjectCard/>
       
        </div>
      </div>
    </>
  );
};

export default Project;
