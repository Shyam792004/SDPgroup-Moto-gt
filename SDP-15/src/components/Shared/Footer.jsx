// import { Facebook, Twitter } from 'lucide-react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div className=" w-full h-[8vh] flex flex-row justify-center items-center border-t-2 border-primary/50">
//       <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg"> © iamneo.ai 2024</div>
//       <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8 '>
//         <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
//           <Facebook className='h-6 w-6' />
//         </a>
//         <a href='#' target='_blank' className='h-8 w-8 rounded-md text-primary hover:bg-primary/50 hover:text-background flex justify-center items-center'>
//           <Twitter className='h-6 w-6' />
//         </a>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
    
  <footer className="flex justify-between items-center p-8 bg-transparent fixed bottom-0 left-0 right-0 z-20 text-2xl">
    <span>&copy; Moto-GenZ</span>
    <div className="flex space-x-8">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-4xl" /></a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-4xl" /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-4xl" /></a>
    </div>
  </footer>
);

export default Footer;
