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
          <h1 className='font-bowlbyOneSC text-5xl'>Scott McDonald</h1>
        </div>

        <div className='w-screen min-h-screen grid items-center px-8'>
          <div className='grid gap-4'>
            <div className='grid justify-end border border-ombreNaturelle31 p-4'>
              <h2 className='font-bowlbyOneSC text-3xl'>Projects</h2>
            </div>
            <div className='w-full grid gap-2 px-4'>
              <ProjectItem name="BookBase" />
              <ProjectItem name="Spotify API Assistant" />
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

function ProjectItem({name, demoUrl, RepoUrl}) {
  return (
    <div className='w-full border border-ombreNaturelle31 rounded p-2'>
      <p className='font-monda'>{name}</p>
    </div>
  )
}
