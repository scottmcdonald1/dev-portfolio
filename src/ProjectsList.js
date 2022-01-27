import React, { useState } from 'react'

export default function ProjectList() {

  const projects = projectInfo.map((project, i) => {
    return (
      <Project
        key={i}
        name={project.name}
        summary={project.summary}
        techStack={project.techStack}
        note={project.note}
        demo={project.demo}
        repo={project.repo}
      />
    )
  })

  return (
    <div className='w-full grid gap-6'>{projects}</div>
  )
}

function Project({name, summary, techStack, note, demo, repo}) {

  const stack = techStack.map((tech, i) => {
    return (
      <p key={i} className='font-monda text-sm'>{tech}</p>
    )
  })

  return (
    <div className='bg-white w-full  px-4 py-12'>

      <div className='grid justify-end my-3'>
        <h2 className='font-monda text-2xl'>{name}</h2>
      </div>

      <div className='grid gap-4'>

        <div className='grid gap-4 sm:grid-cols-2'>

          <div>
            <div className='bg-white border rounded p-2'>
              <h3 className='font-monda text-lg'>Summary</h3>
              <div className='p-2'>
                <p className='font-mona text-sm text-justify break-words'>{summary}</p>
              </div>
            </div>
          </div>

          <div>
            <div className='bg-white grid border rounded p-2'>
              <h3 className='font-monda text-lg'>Tech Stack</h3>
              <div className='p-2'>
                {stack}
              </div>
            </div>
          </div>

        </div>

      <div className='bg-white grid gap-4 rounded p-4'>
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
  )
}

function ProjectLink({label, url}) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div 
        className='grid justify-center items-center rounded-full border hover:border-spotifyBlack hover:shadow-smallSpread text-ombreNaturelle31/70 hover:text-ombreNaturelle31 p-2 transition duration-150 ease-out'
      >
        <p className='font-monda'>{label}</p>
      </div>
    </a>
  )
}


const projectInfo = [
  {
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
  },
  
  {
    name: `Spotify API Assistant`,

    summary: `A utility for professionals in the music industry for accessing information about artists, albums, and songs through use of the Spotify API (mostly ISRC codes). In it's essence, it is an accessible app for navigating music data with an easy-to-use user-interface.`,

    techStack: [
      `JavaScript (React)`, 
      `Next.js framework`,
      `Tailwind.CSS`,
      `Spotify API`
    ],

    note: `Currently in development, but MVP available for viewing (you will need a spotify account)`,

    repo: `https://github.com/scottmcdonald1/spotifyapp`,

    demo: `https://spotifyapp-three.vercel.app/`,
  },

  {
    name: `Quiz App`,

    summary: `A fun, little quiz app.`,

    techStack: [
      `JavaScript (React)`,
      `Next.js framework`,
      `Tailwind.CSS`,
      `Open Trivia Database API`,
    ],

    note: `Enjoy this quiz app I made as part of a weekly challenge in the Devjam discord group.`,

    repo: `https://github.com/scottmcdonald1/quizapp`,

    demo: `https://quizapp-eight.vercel.app/`,
  },
]