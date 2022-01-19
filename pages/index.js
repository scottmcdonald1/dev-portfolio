import Head from 'next/head'
import Link from 'next/link'

import Projects from '../components/Projects'
import About from '../components/About'
import SocialIcons from '../components/SocialIcons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className='w-screen'>
      
        <div className='w-full fixed top-2 grid grid-cols-3 p-2'>

          <div className='flex'>
            <SocialIcons />
          </div>

          <div className='flex'>
            <div className='bg-white/70 h-full grid justify-center items-center py-2 px-8 border border-ombreNaturelle31 rounded shadow-sharp'>
              <h1 className=' font-bowlbyOneSC text-2xl whitespace-nowrap'>
                Scott McDonald
              </h1>
            </div>
          </div>

          <div className='h-full grid justify-end items-center'>
            <div className='bg-white/70 h-full grid justify-center items-center py-2 px-4 border border-ombreNaturelle31 rounded shadow-sharp'>
              <Link href="/about">
                <span className='font-monda hover:cursor-pointer'>about</span>
              </Link>
            </div>
          </div>

        </div>


      </div>

      <div className='w-screen min-h-screen px-2 sm:px-8 pt-32'>
        <div className='grid gap-4'>

        <About />

        <Projects />

        </div>
      </div>

    </>
  )
}