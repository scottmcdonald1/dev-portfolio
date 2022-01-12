import React from "react";
import Image from "next/image";

export default function Footer() {
    return (
      <footer>
        <div className="bg-white flex flex-col flex-1 justify-center items-center py-8 border-t border-ombreNaturelle31/50">
          <GitHubLink />
          <p className="font-abel text-orangeVif">Scott McDonald 2022</p>
        </div>
      </footer>
    )
}

function GitHubLink() {
  return (
    <a href="https://github.com/scottmcdonald1/dev-portfolio" target="blank">
      <div className="border border-vert59/50 p-2 mb-2 hover:rounded hover:border-vert59 cursor-pointer transition-all">
        <Image src="/logo.png" alt="Trash Can Doodle to GitHub Link" width={40} height={40} />
      </div>
    </a>
  )
}