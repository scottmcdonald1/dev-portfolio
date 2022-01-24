import React from "react";
import Head from 'next/head'

import ProjectList from '../src/ProjectsList'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>

      <div className='w-screen grid gap-2 justify-center items-center px-2 sm:px-8 pt-32'>

        <div className="grid p-2 mx-2 border-b border-orangeClair">
          <h1 className='font-bowlbyOneSC text-5xl drop-shadow-lg'>Projects</h1>
        </div>

        <div className='font-monda w-full grid gap-3 items-center py-4'>
          <ProjectList />
        </div>

      </div>
    </div>
  )
}