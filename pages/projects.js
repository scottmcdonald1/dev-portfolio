import React from "react";
import Head from 'next/head'

import ProjectList from '../src/ProjectsList'

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>

      <div className="w-screen px-2 pt-20">

        <div className="p-2">
          <div>
            <h1 className='font-bowlbyOneSC text-3xl sm:text-4xl drop-shadow-lg'>Projects</h1>
          </div>
        </div>

        <div className='w-full sm:px-8'>
          <ProjectList />
        </div>

      </div>
    </div>
  )
}