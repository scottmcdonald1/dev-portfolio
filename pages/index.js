import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Projects from '../components/Projects'

import expandMore from '../public/expand_more.svg'
import expandLess from '../public/expand_less.svg'
import githubIcon from '../public/github.svg'
import linkedinIcon from '../public/linkedin.svg'
import profilePic from '../public/profilepic.jpeg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scott McDonald</title>
      </Head>

      <main>
        <div className='w-screen grid gap-2 justify-center items-center px-2 sm:px-8 py-20'>
        
          <div className='bg-white grid justify-center items-center border border-ombreNaturelle31 rounded px-4 pt-8 pb-4 shadow-sharp'>

            <div className='grid justify-center'>
              <h1 className='font-bowlbyOneSC text-3xl sm:text-5xl lg:text-6xl'>
                Scott McDonald
              </h1>
            </div>

            <div className='grid justify-end px-5'>
              <h2 className='font-monda text-md md:text-lg text-ombreNaturelle31/70'>
                Web Developer for hire
              </h2>
            </div>
              

          </div>


        </div>

        <div className='w-screen min-h-screen px-2 sm:px-8 py-20'>
          <div className='grid gap-4'>

          <About />

          <Projects />

          </div>
        </div>
      </main>

    </div>
  )
}

function About() {

  const [displayAbout, setDisplayAbout] = useState(false)

  const expandIcon = displayAbout ? (
    <Image src={expandLess} width={40} height={40} />
  ) : (
    <Image src={expandMore} width={40} height={40} />
  )

  const toggleDisplayAbout = () => {
    if (displayAbout) {
      setDisplayAbout(false);
    } else {
      setDisplayAbout(true);
    }
  }

  return (
    <>
    <div className='bg-white grid grid-cols-2 items-center border border-ombreNaturelle31 p-4 shadow-sharp'>
      
      <div>
        <h2 className='font-bowlbyOneSC text-3xl'>About</h2>
      </div>

      <div className='grid justify-end'>
        <button
          onClick={toggleDisplayAbout}
          className="grid justify-center items-center rounded-full border hover:border-spotifyBlack hover:shadow-smallSpread text-ombreNaturelle31/70 hover:text-ombreNaturelle31 p-2 transition duration-150 ease-out"
        >
          {expandIcon}
        </button>
      </div>
    </div>

    {displayAbout ? 
      (
        <div className='w-full grid gap-3 px-4 border-l'>
          <div className='bg-white w-full grid grid-cols-2 items-center border border-ombreNaturelle31 rounded px-4 py-2 shadow-sharp'>
            <p>insert a paragraph about me</p>
          </div>

        </div>
      ) : (
        <></>
      )
    }
  </>
  )
}