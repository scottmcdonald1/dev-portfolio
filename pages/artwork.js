import React, { useState } from "react";
import Head from 'next/head'

export default function Artwork() {

  return (
    <div>
      <Head>
        <title>Artwork</title>
      </Head>

      <div className='w-screen grid gap-2 justify-center items-center px-2 sm:px-8 pt-32'>
        <div className="grid p-2 mx-2 border-b border-orangeClair">
          <h1 className='font-bowlbyOneSC text-5xl drop-shadow-lg'>Artwork</h1>
        </div>

        <div className='bg-white font-monda w-full grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center py-4'>
          <ArtItems artworks={artworks} />
        </div>

      </div>
    </div>
  )
}

function ArtItem({artwork}) {
  const [displayTitle, setDisplayTitle] = useState(false)

  const display = displayTitle ? (
    "bg-white/70 absolute bottom-2 right-2 translate-y-0 transition-all border border-ombreNaturelle31"
  ) : (
    "absolute bottom-2 right-2 translate-y-full transition-all"
  );

  const showDisplay = () => {
    setDisplayTitle(true);
  }

  const hideDisplay = () => {
    setDisplayTitle(false)
  }

  const altAttr = `Art Piece titled ${artwork.title}`;

  return (
    <div 
      onMouseOver={showDisplay} 
      onMouseOut={hideDisplay}
      className="w-full h-full relative grid gap-2 border border-ombreNaturelle31 rounded shadow-sharp p-2 overflow-hidden"
    >
      <div className="w-full h-full grid justify-center items-center">
        <img src={artwork.src} alt={altAttr} className="max-h-72 drop-shadow-imgShadow"/>
      </div>
      <div className={display}>
        <p className="p-2"><i>{artwork.title}</i></p>
      </div>
    </div>
  )

}

function ArtItems({artworks}) {

  const artItems = artworks.map((artwork, i) => {
    return <ArtItem key={i} artwork={artwork} />
  })

  return <>{artItems}</>
  
}

const artworks = [
  {
    title: 'Alien',
    src: '/artwork/alien.png'
  },
  {
    title: 'Apple',
    src: '/artwork/apple.png'
  },
  {
    title: 'Brickfoot Couture',
    src: '/artwork/brickfoot_couture.png'
  },
  {
    title: 'Catster',
    src: '/artwork/catster.png'
  },
  {
    title: 'Crowley',
    src: '/artwork/crowley.png'
  },
  {
    title: 'Definitely a Gerald',
    src: '/artwork/definitely_a_gerald.png'
  },
  {
    title: 'Duckie',
    src: '/artwork/duckie.png'
  },
  {
    title: 'Fresh',
    src: '/artwork/fresh.png'
  },
  {
    title: 'GAAGHARGAHGHGRHHH',
    src: '/artwork/GAAGHARGAHGHGRHHH.png'
  },
  {
    title: 'Gaia',
    src: '/artwork/gaia.png'
  },
  {
    title: 'Geotude',
    src: '/artwork/geotude.png'
  },
  {
    title: 'Ghostie',
    src: '/artwork/ghostie.png'
  },
  {
    title: 'Ghosties',
    src: '/artwork/ghosties.png'
  },
  {
    title: 'Giraffe Astronaut',
    src: '/artwork/giraffe_astronaut.png'
  },
  {
    title: 'Golden Boy',
    src: '/artwork/golden_boy.png'
  },
  {
    title: 'Hi There',
    src: '/artwork/hi_there.png'
  },
  {
    title: 'I Feel Ya',
    src: '/artwork/i_feel_ya.png'
  },
  {
    title: 'King of Red Lions',
    src: '/artwork/king_of_red_lions.png'
  },
  {
    title: 'Man of Constant Marrow',
    src: '/artwork/man_of_constant_marrow.png'
  },
  {
    title: 'Milk',
    src: '/artwork/milk.png'
  },
]