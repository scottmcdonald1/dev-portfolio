import React, { useState } from 'react'
import Head from 'next/head'

import { AboutTitle } from '../src/LetterSvgs'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <div className="w-screen grid gap-2 justify-center items-center px-2 sm:px-8 pt-20">

        <div className="p-2 mx-2 border-b border-orangeClair">
          <h1 className='font-bowlbyOneSC text-3xl sm:text-4xl drop-shadow-lg'>About</h1>
        </div>

        <div className='font-monda w-full grid items-center py-4'>
          <AboutBlurb blurb={blurb} />
        </div>

      </div>
    </div>
  )
}

function AboutBlurb({blurb}) {

  const paragraphs = blurb.map((paragraph, i) => {
    return <p key={i}>{paragraph}</p>
  })

  return (
    <div className='bg-white/80 grid gap-3 border border-ombreNaturelle31 rounded shadow-sharp px-6 py-4'>{paragraphs}</div>
  )
}

const blurb = [
  `
    In early 2020, on something of a whim, I began teaching myself the skills and languages needed to enter the web development field. Honestly, I started merely to have something to focus on as the restaurant I worked at went through a series of closures while it attempted to navigate through the early stages of the COVID-19 pandemic. 
  `, 
  `
    My introduction to web development started with Harvard's CS50x taught by David Malan, and I was drawn to it almost immediately. By mid-2020, I left my current workplace to devote all of my time to fast-tracking the development of my coding skills. In the summer of 2021, I completed LaunchCode's LC101 program, a Missouri-based non-profit dedicated to helping people from non-traditional backgrounds develop skills and find work within the tech community. Through this, I earned a certificate in Java and JavaScript web development and am incredibly proud of that accomplishment.
  `,
  `
    I am eager to apply the skills that I have developed in a professional environment. I am proficient in JavaScript and TypeScript and am most familiar with building React apps in a Next.js framework (I also have experience working in Angular). Though I feel most comfortable on the front-end, I also have ample experience with the back-end working in Java with Spring Boot. 
  `, 
  `
    Since finishing LaunchCode, I'm spending my time building small apps, learning through online tutorials, and searching for work. I have recently been honing my React skills and have taken a particular interest in working with RESTful APIs, where I have been building out middleware and using the built-in API routing with Next.js. My most recent project has been developing a Spotify API assistant, a simple, friendly search UI for navigating Spotify's API (listed in the Projects section). The idea for the app was the product of a conversation I had with my partner, who works for a small record label in the Americana/Country/Folk world. Currently, the app is in its MVP stage and is used by at least one working professional in the music industry today.
  `, 
  `
    When not working towards a career in web development, I enjoy painting, drawing, cooking, reading, and spending time with my loving partner of 5 years, Cassie, and our rescue pitbull, Molly.
  `
]