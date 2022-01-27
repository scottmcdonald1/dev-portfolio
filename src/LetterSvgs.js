import React, {useState} from "react"

import * as path from "./svgPaths"

// Words
export function AboutTitle() {
  return (
    <>
      <Letter id="a" d={path.a} />
      <Letter id="b" d={path.b} />
      <Letter id="o" d={path.o} />
      <Letter id="u" d={path.u} />
      <Letter id="t" d={path.t} />
    </>
  )
}

export function WelcomeTitle() {
  return (
    <>
      <Letter id="w" d={path.w} />
      <Letter id="e" d={path.e} />
      <Letter id="l" d={path.l} />
      <Letter id="c" d={path.c} />
      <Letter id="o" d={path.o} />
      <Letter id="m" d={path.m} />
      <Letter id="e" d={path.e} />
    </>
  )
}

export function ProjectsTitle() {
  return (
    <>
      <Letter id="p" d={path.p} />
      <Letter id="r" d={path.r} />
      <Letter id="o" d={path.o} />
      <Letter id="j" d={path.j} />
      <Letter id="e" d={path.e} />
      <Letter id="c" d={path.c} />
      <Letter id="t" d={path.t} />
      <Letter id="s" d={path.s} />
    </>
  )
}

export function ArtworkTitle() {
  return (
    <>
      <Letter id="a" d={path.a} />
      <Letter id="r" d={path.r} />
      <Letter id="t" d={path.t} />
      <Letter id="w" d={path.w} />
      <Letter id="o" d={path.o} />
      <Letter id="r" d={path.r} />
      <Letter id="k" d={path.k} />
    </>
  )
}

function Letter({id, d}) {

  const [raisedLetter, setRaisedLetter] = useState(false);

  const letterClass = raisedLetter ? (
    "fill-white hover:fill-orangeClair stroke-black stroke-3 drop-shadow-medDark transition-all -translate-y-2"
  ) : (
    "fill-white hover:fill-orangeClair stroke-black stroke-3 drop-shadow-smDark transition-all translate-y-0"
  )

  function jumpUp() { setRaisedLetter(true); }
  function jumpDown() { setRaisedLetter(false); }

  return (
    <svg xmlns="http://www.w3.org/2000/svg"
      width="80" 
      height="80"
      viewBox="0 0 275 275"
      className={letterClass}
      onMouseOver={jumpUp}
      onMouseOut={jumpDown}
      onTouchStart={jumpUp}
      onTouchEnd={jumpDown}
    >
      <path id={id} d={d} />
    </svg>
  )

}
