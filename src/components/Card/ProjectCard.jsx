import { useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Modal from "../Modal/modal";
// import { SiWikipedia } from "react-icons/si";

const ProjectCard = ({project}) => {
    
  const [open, setopen] = useState(false);

  const handleOpenModal=()=>{
    setopen(!open)
    }
   
    return (
      <>
    <div className="relative w-80 h-52 bg-gray-400 rounded-lg overflow-hidden shadow-lg group cursor-pointer ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all duration-300"
        style={{
          backgroundImage:
            `url(${project?.image})`,
        }}
      ></div>


      {/* Content */}
      <div className="flex justify-between absolute bottom-0 w-full bg-gradient-to-t from-black via-gray/80 to-transparent p-4">
       <div>
       <h2 className="text-white text-lg font-semibold">{project?.title}</h2>
      
       </div>

        {/* Icons */}
        <div className="flex gap-4 mt-2 text-orange-400">
          <a href={project?.github} target="_blank" rel="noopener noreferrer">
            <FiGithub className="text-xl hover:text-white transition-all" />
          </a>
          <a href={project?.live} target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-xl hover:text-white transition-all  opacity-0 group-hover:opacity-100" />
          </a>
          <a  target="_blank" rel="noopener noreferrer " 
          onClick={handleOpenModal}>
            <AiOutlineFullscreen className="text-xl hover:text-white  transition-all " />
          </a>
        </div>
        {/* <div className="absolute bottom-0">
        <p className="text-orange-400 text-sm">{project?.description}</p>
        </div> */}
       
      </div>
    </div>
    {/* Modal */}
    {open && (
     <div>
      <Modal isOpen={open} onClose={handleOpenModal}>
      <div>{project.explanation.description1}</div>
      </Modal>
     </div>
    )}
    </>
  );
};







export default ProjectCard;