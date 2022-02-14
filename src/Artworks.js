import React, {useState} from "react";
import Image from "next/image";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const illustrations = importAll(require.context('../public/artwork/illustrations', false, /\.(png|jpe?g|svg)$/));
const paintings = importAll(require.context('../public/artwork/paintings', false, /\.(png|jpe?g|svg)$/));

export function ArtItems() {

  const artItems = artworks.map((artwork, i) => {
    return <ArtItem key={i} title={artwork.title} fileName={artwork.fileName} type={artwork.type} />
  })

  return (
    <>
      {artItems}
    </>
  )
  
}

function ArtItem({title, fileName, type}) {
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
  const src = type === 'illustration' ? illustrations[`${fileName}`] : paintings[`${fileName}`]

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
    fileName: 'alien.png',
    type: 'illustration'
  },
  {
    title: 'Apple',
    fileName: 'apple.png',
    type: 'illustration'
  },
  {
    title: 'Brickfoot Couture',
    fileName: 'brickfoot_couture.png',
    type: 'illustration'
  },
  {
    title: 'Catster',
    fileName: 'catster.png',
    type: 'illustration'
  },
  {
    title: 'Crowley',
    fileName: 'crowley.png',
    type: 'illustration'
  },
  {
    title: 'Definitely a Gerald',
    fileName: 'definitely_a_gerald.png',
    type: 'illustration'
  },
  {
    title: 'Duckie',
    fileName: 'duckie.png',
    type: 'illustration'
  },
  {
    title: 'Fresh',
    fileName: 'fresh.png',
    type: 'illustration'
  },
  {
    title: 'GAAGHARGAHGHGRHHH',
    fileName: 'GAAGHARGAHGHGRHHH.png',
    type: 'illustration'
  },
  {
    title: 'Gaia',
    fileName: 'gaia.png',
    type: 'illustration'
  },
  {
    title: 'Geotude',
    fileName: 'geotude.png',
    type: 'illustration'
  },
  {
    title: 'Canned Moose',
    fileName: 'canned_moose.png',
    type: 'illustration'
  },
  {
    title: 'Ghosties',
    fileName: 'ghosties.png',
    type: 'illustration'
  },
  {
    title: 'Giraffe Astronaut',
    fileName: 'giraffe_astronaut.png',
    type: 'illustration'
  },
  {
    title: 'Golden Boy',
    fileName: 'golden_boy.png',
    type: 'illustration'
  },
  {
    title: 'Hi There',
    fileName: 'hi_there.png',
    type: 'illustration'
  },
  {
    title: 'I Feel Ya',
    fileName: 'i_feel_ya.png',
    type: 'illustration'
  },
  {
    title: 'King of Red Lions',
    fileName: 'king_of_red_lions.png',
    type: 'illustration'
  },
  {
    title: 'Man of Constant Marrow',
    fileName: 'man_of_constant_marrow.png',
    type: 'illustration'
  },
  {
    title: 'Milk',
    fileName: 'milk.png',
    type: 'illustration'
  },
  {
    title: 'Poor Richard',
    fileName: 'poor_richard.png',
    type: 'illustration'
  },
  {
    title: 'Ghosties from the Void',
    fileName: 'ghosties_from_the_void.png',
    type: 'illustration'
  },
  {
    title: `Holdin' Delicious`,
    fileName: 'holdin_delicious.png',
    type: 'illustration'
  },
  {
    title: 'Lightyears Davis',
    fileName: 'lightyears_davis.png',
    type: 'illustration'
  },
  {
    title: 'More Mayo Please',
    fileName: 'more_mayo_please.png',
    type: 'illustration'
  },
  {
    title: 'Ohhhh ababy!',
    fileName: 'ohhhh_ababy.png',
    type: 'illustration'
  },
  {
    title: 'Professor',
    fileName: 'professor.png',
    type: 'illustration'
  },
  {
    title: 'Skull',
    fileName: 'skull.png',
    type: 'illustration'
  },
  {
    title: 'Snail Young',
    fileName: 'snail_young.png',
    type: 'illustration'
  },
  {
    title: 'Squad Ghouls',
    fileName: 'squad_ghouls.png',
    type: 'illustration'
  },
  {
    title: 'Stay Cool Out There',
    fileName: 'stay_cool_out_there.png',
    type: 'illustration'
  },
  {
    title: 'Sun and Flower',
    fileName: 'sun_and_flower.png',
    type: 'illustration'
  },
  {
    title: 'Swab the Duck',
    fileName: 'swab_the_duck.png',
    type: 'illustration'
  },
  {
    title: 'Unanticipated Flatulence',
    fileName: 'unanticipated_flatulence.png',
    type: 'illustration'
  },
  {
    title: 'Weirdos',
    fileName: 'weirdos.png',
    type: 'illustration'
  },
  {
    title: 'Grapes',
    fileName: 'grapes.png',
    type: 'illustration'
  },
  {
    title: 'Charles',
    fileName: 'charles_bradley.png',
    type: 'painting'
  },
  {
    title: 'Flamingus',
    fileName: 'flamingus.png',
    type: 'painting'
  },
  {
    title: 'Sir Ian',
    fileName: 'gandalf.png',
    type: 'painting'
  },
  {
    title: 'Jax',
    fileName: 'jax.png',
    type: 'painting'
  },
  {
    title: 'Molly',
    fileName: 'molly.png',
    type: 'painting'
  },
  {
    title: 'Player Piano',
    fileName: 'parlor.png',
    type: 'painting'
  },
  {
    title: 'Pokey',
    fileName: 'pokey.png',
    type: 'painting'
  },
  {
    title: '9 am',
    fileName: 'robot.png',
    type: 'painting'
  },
  {
    title: 'Salty Sea Dog',
    fileName: 'salty_sea_dog.png',
    type: 'painting'
  },
  {
    title: 'Troll',
    fileName: 'troll.png',
    type: 'painting'
  },
  {
    title: 'Wario',
    fileName: 'wario.png',
    type: 'painting'
  },
  {
    title: 'You Got This',
    fileName: 'you_got_this.png',
    type: 'painting'
  },
]