import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scott McDonald</title>
      </Head>

      <main>
        <div className='w-screen min-h-screen grid justify-center items-center px-8'>
          <div className='grid justify-center items-center border border-ombreNaturelle31 rounded p-4 shadow-sharp'>
            <h1 className='font-bowlbyOneSC text-5xl'>Scott McDonald</h1>
          </div>
        </div>

        <div className='w-screen min-h-screen px-8'>
          <div className='grid gap-4'>
            <div className='grid justify-end border border-ombreNaturelle31 p-4 shadow-sharp'>
              <h2 className='font-bowlbyOneSC text-3xl'>Projects</h2>
            </div>
            <div className='w-full grid gap-3 px-4'>

              <ProjectItem 
                name="BookBase" 
                demoUrl="https://bookbase-app.herokuapp.com/" 
                repoUrl="https://github.com/scottmcdonald1/bookbase" 
              />

              <ProjectItem 
                name="Spotify API Assistant" 
                demoUrl="https://spotifyapp-three.vercel.app/"
                repoUrl="https://github.com/scottmcdonald1/spotifyapp"
              />
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

function ProjectItem({name, demoUrl, repoUrl}) {
  return (
    <div className='w-full grid grid-cols-2 items-center border border-ombreNaturelle31 rounded px-4 py-2 shadow-sharp'>
      <div>
        <p className='font-monda'>{name}</p>
      </div>
      <div className='grid gap-2 grid-cols-3'>

        <a href={demoUrl}>
          <div 
            className='grid justify-center items-center rounded-full border    hover:border-spotifyBlack hover:shadow-smallSpread text-ombreNaturelle31/70 hover:text-ombreNaturelle31 p-2 transition duration-150 ease-out'
          >
            <p className='font-monda'>Live Demo</p>
          </div>
        </a>

        <a href={repoUrl}>
          <div 
            className="grid justify-center items-center rounded-full border hover:border-spotifyBlack hover:shadow-smallSpread text-ombreNaturelle31/70 hover:text-ombreNaturelle31 p-2 transition duration-150 ease-out"
          >
            <p className='font-monda'>Repository</p>
          </div>
        </a>

        <a href="#">
          <div 
            className="grid justify-center items-center rounded-full border hover:border-spotifyBlack hover:shadow-smallSpread text-ombreNaturelle31/70 hover:text-ombreNaturelle31 p-2 transition duration-150 ease-out"
          >
            <p className='font-monda'>Details</p>
          </div>
        </a>

      </div>
    </div>
  )
}
