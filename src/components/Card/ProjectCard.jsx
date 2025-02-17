import { useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Modal from "../Modal/modal";
// import { SiWikipedia } from "react-icons/si";

const ProjectCard = ({children="Empty Children Value !"}) => {
    
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
            "url('https://images.pexels.com/photos/29343550/pexels-photo-29343550/free-photo-of-scenic-mountain-road-in-majestic-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      ></div>

      {/* Content */}
      <div className="flex justify-between absolute bottom-0 w-full bg-gradient-to-t from-black via-gray/80 to-transparent p-4">
       <div>
       <h2 className="text-white text-lg font-semibold">QuakeAnalysis</h2>
       <p className="text-orange-400 text-sm">Description</p>
       </div>

        {/* Icons */}
        <div className="flex gap-4 mt-2 text-orange-400">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FiGithub className="text-xl hover:text-white transition-all" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-xl hover:text-white transition-all" />
          </a>
          <a  target="_blank" rel="noopener noreferrer " 
          onClick={handleOpenModal}>
            <AiOutlineFullscreen className="text-xl hover:text-white group-hover:opacity-100 transition-all opacity-0" />
          </a>
        </div>
      </div>
    </div>
    {/* Modal */}
    {open && (
     <div>
      <Modal isOpen={open} onClose={handleOpenModal}>
      <div>{children}</div>
      </Modal>
     </div>
    )}
    </>
  );
};







export default ProjectCard;