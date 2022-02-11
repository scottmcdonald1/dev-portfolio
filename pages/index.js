import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import me from '../public/index/me.jpeg'
import poorRichard from '../public/index/poor_richard.png'
import grapes from '../public/index/grapes.png'
import henry from '../public/index/henry.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>


      <div className="w-screen px-2 pt-20">

        {/** GRID START */}
        <div className='font-monda w-full grid gap-8 sm:gap-24 md:gap-32 items-center py-4'>
          
          {/* ROW 1 */}
          <div className='grid gap-4 sm:grid-cols-3 md:grid-cols-6'>

            <div className='grid col-span-1 md:col-span-3 justify-items-center items-center'>
              <div className='w-2/3 sm:w-full md:w-1/2'>
                <div className='bg-white/75 grid border border-ombreNaturelle31 rounded shadow-sharp p-2.5'>
                    <Image src={me} alt='a picture of me' className='rounded' />
                </div>
              </div>
            </div>

            <div className='grid sm:col-span-2 md:col-span-2 justify-center items-center'>
              <div>
                <div className='bg-white/75 grid gap-2 border border-ombreNaturelle31 rounded shadow-sharp px-4 py-4'>
                  <h1 className='text-3xl font-bowlbyOneSC drop-shadow-lg'>Hello!</h1>
                  <h2 className='text-xl'>My name is Scott McDonald <span className='text-sm'>(he/him)</span></h2>
                  <p className='max-w-prose text-justify text-ombreNaturelle31 px-3'>
                      {welcomeMessage}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/** ROW 2 */}
          <div className='grid gap-4 sm:grid-cols-5'>

            <div className='grid sm:col-span-3 sm:col-start-2 justify-center items-center'>
              <div>
                <div className='bg-white/75 grid gap-2 border border-ombreNaturelle31 rounded shadow-sharp px-6 py-4'>
                  <h2 className='text-lg'>
                    Feel free to look around!
                  </h2>

                  <p className='max-w-prose text-justify text-ombreNaturelle31 px-3'>
                    If you&apos;d like you can learn a little bit more <Link href="/about"><span className='text-orangeVif underline hover:cursor-pointer'>about me</span></Link>, take a peek at some of my <Link href="/projects"><span className='text-orangeVif underline hover:cursor-pointer'>portfolio projects</span></Link>, or check out some of my <Link href="/artwork"><span className='text-orangeVif underline hover:cursor-pointer'>strange artwork</span></Link>.
                  </p>

                </div>
              </div>
            </div>

          </div>

          {/** ROW 3 */}
          <div className='grid gap-4 grid-cols-3 sm:grid-cols-5 '>
            <div className='grid grid-cols-3 col-span-3 sm:col-start-2'>
              <Doodle src={poorRichard} alt="boy with baloon" />
              <Doodle src={grapes} alt="fancy hat" />
              <Doodle src={henry} alt="nice robot" />
            </div>

          </div>

        </div>

      </div>

    </>
  )
}

function Doodle({src, alt}) {
  const altAttr = `a doodle of a ${alt}`

  return (
    <div className='grid justify-items-center items-center'>
      <div className='w-3/4 md:w-1/2'>
        <div className='bg-white/20 backdrop-blur-sm grid border rounded-full overflow-hidden'>
          <Image src={src} alt={altAttr} className='max-h-full drop-shadow-imgShadow' />
        </div>
      </div>
    </div>
  )
}

const welcomeMessage = `I'm a full stack developer and artist based out of Saint Louis, MO. I have created this site to showcase the skills that I have been developing over the past two years.`
