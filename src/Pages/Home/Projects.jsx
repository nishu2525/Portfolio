import { useState } from "react"
import Sectitle from "../../components/Sectitle"
// import { experiences } from "../../resources/exp" 
import { projects } from "../../resources/projects"


function Projects() {
    const [selectedItemindex, setSelectedItemindex] =useState(0)

  return (
    <div>
    <Sectitle title="Project" />
    <div className="flex py-8 gap-20">
      <div className="flex flex-col gap-3 border-l-2 border-[#135e4c82] w-1/3">
          {projects.map((project,index)=>(
               <div key={index} onClick={()=>(setSelectedItemindex(index))} className="cursor-pointer">
                  <h1 className={`text-xl px-8 py-2 ${selectedItemindex === index ? 'text-tertiary border-tertiary border-l-4 -ml-0.5 bg-[#135e4c82] py-3' : 'text-white'} `}>{project.title}</h1>
               </div> 
          ))}
      </div>
      <div className="flex flex-col gap-4 w-2/3">
          <h1 className="text-secondary text-2xl">{projects[selectedItemindex].title}</h1>
          <h1 className="text-white text-xl">{projects[selectedItemindex].technologies}</h1>
          <h1 className="text-tertiary text-xl">{projects[selectedItemindex].description}</h1>
      </div>
    </div>
  </div>
  )
}

export default Projects
