import React, { useState } from 'react'
import Head from 'next/head'

export default function About() {

  const welcomeMessage = "Hi, I'm Scott! I'm a full-stack developer looking for work!"
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
            <h2 className='text-xl'>{welcomeMessage}</h2>

            <TextSection subtitle="A Journey into Coding" section={section1} />

            <TextSection subtitle="Who am I?" section={section2} />

          </div>
        </div>

      </div>
    </div>
  )
}

function TextSection({subtitle, section}) {

  const paragraphs = section.map((paragraph, i) => {
    return <p key={i} className='text-ombreNaturelle31'>{paragraph}</p>
  })

  return (
    <>
      <h3 className='text-lg text-ombreNaturelle31 pt-3'>{subtitle}</h3>
      {paragraphs}
    </>
    )
}

const section1 = [
  `In 2020 during the first lock-down, I began teaching myself the skills needed to enter the web development field. At the time, I was waiting tables at a restaurant that was going through a series of closures in the early stages of the COVID-19 pandemic. So, as a way to pass the time and keep my sanity in check, I enrolled in Harvard's CS50x taught by David Malan.`
  ,
  `In the summer of 2021, I completed a program offered by LaunchCode, a Saint Louis-based (now national) non-profit dedicated to helping people from non-traditional backgrounds develop skills and find work in the tech world. Through this, I earned a certificate in Java and JavaScript web development and am incredibly proud of that accomplishment.`
  ,
  `To further my CS education, I am currently auditing two courses on the EDX platform: an introductory class on Amazon Web Services (AWS) and an intermediate-level class on building mobile applications with React Native.`
  ,
  `Outside of a formal class environment, I cater to a learn-by-doing philosophy and have been working on small apps when time allows. My most recent side project is a Spotify API Assistant, a simple utility that allows users to navigate the Spotify API with a friendly search UI. The idea for the app was the product of a conversation I had with my partner, who works for a small record label in the Americana/Country/Folk world, and was a solution to a problem she had concerning ISRC codes and their accessibility.`
  ,
  `I am eager to apply the skills that I have developed in a professional environment. I am proficient in JavaScript and TypeScript and am most familiar with React, but I also have experience working in Angular. Though I feel most comfortable on the front-end, I also have ample experience with the back-end working in Java with Spring Boot.`
  ,
]

const section2 = [
  `I have a BA in Theatre from the University of Missouri and spent a short stint in New York immediately following graduation. Though I don't do too much theatre anymore, I have found other ways to sate my creativity and enjoy drawing and painting. I draw a lot of fun, little doodles in marker and pen to make my partner laugh, but occasionally break out the acrylics for portraiture.`
  ,
  `I enjoy cooking and am a hobbyist baker. I bake bread, mostly, and can make a mean ciabatta or french loaf. Most recently, I've been perfecting my pizza crust.`
  ,
  `I reside in the South City area of Saint Louis with my loving partner of 5 years, Cassie, who has been incredibly supportive through my career change. Together we have a rescue pitbull named Molly, who needs a little extra care and attention, but is the best dog I've ever had.`
  ,
]