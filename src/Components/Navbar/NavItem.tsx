import React, { FunctionComponent } from 'react'
import  Link  from 'next/link'

const NavItem:FunctionComponent<{
    ActiveItem:string,
    setActiveItem:Function,
    name:string,
    route:string  
}>=({ActiveItem,setActiveItem,name,route})=>{
    return(
        
            ActiveItem !== name ? ( <Link href={route}>
                <a><span onClick={()=>{setActiveItem(name)}} className='px-4 text-2xl font-bold text-white'>{name}</span></a>
            </Link>) : null
        
        
    )
}

export default NavItem