import React from "react";
import Head from 'next/head'

import {ProjectList} from '../src/Projects'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>

      <div className='w-screen grid gap-2 justify-center items-center px-2 sm:px-8 pt-32'>

        <div className="grid p-2 m-2 border-b border-orangeClair">
          <h1 className='font-bowlbyOneSC text-5xl drop-shadow-lg'>Projects</h1>
        </div>

        <div className='bg-white font-monda w-full grid gap-3 items-center border border-ombreNaturelle31 rounded px-6 py-4 shadow-sharp'>
          <ProjectList />
        </div>

      </div>
    </div>
  )
}