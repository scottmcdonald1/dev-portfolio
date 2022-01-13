import React, { useState } from 'react'
import Image from 'next/image'

import expandMore from '../public/expand_more.svg'
import expandLess from '../public/expand_less.svg'

export default function About() {

  const [displayAbout, setDisplayAbout] = useState(false)

  const expandIcon = displayAbout ? (
    <Image src={expandLess} width={40} height={40} alt='expand less icon' />
  ) : (
    <Image src={expandMore} width={40} height={40} alt='expand more icon' />
  )

  const toggleDisplayAbout = () => {
    if (displayAbout) {
      setDisplayAbout(false);
    } else {
      setDisplayAbout(true);
    }
  }

  return (
    <>
    <div className='bg-white grid grid-cols-2 items-center border border-ombreNaturelle31 p-4 shadow-sharp'>
      
      <div>
        <h2 className='font-bowlbyOneSC text-3xl'>About</h2>
      </div>

      <div className='grid justify-end'>
        <button
          onClick={toggleDisplayAbout}
          className="grid justify-center items-center rounded-full border hover:border-spotifyBlack hover:shadow-smallSpread text-ombreNaturelle31/70 hover:text-ombreNaturelle31 p-2 transition duration-150 ease-out"
        >
          {expandIcon}
        </button>
      </div>
    </div>

    {displayAbout ? 
      (
        <div className='w-full grid gap-3 px-4 border-l'>
          <div className='bg-white font-monda w-full grid gap-3 items-center border border-ombreNaturelle31 rounded px-6 py-4 shadow-sharp'>
            <AboutBlurb blurb={blurb} />
          </div>

        </div>
      ) : (
        <></>
      )
    }
  </>
  )
}

function AboutBlurb({blurb}) {

  const paragraphs = blurb.map((paragraph, i) => {
    return <p key={i}>{paragraph}</p>
  })

  return <>{paragraphs}</>
}

const blurb = [
  `
    👋 Hello! Welcome to my portfolio page. As you probably have figured out by now, my name is Scott McDonald, and I have been working incredibly hard towards becoming a web developer.
  `, 
  `
    In mid-2020, I began teaching myself the skills and languages needed to enter the web development field, leaving my current workplace so I could devote all of my time to fast-tracking the development of my coding skills. In the summer of 2021, I completed LaunchCode's LC101 program, a Missouri-based non-profit dedicated to helping people from non-traditional backgrounds develop skills and find work within the tech community. Through this, I earned a certificate in Java and JavaScript web development and am incredibly proud of that accomplishment. Additionally, I have immersed myself in numerous self-guided tutorials through resources such as Harvard's CS50x course, FreeCodeCamp, and a few from Wes Bos, an Ontario-based web developer, educator, and podcaster.
  `, 
  `
    I am eager to apply the skills that I have developed in a professional environment. I am proficient in JavaScript and TypeScript and am most familiar with building React apps in a Next.js framework (I also have experience working in Angular). Though I feel most comfortable on the front-end, I also have ample experience with the back-end working in Java with Spring Boot. 
  `, 
  `
    Since finishing LaunchCode, I'm spending my time building small apps, learning through online tutorials, and searching for work. I have recently been honing my React skills and have taken a particular interest in working with RESTful APIs, where I have been building out middleware and using the built-in API routing with Next.js. My most recent project has been developing a Spotify API assistant, a simple, friendly search UI for navigating Spotify's API (listed in the Projects section below). The idea for the app was the product of a conversation I had with my partner, who works for a small record label in the Americana/Country/Folk world. Currently, the app is in its MVP stage and is used by at least one working professional in the music industry today.
  `, 
  `
    When not working towards a career in web development, I enjoy painting, drawing, cooking, reading, and spending time with my loving partner of 5 years, Cassie, and our rescue pitbull, Molly.
  `
]