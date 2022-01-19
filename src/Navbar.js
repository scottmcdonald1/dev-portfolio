import React from "react";
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full fixed grid p-2 z-50'>

      <div className="w-full bg-outremerMoyen/80 grid grid-cols-1 sm:grid-cols-2 backdrop-blur-sm border border-ombreNaturelle31 rounded shadow-sharp p-2">

        <div className='h-full grid justify-center items-end px-8'>
          <Link href="/">
            <h1 className=' font-oxygenMono text-xl text-white whitespace-nowrap hover:cursor-pointer drop-shadow-smDark'>
              Scott McDonald
            </h1>
          </Link>
        </div>

        <div className='h-full grid grid-cols-3 justify-center items-end'>
          <Link href="/about">
            <span className='font-monda text-white text-center hover:cursor-pointer hover:underline drop-shadow-smDark'>about</span>
          </Link>
          <Link href="/projects">
            <span className='font-monda text-white text-center hover:cursor-pointer hover:underline drop-shadow-smDark'>projects</span>
          </Link>
          <Link href="/artwork">
            <span className='font-monda text-white text-center hover:cursor-pointer hover:underline drop-shadow-smDark'>artwork</span>
          </Link>
        </div>

      </div>

    </div>
  )
}