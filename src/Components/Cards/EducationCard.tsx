import React, { FunctionComponent } from 'react'

const EducationCard:FunctionComponent<{
    education:string,
    sub:string,
    organization:string,
    grade:string,
    year:string
}>=({education,year,organization,grade,sub})=>{
  return (
    <div className='flex flex-col p-4 my-4 bg-black rounded-xl'>
    <h4 className='text-xl font-bold text-white'>{education}<span className='text-sm'>{`(${sub})`}</span></h4>
  <h3 className='text-lg font-semibold text-white'>{organization}</h3>
  <h3 className='text-sm font-semibold text-white'>{`${grade} (${year})`}</h3>
  </div>
  )}

export default EducationCard