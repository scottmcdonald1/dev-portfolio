import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>


      <div className='w-screen grid gap-2 justify-center items-center px-2 sm:px-8 pt-32'>

        <div className="grid p-2 mx-2 border-b border-orangeClair ">
          <h1 className='font-bowlbyOneSC text-5xl drop-shadow-lg'>Welcome</h1>
        </div>

        <div className='font-monda w-full grid gap-3 items-center py-4'>

          <div className='bg-white/70 w-full grid gap-3 border border-ombreNaturelle31 rounded shadow-sharp px-6 py-4'>

            <p>
              👋 Hello! Welcome to my portfolio page. My name is Scott McDonald, and I have been working incredibly hard towards becoming a web developer, and I have created this page to showcase the skills that I have been developing over the course of the past two years.
            </p>

            <p>
              This site was made in React using a Next.js framework, using Tailwind.CSS for styling, and is currently hosted on Vercel. I would like to note that this site is currently (and may forever be) in development, as I intend to use it as a sort of creative playground for new found skills and design concepts -- so you may see some changes should you revisit. 
            </p>

            <p>
              Please check out the about page for a brief summary of my journey in coding thus far, and be sure to pull up the project page for examples of my work. I am an artist by hobby, so I've included an artwork page with a few examples of my work.
            </p>

          </div>

        </div>

      </div>

    </>
  )
}