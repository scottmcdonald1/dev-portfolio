import React, { useState } from 'react'
import Head from 'next/head'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <div className='w-screen grid gap-2 justify-center items-center px-2 sm:px-8 pb-20 pt-32'>
        <h1 className='font-bowlbyOneSC text-5xl'>About Page</h1>
      </div>
    </div>
  )
}