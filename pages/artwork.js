import React, { useState } from "react";
import Head from 'next/head'

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
          <ArtItems artworks={artworks} />
        </div>

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
      onTouchStart={showDisplay}
      onTouchEnd={hideDisplay}
      className="bg-white/75 w-full h-full relative grid gap-2 border border-ombreNaturelle31 rounded shadow-sharp p-3 overflow-hidden"
    >
      <div className="w-full h-full grid justify-center items-center">
        <img src={artwork.src} alt={altAttr} className="max-h-72 drop-shadow-imgShadow"/>
      </div>
      <div className={display}>
        <p className="text-ombreNaturelle31 p-2"><i>{artwork.title}</i></p>
      </div>
    </div>
  )

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
    title: 'Canned Moose',
    src: '/artwork/canned_moose.png'
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
  {
    title: 'Poor Richard',
    src: '/artwork/poor_richard.png'
  },
  {
    title: 'Ghosties from the Void',
    src: '/artwork/ghosties_from_the_void.png'
  },
  {
    title: `Holdin' Delicious`,
    src: '/artwork/holdin_delicious.png'
  },
  {
    title: 'Lightyears Davis',
    src: '/artwork/lightyears_davis.png'
  },
  {
    title: 'More Mayo Please',
    src: '/artwork/more_mayo_please.png'
  },
  {
    title: 'Ohhhh ababy!',
    src: '/artwork/ohhhh_ababy.png'
  },
  {
    title: 'Professor',
    src: '/artwork/professor.png'
  },
  {
    title: 'Skull',
    src: '/artwork/skull.png'
  },
  {
    title: 'Snail Young',
    src: '/artwork/snail_young.png'
  },
  {
    title: 'Squad Ghouls',
    src: '/artwork/squad_ghouls.png'
  },
  {
    title: 'Stay Cool Out There',
    src: '/artwork/stay_cool_out_there.png'
  },
  {
    title: 'Sun and Flower',
    src: '/artwork/sun_and_flower.png'
  },
  {
    title: 'Swab the Duck',
    src: '/artwork/swab_the_duck.png'
  },
  {
    title: 'Unanticipated Flatulence',
    src: '/artwork/unanticipated_flatulence.png'
  },
  {
    title: 'Weirdos',
    src: '/artwork/weirdos.png'
  },
  {
    title: 'Grapes',
    src: '/artwork/grapes.png'
  },
]