import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { AboutTitle } from '../src/LetterSvgs'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <div className="w-screen px-2 pt-20">

        <div className="p-2">
          <div>
            <h1 className='font-bowlbyOneSC text-3xl sm:text-4xl drop-shadow-lg'>About</h1>
          </div>
        </div>

        <div className='font-monda grid items-center py-4'>
          <div 
            className='bg-white/80 max-w-prose mx-auto text-justify grid gap-3 border border-ombreNaturelle31 rounded shadow-sharp px-6 py-4'
          >
            <h2 className='text-xl'>Hi, I'm Scott! I'm a full-stack developer looking for work!</h2>

            <h3 className='text-lg text-ombreNaturelle31 pt-3'>A Journey into Coding</h3>

            <p className='text-ombreNaturelle31'>
              In 2020 during the first lock-down, I began teaching myself the skills needed to enter the web development field. At the time, I was waiting tables at a restaurant that was going through a series of closures in the early stages of the COVID-19 pandemic. So, as a way to pass the time and keep my sanity in check, I enrolled in Harvard's CS50x taught by David Malan. 
            </p>

            <p className='text-ombreNaturelle31'>
              In the summer of 2021, I completed a program offered by LaunchCode, a Saint Louis-based (now national) non-profit dedicated to helping people from non-traditional backgrounds develop skills and find work in the tech world. Through this, I earned a certificate in Java and JavaScript web development and am incredibly proud of that accomplishment.
            </p>

            <p className='text-ombreNaturelle31'>
              To further my CS education, I am currently auditing two courses on the EDX platform: an introductory class on Amazon Web Services (AWS) and an intermediate-level class on building mobile applications with React Native. 
            </p>

            <p className='text-ombreNaturelle31'>
              Outside of a formal class environment, I cater to a learn-by-doing philosophy and have been working on small apps when time allows. My most recent side project is a Spotify API Assistant, a simple utility that allows users to navigate the Spotify API with a friendly search UI. The idea for the app was the product of a conversation I had with my partner, who works for a small record label in the Americana/Country/Folk world, and was a solution to a problem she had concerning ISRC codes and their accessibility.
            </p>

            <p className='text-ombreNaturelle31'>
              I am eager to apply the skills that I have developed in a professional environment. I am proficient in JavaScript and TypeScript and am most familiar with React, but I also have experience working in Angular. Though I feel most comfortable on the front-end, I also have ample experience with the back-end working in Java with Spring Boot.
            </p>

            <h3 className='text-lg text-ombreNaturelle31 pt-3'>Who am I?</h3>

            <p className='text-ombreNaturelle31'>
              I have a BA in Theatre from the University of Missouri and spent a short stint in New York immediately following graduation. Though I don't do too much theatre anymore, I have found other ways to sate my creativity and enjoy drawing and painting. I draw a lot of fun, little doodles in marker and pen to make my partner laugh, but occasionally break out the acrylics for portraiture. 
            </p>

            <p className='text-ombreNaturelle31'>
              I enjoy cooking and am a hobbyist baker. I bake bread, mostly, and can make a mean ciabatta or french loaf. Most recently, I've been perfecting my pizza crust.
            </p>

            <p className='text-ombreNaturelle31'>
              I reside in the South City area of Saint Louis with my loving partner of 5 years, Cassie, who has been incredibly supportive through my career change. Together we have a rescue pitbull named Molly, who needs <i>a little</i> extra care and attention, but is the best dog I've ever had.
            </p>

          </div>
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
    <div className='bg-white/80 max-w-prose mx-auto text-justify grid gap-3 border border-ombreNaturelle31 rounded shadow-sharp px-6 py-4'>{paragraphs}</div>
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