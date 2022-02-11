import React, { useState } from "react";
import Head from 'next/head'

import { ArtItems } from "../src/Artworks";

export default function Artwork() {

  return (
    <div>
      <Head>
        <title>Artwork</title>
      </Head>

      <div className='w-screen px-2 pt-20'>

        <div className="p-2">
          <div>
            <h1 className='font-bowlbyOneSC text-3xl sm:text-4xl drop-shadow-lg'>Art Gallery</h1>
          </div>
        </div>

        <div className='font-monda w-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center sm:px-8 py-4'>
          <ArtItems />
        </div>

      </div>
    </div>
  )
}