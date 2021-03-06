import React from "react";
import Image from "next/image";

import { GithubIconLink, LinkedinIconLink } from "./SocialIcons";

export default function Footer() {
    return (
      <footer>
        <div className="bg-white/70 grid gap-2 justify-center items-center py-8 border-t  mt-20">
          <div className="grid gap-2 grid-cols-2 justify-center items-center">
            <div className='grid items-center justify-center'>
              <GithubIconLink href='https://github.com/scottmcdonald1' />
            </div>
            <div className='grid items-center justify-center'>
              <LinkedinIconLink href='https://www.linkedin.com/in/scott-mcdonald-0303/' />
            </div>
          </div>
          <p className="font-monda text-center">© Scott McDonald 2022</p>
        </div>
      </footer>
    )
}

function RepoLink() {
  return (
    <a href="https://github.com/scottmcdonald1/dev-portfolio" target="blank">
      <div className="border border-vert59/50 p-2 mb-2 hover:rounded hover:border-vert59 cursor-pointer transition-all">
        <Image src="/logo.png" alt="Trash Can Doodle to GitHub Link" width={40} height={40} />
      </div>
    </a>
  )
}