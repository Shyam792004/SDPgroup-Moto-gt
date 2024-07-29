import Meteors from '@/components/magicui/meteors'
import React from 'react'
import { Link } from 'react-router-dom'
import Particles from '@/components/magicui/particles';

const NotFound = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Particles className="absolute inset-0 z-0" />
      <div className="relative flex flex-col items-center justify-center h-full z-10">
        <Meteors number={30} />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Page Not found !
        </span>
        <Link to='/' className='text-primary font-bold mt-4'>Go to Home</Link>
      </div>
    </div>
  )
}

export default NotFound;
