import { useState } from "react"

import { experiences } from "../resources/exp" 
import Sectitle from "../components/Sectitle"

function Experineces() {
    const [selectedItemindex, setSelectedItemindex] =useState(0)
  return (
    <div id="experience-section">
      <Sectitle title="Experience" />
      <div className="flex flex-col lg:flex-row py-8 gap-10 w-full">
        <div className="flex flex-row lg:flex-col gap-3 border-l-2 border-[#135e4c82] lg:w-1/3 lg:overflow-hidden overflow-x-scroll w-full">
            {experiences.map((experience,index)=>(
                 <div key={index} onClick={()=>(setSelectedItemindex(index))} className="cursor-pointer">
                    <h1 className={`text-xl px-8 py-2 hover:px-12 hover:border-teal hover:border-b-2 ${selectedItemindex === index ? 'text-tertiary border-tertiary border-l-4 -ml-0.5 bg-[#135e4c82] py-3' : 'text-white'} `}>{experience.period}</h1>
                 </div> 
            ))}
        </div>
        <div className="flex flex-col gap-4  lg:w-2/3">
            <h1 className="text-secondary text-2xl">{experiences[selectedItemindex].title}</h1>
            <strong className="text-white text-xl">{experiences[selectedItemindex].company}</strong>
            <h1 className="text-white text-xl">{experiences[selectedItemindex].description}</h1>
        </div>
      </div>
    </div>
  )
}

export default Experineces
