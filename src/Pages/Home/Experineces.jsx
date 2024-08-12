import { useState } from "react"
import Sectitle from "../../components/Sectitle"
import { experiences } from "../../resources/exp" 

function Experineces() {
    const [selectedItemindex, setSelectedItemindex] =useState(0)
  return (
    <div>
      <Sectitle title="Experience" />
      <div className="flex py-8 gap-20">
        <div className="flex flex-col gap-3 border-l-2 border-[#135e4c82] w-1/3">
            {experiences.map((experience,index)=>(
                 <div key={index} onClick={()=>(setSelectedItemindex(index))} className="cursor-pointer">
                    <h1 className={`text-xl px-8 py-2 ${selectedItemindex === index ? 'text-tertiary border-tertiary border-l-4 -ml-0.5 bg-[#135e4c82] py-3' : 'text-white'} `}>{experience.period}</h1>
                 </div> 
            ))}
        </div>
        <div className="flex flex-col gap-4 ">
            <h1 className="text-secondary text-2xl">{experiences[selectedItemindex].title}</h1>
            <h1 className="text-white text-xl">{experiences[selectedItemindex].company}</h1>
            <h1 className="text-tertiary text-xl">{experiences[selectedItemindex].description}</h1>
        </div>
      </div>
    </div>
  )
}

export default Experineces
