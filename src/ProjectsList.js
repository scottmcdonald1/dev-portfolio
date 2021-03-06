import React, { useState } from 'react'
import Image from 'next/image'

import bookbaseScreenshot from '../public/sitepreviews/bookbase_screenshot.png'
import spotifyappScreenshot from '../public/sitepreviews/spotifyapp_screenshot.png'
import quizappScreenshot from '../public/sitepreviews/quizapp_screenshot.png'

export default function ProjectList() {

  return (
    <div className='w-full grid gap-6'>
      <Project 
        name={bookbaseInfo.name}
        summary={bookbaseInfo.summary}
        techStack={bookbaseInfo.techStack}
        note={bookbaseInfo.note}
        src={bookbaseScreenshot}
        demo={bookbaseInfo.demo}
        repo={bookbaseInfo.repo}
      />

      <Project 
        name={spotifyappInfo.name}
        summary={spotifyappInfo.summary}
        techStack={spotifyappInfo.techStack}
        note={spotifyappInfo.note}
        src={spotifyappScreenshot}
        demo={spotifyappInfo.demo}
        repo={spotifyappInfo.repo}
      />

      <Project 
        name={quizzappInfo.name}
        summary={quizzappInfo.summary}
        techStack={quizzappInfo.techStack}
        note={quizzappInfo.note}
        src={quizappScreenshot}
        demo={quizzappInfo.demo}
        repo={quizzappInfo.repo}
      />
    </div>
  )
}

function Project({name, summary, techStack, note, src, demo, repo}) {

  const stack = techStack.map((tech, i) => {
    return (
      <li key={i} className='font-monda text-sm text-ombreNaturelle31'>{tech}</li>
    )
  })

  const altAttr = `screenshot for ${name}`;

  return (
    <div className='w-full border-b-2 grid gap-12 sm:gap-4 sm:grid-rows-5 pb-12'>

      {/* ROW 1 */}
      <div className='grid row-span-1 justify-end items-end'> 
        <div className='bg-white/75 border border-ombreNaturelle31 rounded shadow-sharp p-2'>
          <h2 className='font-monda font-bold text-2xl'>{name}</h2>
        </div>
      </div>

      {/* ROW 2 */}
      <div className='grid gap-12 sm:gap-4 row-span-2 sm:grid-cols-2'>

        <div className='grid justify-center justify-items-center items-start'>
          <div className='bg-white/75 lg:w-5/6 2xl:w-3/4 border border-ombreNaturelle31 rounded shadow-sharp p-2'>
            <Image src={src} alt={altAttr} className='rounded' />
          </div>
        </div>

        <div className='grid justify-left sm:justify-center items-end'>
          <div className='bg-white/75 border border-ombreNaturelle31 rounded shadow-sharp p-2 text-left'>
            <h3 className='font-monda text-lg'>Tech Stack</h3>
            <div className='py-1.5 px-3'>
              <ul className='list-disc list-inside'>
                {stack}
              </ul>
            </div>
          </div>
        </div>
        
      </div>

      {/* ROW 3 */}
      <div className='grid gap-2 sm:grid-cols-2'>

        <div className='grid col-span-1 justify-center items-center'>
          <div className='bg-white/75 border border-ombreNaturelle31 rounded shadow-sharp p-2'>
            <h3 className='font-monda text-lg'>Summary</h3>
            <div className='py-1.5 px-3'>
              <p className='font-monda max-w-prose text-sm text-justify text-ombreNaturelle31'>{summary}</p>
            </div>
          </div>
        </div>

      </div>

      {/* ROW 4 */}
      <div className='grid gap-2 sm:grid-cols-5'>
        <div className='grid sm:col-span-3 sm:col-start-2 justify-center items-center'>

          <div className='bg-white/75 w-full grid gap-4 border border-ombreNaturelle31 rounded shadow-sharp p-4'>
            
            <div className='grid justify-end'>
              <p className='font-monda text-xs text-orangeVif'>{note}</p>
            </div>

            <div className='grid gap-2 sm:grid-cols-2'>
              <ProjectLink label="Live Demo" url={demo} />
              <ProjectLink label="Repository" url={repo} />
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

function ProjectLink({label, url}) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div 
        className='grid justify-center items-center rounded-full border hover:border-spotifyBlack hover:shadow-md text-ombreNaturelle31/70 hover:text-ombreNaturelle31 p-2 transition duration-150 ease-out'
      >
        <p className='font-monda'>{label}</p>
      </div>
    </a>
  )
}

const bookbaseInfo = {
  name: `Bookbase`,

  summary: `Bookbase is a personal library management application. Through the use of "shelves" it allows users to keep track of books they have read, ones they are currently reading and those that they want to read in the future. At its core, its a true bookclub companion.`,

  techStack: [
    `Java`, 
    `Spring Framework (Gradle)`,
    `Thymeleaf`, 
    `Bootstrap`,
    `MySQL RDS on AWS`,
    `Hosted on Heroku`,
    `Google Books API`, 
    `NYT API (for bestsellers)`,
  ],

  note: `Guest login (email | password): bookbase.demo@gmail.com | password`,

  repo: `https://github.com/scottmcdonald1/bookbase`,

  demo: `https://bookbase-app.herokuapp.com/`,

}

const spotifyappInfo = {
  name: `Spotify API Assistant`,

  summary: `A utility for professionals in the music industry for accessing information about artists, albums, and songs through use of the Spotify API (mostly ISRC codes). In it's essence, it is an accessible app for navigating music data with an easy-to-use user-interface.`,

  techStack: [
    `JavaScript (React)`, 
    `Next.js Framework`,
    `Tailwind.CSS`,
    `Spotify API`
  ],

  note: `Currently in development. Due to Spotify API restrictions, access to the app is limited to whitelisted users.`,

  repo: `https://github.com/scottmcdonald1/spotifyapp`,

  demo: `https://spotifyapp-three.vercel.app/`,
}

const quizzappInfo = {
  name: `Quiz App`,

  summary: `A fun, little quiz app.`,

  techStack: [
    `JavaScript (React)`,
    `Next.js Framework`,
    `Tailwind.CSS`,
    `Open Trivia Database API`,
  ],

  note: `Enjoy this quiz app I made as part of a weekly challenge in the Devjam discord group.`,

  repo: `https://github.com/scottmcdonald1/quizapp`,

  demo: `https://quizapp-eight.vercel.app/`,
}
