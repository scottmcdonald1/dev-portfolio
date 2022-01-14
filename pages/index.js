import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import Projects from '../components/Projects'
import About from '../components/About'
import SocialIcons from '../components/SocialIcons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Scott McDonald</title>
      </Head>

      <div className='w-screen p-2'>
      
        <div className='w-full grid grid-cols-3'>

          <div className='flex'>
            <SocialIcons />
          </div>

          <div className='h-full flex justify-center items-center'>
            <div className='bg-white h-full grid justify-center items-center border border-ombreNaturelle31 rounded  shadow-sharp'>
              <h1 className='font-bowlbyOneSC text-2xl whitespace-nowrap'>
                Scott McDonald
              </h1>
            </div>
          </div>

          <div className='h-full grid justify-center items-center'>
            <div className='bg-white h-full grid justify-center items-center border border-ombreNaturelle31 rounded shadow-sharp'>
              <h1 className='font-monda text-xl'>
                about
              </h1>
            </div>
          </div>

        </div>


      </div>

      <div className='w-screen min-h-screen px-2 sm:px-8 py-20'>
        <div className='grid gap-4'>

        <About />

        <Projects />

        </div>
      </div>

    </>
  )
}