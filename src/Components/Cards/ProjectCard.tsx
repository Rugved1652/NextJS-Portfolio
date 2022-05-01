import React, { FunctionComponent } from 'react'

const ProjectCard:FunctionComponent<{
    title:string,
    techstack:string,
    information:string,
    description:string
}>=({title,techstack,information,description})=>{
  return (
    <div className='m-4 bg-black rounded-xl'>
        <div className='p-4'>
        <h2 className='text-2xl font-bold'>{title} <span className='text-sm'>{`(${techstack})`}</span></h2>
        <h2 className='text-xl font-bold'>{information}</h2>
        {description}</div>
      </div>
  )
}

export default ProjectCard