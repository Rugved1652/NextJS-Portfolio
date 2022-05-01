import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import NavItem from './NavItem'
import { NavArray } from '../../Helper/Menu'

function Navbar() {
    const [ActiveItem, setActiveItem]=useState<string>('')
    const { pathname } = useRouter()
    
    useEffect(() => {
      if(pathname ==='/'){setActiveItem('About Me')}
      if(pathname ==='/projects'){setActiveItem('Projects')}
      if(pathname ==='/skills'){setActiveItem('Skills')}
    }, [pathname]) 
    
    
  return (
    <div className='flex justify-between p-5'>
        <span className='text-2xl font-bold text-[#89c8fc] border-[#89c8fc] border-b-2'>{ActiveItem}</span>
        <div className='flex justify-center'>
            {
                NavArray && NavArray.map((i)=>(
                    <NavItem ActiveItem={ActiveItem} route={i.route} name={i.name} setActiveItem={setActiveItem}/>
                ))
            }
        </div>
    </div>
  )
}

export default Navbar