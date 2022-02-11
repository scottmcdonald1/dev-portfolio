import React, {useState} from "react";
import Image from "next/image";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../public/artwork', false, /\.(png|jpe?g|svg)$/));

export function ArtItems() {

  const artItems = artworks.map((artwork, i) => {
    return <ArtItem key={i} title={artwork.title} fileName={artwork.fileName} />
  })

  return (
    <>
      {artItems}
    </>
  )
  
}

function ArtItem({title, fileName}) {
  const [displayTitle, setDisplayTitle] = useState(false)

  const display = displayTitle ? (
    "bg-white/70 absolute bottom-2 right-2 translate-y-0 transition-all border"
  ) : (
    "absolute bottom-2 right-2 translate-y-full transition-all"
  );


  const showDisplay = () => {
    setDisplayTitle(true);
  }

  const hideDisplay = () => {
    setDisplayTitle(false)
  }

  const altAttr = `Artwork titled ${title}`;
  const src = images[`${fileName}`]

  return (
    <div 
      onMouseOver={showDisplay} 
      onMouseOut={hideDisplay}
      onTouchStart={showDisplay}
      onTouchEnd={hideDisplay}
      className="bg-white/75 w-full h-full relative grid gap-2 border border-ombreNaturelle31 rounded shadow-sharp p-3 overflow-hidden"
    >
      <div className="w-full h-96 sm:h-72 2xl:h-96 relative grid justify-center items-center">
        <Image src={src} alt={altAttr} layout="fill" objectFit="contain" />
      </div>
      <div className={display}>
        <p className="text-ombreNaturelle31 p-2"><i>{title}</i></p>
      </div>
    </div>
  )

}


const artworks = [
  {
    title: 'Alien',
    fileName: 'alien.png'
  },
  {
    title: 'Apple',
    fileName: 'apple.png'
  },
  {
    title: 'Brickfoot Couture',
    fileName: 'brickfoot_couture.png'
  },
  {
    title: 'Catster',
    fileName: 'catster.png'
  },
  {
    title: 'Crowley',
    fileName: 'crowley.png'
  },
  {
    title: 'Definitely a Gerald',
    fileName: 'definitely_a_gerald.png'
  },
  {
    title: 'Duckie',
    fileName: 'duckie.png'
  },
  {
    title: 'Fresh',
    fileName: 'fresh.png'
  },
  {
    title: 'GAAGHARGAHGHGRHHH',
    fileName: 'GAAGHARGAHGHGRHHH.png'
  },
  {
    title: 'Gaia',
    fileName: 'gaia.png'
  },
  {
    title: 'Geotude',
    fileName: 'geotude.png'
  },
  {
    title: 'Canned Moose',
    fileName: 'canned_moose.png'
  },
  {
    title: 'Ghosties',
    fileName: 'ghosties.png'
  },
  {
    title: 'Giraffe Astronaut',
    fileName: 'giraffe_astronaut.png'
  },
  {
    title: 'Golden Boy',
    fileName: 'golden_boy.png'
  },
  {
    title: 'Hi There',
    fileName: 'hi_there.png'
  },
  {
    title: 'I Feel Ya',
    fileName: 'i_feel_ya.png'
  },
  {
    title: 'King of Red Lions',
    fileName: 'king_of_red_lions.png'
  },
  {
    title: 'Man of Constant Marrow',
    fileName: 'man_of_constant_marrow.png'
  },
  {
    title: 'Milk',
    fileName: 'milk.png'
  },
  {
    title: 'Poor Richard',
    fileName: 'poor_richard.png'
  },
  {
    title: 'Ghosties from the Void',
    fileName: 'ghosties_from_the_void.png'
  },
  {
    title: `Holdin' Delicious`,
    fileName: 'holdin_delicious.png'
  },
  {
    title: 'Lightyears Davis',
    fileName: 'lightyears_davis.png'
  },
  {
    title: 'More Mayo Please',
    fileName: 'more_mayo_please.png'
  },
  {
    title: 'Ohhhh ababy!',
    fileName: 'ohhhh_ababy.png'
  },
  {
    title: 'Professor',
    fileName: 'professor.png'
  },
  {
    title: 'Skull',
    fileName: 'skull.png'
  },
  {
    title: 'Snail Young',
    fileName: 'snail_young.png'
  },
  {
    title: 'Squad Ghouls',
    fileName: 'squad_ghouls.png'
  },
  {
    title: 'Stay Cool Out There',
    fileName: 'stay_cool_out_there.png'
  },
  {
    title: 'Sun and Flower',
    fileName: 'sun_and_flower.png'
  },
  {
    title: 'Swab the Duck',
    fileName: 'swab_the_duck.png'
  },
  {
    title: 'Unanticipated Flatulence',
    fileName: 'unanticipated_flatulence.png'
  },
  {
    title: 'Weirdos',
    fileName: 'weirdos.png'
  },
  {
    title: 'Grapes',
    fileName: 'grapes.png'
  },
]