import { useNavigate } from "react-router-dom"

const ProjectCard = ({img, id}:{img:string, id:any}) => {
  return (
    <div onClick={() =>  window.open('https://www.linkedin.com/in/mert-seyit/', '_blank')} className="relative overflow-hidden group cursor-pointer">
      <img src={img} alt="Project Image" className="w-[300px] group-hover:scale-110 transition-all duration-150"/>
      <div className="absolute w-full bottom-0 left-0 h-4/5 py-20 px-2 bg-gradient-to-t from-black to-transparent group-hover:translate-y-0 transition-all duration-100 translate-y-40">
        <h3 className="text-white text-lg font-bold">Project: {id}</h3>
        <p className="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quidem voluptate consequuntur.</p>
      </div>
    </div>
  )
}

export default ProjectCard