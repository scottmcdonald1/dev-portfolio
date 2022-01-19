import Head from 'next/head'

import Projects from '../src/Projects'
import About from '../src/About'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>



      <div className='w-screen grid gap-2 justify-center items-center px-2 sm:px-8 pt-32'>
        <h1 className='font-bowlbyOneSC text-5xl'>Welcome</h1>
        <div className='bg-white font-monda w-full grid gap-3 items-center border border-ombreNaturelle31 rounded px-6 py-4 shadow-sharp'>
          <p>Welcome to my page!</p>
        </div>
      </div>

    </>
  )
}