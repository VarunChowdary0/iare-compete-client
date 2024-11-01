import React from 'react'

interface currentProps{
    Skills_ : {Skill:string}[]
}
const Skills:React.FC<currentProps> = (props) => {
  return (
    <div className="flex flex-col">
    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Skills</span>
        <ul className=" flex gap-4 max-sm:mt-2 mt-5 flex-wrap max-h-[265px] overflow-y-auto">
          {
            props.Skills_.map((ele,id)=>
              <li key={"skill-"+id} className="mb-2 bg-black/10 px-2 py-1 max-sm:text-sm rounded-lg hover:bg-black/20 
              transition-all hover:cursor-pointer">{ele.Skill}</li>
            )
          }
        </ul>
    </div>
  )
}

export default Skills