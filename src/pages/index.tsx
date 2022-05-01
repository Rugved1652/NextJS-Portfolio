import type { NextPage } from 'next'
import Head from 'next/head'
import ServiceCard from '../Components/Cards/ServiceCard'
import { Services } from '../Helper/Data'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-white'>
        <h5 className='px-3 mx-4 text-lg font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel ducimus numquam deserunt autem dolores unde quasi, quas, atque sunt esse dignissimos. Esse eaque, excepturi aspernatur blanditiis assumenda nesciunt. Eum?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, dolores. </h5>
      </div>
      <div className='mt-6 text-white'>
        <h5 className='m-4 text-3xl font-bold text-[#89c8fc] text-center'>Services</h5>
        <div className='m-4'>
          <div className='grid gap-6 lg:grid-cols-2 sm:grid-cols-6'>
            {
              Services.map((i)=>(
                <ServiceCard service={i}/> 
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home