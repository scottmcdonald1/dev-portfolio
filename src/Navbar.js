import React from "react";
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className='w-full fixed grid z-50'>

      <div className="w-full bg-white/70 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-2 border-b p-2">

        <div className='h-full grid justify-center items-end px-8'>
          <Link href="/">
            <h1 className='font-oxygenMono text-xl whitespace-nowrap hover:cursor-pointer drop-shadow-smLight'>
              Scott McDonald
            </h1>
          </Link>
        </div>

        <div className='h-full grid grid-cols-3 justify-center items-end'>
          <Link href="/about">
            <span className='font-monda text-center hover:cursor-pointer hover:underline drop-shadow-smLight'>about</span>
          </Link>
          <Link href="/projects">
            <span className='font-monda text-center hover:cursor-pointer hover:underline drop-shadow-smLight'>projects</span>
          </Link>
          <Link href="/artwork">
            <span className='font-monda text-center hover:cursor-pointer hover:underline drop-shadow-smLight'>artwork</span>
          </Link>
        </div>

      </div>

    </div>
  )
}

