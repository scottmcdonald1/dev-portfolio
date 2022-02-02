import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>


      <div className="w-screen px-2 pt-20">

        <div className="p-2">
          <div>
            <h1 className='font-bowlbyOneSC text-3xl sm:text-4xl drop-shadow-lg'>Hello!</h1>
          </div>
        </div>

        <div className='font-monda w-full grid gap-3 items-center py-4'>

          <div className='bg-white/70 w-full grid sm:grid-rows-2'>
          
          {/* ROW 1 */}
            <div className='grid gap-4 sm:grid-cols-3 md:grid-cols-2 px-4 py-8'>

              <div className='grid col-span-1 justify-items-center items-center'>
                <div className='w-3/4 sm:w-full md:w-1/2'>
                  <div className='bg-white grid border border-ombreNaturelle31 rounded-full shadow-sharp p-2.5'>
                    <div className='border border-ombreNaturelle31 rounded-full overflow-hidden'>
                      <img src='me.JPG' alt='a picture of me' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='grid sm:col-span-2 md:col-span-1 justify-center items-center'>
                <div>
                  <div className='bg-white grid gap-2 border border-ombreNaturelle31 rounded shadow-sharp px-4 py-4'>
                    <h2 className='text-xl'>My name is Scott McDonald <span className='text-sm'>(he/him)</span></h2>
                    <p className='max-w-prose text-justify text-ombreNaturelle31 px-3'>
                       I'm a full stack developer and artist. I have created this site to showcase the skills that I have been <i>developing</i> over the past two years.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/** ROW 2 */}
            <div className='grid gap-4 sm:grid-cols-3 px-4 py-8'>

              <div className='grid sm:col-span-2 justify-center items-center'>
                <div>
                  <div className='bg-white grid gap-2 border border-ombreNaturelle31 rounded shadow-sharp px-6 py-4'>
                    <h2 className='text-lg'>
                      Come take a look!
                    </h2>

                    <p className='max-w-prose text-justify text-ombreNaturelle31 px-3'>
                      If you'd like you can learn a little bit more <Link href="/about"><span className='text-orangeVif underline hover:cursor-pointer'>about me</span></Link>, take a peek at some of my <Link href="/projects"><span className='text-orangeVif underline hover:cursor-pointer'>portfolio projects</span></Link>, or check out some of my <Link href="/artwork"><span className='text-orangeVif underline hover:cursor-pointer'>strange artwork</span></Link>.
                    </p>

                  </div>
                </div>
              </div>

              <div className='grid col-span-1 justify-items-center items-center'>
                <div className='w-3/4 sm:w-full md:w-3/4'>
                  <div className='bg-white grid border border-ombreNaturelle31 rounded-full overflow-hidden shadow-sharp'>
                      <img src='poor_richard.png' alt='a doodle of a boy with a baloon' className='max-h-full' />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  )
}

function WelcomeMessage({message}) {

  const paragraphs = message.map((paragraph, i) => {
    return (
      <div className=' grid '>
        
      </div>
    )
  })

  return <>{paragraphs}</>
}

const welcome = [
  `
    👋 Hello! Welcome to my portfolio page. My name is Scott McDonald, and I have been working incredibly hard towards becoming a web developer, and I have created this page to showcase the skills that I have been developing over the course of the past two years.
  `,
  `
    This site was made in React using a Next.js framework, using Tailwind.CSS for styling, and is currently hosted on Vercel. I would like to note that this site is currently (and may forever be) in development, as I intend to use it as a sort of creative playground for new found skills and design concepts -- so you may see some changes should you revisit. 
  `,
  `
    Please check out the about page for a brief summary of my journey in coding thus far, and be sure to pull up the project page for examples of my work. I am an artist by hobby, so I've included an artwork page with a few examples of my work.
  `,
]