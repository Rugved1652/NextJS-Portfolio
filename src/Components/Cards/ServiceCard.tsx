import React, { FunctionComponent } from 'react'
import { servicesInterface } from '../../Helper/types'

const ServiceCard: FunctionComponent<{ service: servicesInterface }> = ({service:{title,about}}) => {
    return (
        <div  className='flex items-center justify-between gap-6 text-white bg-black rounded-xl'>
            <div className='bg-indigo-300 border-l-8 h-36'>
            </div>
            <div>
            <h1 className='text-2xl font-bold text-white '>{title}</h1>
               {about}
            </div>
        </div>
    )
}

export default ServiceCard