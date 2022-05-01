import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Sidebar } from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <div className='grid grid-cols-12 gap-3 my-3 lg:px-3'>
    <div className='col-span-12 p-4 text-center lg:col-span-3 rounded-2xl  bg-[#262626]'>
      <Sidebar/>
    </div>
    <div className='col-span-12 bg-[#262626] lg:col-span-9 rounded-2xl'>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  </div> 
    ) 
    
}

export default MyApp
