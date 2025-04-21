import { useState } from "react"

import { projects } from "../resources/projects"
import Sectitle from "../components/Sectitle"


function Projects() {
    const [selectedItemindex, setSelectedItemindex] =useState(0)

  return (
    <div id="project-section">
    <Sectitle title="Project" />
    <div className="flex flex-col lg:flex-row py-8 gap-10 w-full">
        <div className="flex flex-row lg:flex-col gap-3 border-l-2 border-[#135e4c82] lg:w-1/3  lg:overflow-hidden overflow-x-scroll w-full">
          {projects.map((project,index)=>(
               <div key={index} onClick={()=>(setSelectedItemindex(index))} className="cursor-pointer">
                  <h1 className={`text-xl px-8 py-2 hover:px-12 hover:border-teal hover:border-b-2 ${selectedItemindex === index ? 'text-tertiary border-tertiary border-l-4 -ml-0.5 bg-[#135e4c82] py-3' : 'text-white '} `}>{project.title}</h1>
               </div> 
          ))}
      </div>
    <a  href={projects[selectedItemindex].link}
    target="_blank"
     className="flex flex-col gap-4  lg:w-2/3 hover:scale-[1.01] transition-all duration-300 hover:border-b-2  hover:rounded-lg border-tertiary hover:px-4 ">
      <img src={projects[selectedItemindex].img} alt="" className="lg:h-72 lg:w-[24rem] p-2"/>
    <div className="flex flex-col gap-4 lg:w-2/3">
          <h1 className="text-secondary text-2xl">{projects[selectedItemindex].title}</h1>
          <h1 className="text-white text-xl">{projects[selectedItemindex].technologies}</h1>
          <h1 className="text-white text-xl">{projects[selectedItemindex].description}</h1>
        
      </div>
    </a >
    </div>
  </div>
  )
}

export default Projects
