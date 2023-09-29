"use client"


import React from 'react'
import NavVector from '../public/image/NavVector'

import ProfileCircle from '../public/image/ProfileCircle'
import Button from './Button'
import Link from "next/link";
import {usePathname} from "next/navigation"
const Nav = () => {
  const inactiveLink = 'text-gray-800 ';
  const activeLink = 'text-primary ';

  const pathname = usePathname();
  return (
   
    <nav className="flex px-6 justify-between py-2 md:mx-20 mx-6 shadow-gray-200 shadow-sm md:shadow-none   mt-4 rounded-3xl items-center">
      <img src="/image/bombaaLogo.png" className='md:w-auto md:h-auto w-30 h-8' alt="logo" />
      <ul className="md:flex bg-white shadow-md gap-12 px-14 py-4 rounded-3xl items-center font-poppinsLight text-[16px] hidden">
        <Link href={'/'} className={pathname === '/' ? activeLink : inactiveLink}>Accueil</Link>
        <Link href={'/blog'} className={pathname === '/blog' ? activeLink : inactiveLink}>Blog</Link>
        <Link href={'/faqs'} className={pathname === '/faqs' ? activeLink : inactiveLink}>FAQs</Link>  
        <Link href={'/parrainage'} className={pathname === '/parrainage' ? activeLink : inactiveLink}>Devenir parain</Link>
      </ul>
      <div className=" md:flex hidden items-center"> 
       <Button title='Télécharger'/>
        <ProfileCircle/>
      </div>
      <div className=" md:hidden flex"> 
        <p className='font-light'>Menu</p>
        <div  className='ml-2'>
          <NavVector/>
        </div>
      </div>
    </nav>

  )
}

export default Nav