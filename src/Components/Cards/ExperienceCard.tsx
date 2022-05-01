import React, { FunctionComponent } from 'react'

const ExperienceCard:FunctionComponent<{
    Organization:string,
    year:string,
    responsibilty:string,
    designation:string
}>=({Organization,year,responsibilty,designation})=>{
  return (
    <div className='flex flex-col p-4 my-4 bg-black rounded-xl'>
              <h4 className='text-2xl font-bold text-white'>{Organization} <span className='text-sm'>{`(${year})`}</span></h4>
            <h3 className='text-xl font-semibold text-white'>{designation}</h3>
            <p className='my-3 text-sm text-white'>{responsibilty}.</p>
            </div>
  )
}

export default ExperienceCard