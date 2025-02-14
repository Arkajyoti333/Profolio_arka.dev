import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiWikipedia } from "react-icons/si";

const ProjectCard = () => {
  return (
    <div className="relative w-80 h-52 bg-black rounded-lg overflow-hidden shadow-lg group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-90 transition-all duration-300"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/29343550/pexels-photo-29343550/free-photo-of-scenic-mountain-road-in-majestic-forest-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      ></div>

      {/* Content */}
      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-4">
        <h2 className="text-white text-lg font-semibold">QuakeAnalysis</h2>
        <p className="text-orange-400 text-sm">Description</p>

        {/* Icons */}
        <div className="flex gap-4 mt-2 text-orange-400">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FiGithub className="text-xl hover:text-white transition-all" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FiExternalLink className="text-xl hover:text-white transition-all" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <SiWikipedia className="text-xl hover:text-white transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};







export default ProjectCard;