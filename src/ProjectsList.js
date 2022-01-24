import React, { useState } from 'react'

export default function ProjectList() {
  return (
    <div className='w-full grid gap-3'>

      <ProjectItem 
        name="BookBase" 
        demoUrl="https://bookbase-app.herokuapp.com/" 
        repoUrl="https://github.com/scottmcdonald1/bookbase"
        note="The live demo down at this time due to server issues. I would be happy to give a tour on my local machine!" 
      />

      <ProjectItem 
        name="Spotify API Assistant" 
        demoUrl="https://spotifyapp-three.vercel.app/"
        repoUrl="https://github.com/scottmcdonald1/spotifyapp"
        note="Currently in development, but MVP available for viewing"
      />

      <ProjectItem 
        name="Quiz App" 
        demoUrl="https://quizapp-eight.vercel.app/"
        repoUrl="https://github.com/scottmcdonald1/quizapp"
      />

    </div>
  )
}

function ProjectItem({name, demoUrl, repoUrl, note}) {
  return (
    <div className='bg-white w-full grid gap-2 grid-cols-2 items-center border border-ombreNaturelle31 rounded px-4 py-2 shadow-sharp'>

      <div className='grid'>
        <p className='font-monda text-lg'>{name}</p>
        {note ? (<p className='font-monda text-xs text-orangeVif'>{note}</p>): (<></>)}
      </div>

      <div className='grid gap-2 md:grid-cols-2'>

        <ProjectItemLink label="Live Demo" url={demoUrl} />
        <ProjectItemLink label="Repository" url={repoUrl} />

      </div>
    </div>
  )
}

function ProjectItemLink({label, url}) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div 
        className='grid justify-center items-center rounded-full border    hover:border-spotifyBlack hover:shadow-smallSpread text-ombreNaturelle31/70 hover:text-ombreNaturelle31 p-2 transition duration-150 ease-out'
      >
        <p className='font-monda'>{label}</p>
      </div>
    </a>
  )
}
