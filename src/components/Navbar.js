"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { UseUserAuth } from '../Context/UserAuthContextProvider'
import Logo from '../../public/img/logo.png'

import {FaUserCircle} from 'react-icons/fa'
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const {user} = UseUserAuth()

  const HandleNav = () => {
    setNav(!nav)
  }
  return (
   
      <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className=' m-auto flex justify-between items-center p-4 text-yellow-500 bg-black ' >
          <Link href='/' >
            <Image src={Logo} width={180} height={45} className='hover:cursor-pointer' alt='main logo'/>
          </Link>
          <ul className='hidden sm:flex '>
            <li className='p-4 rounded-md text-yellow-500 hover:text-white font-semibold'>
              <Link href='/'>Home</Link>
            </li>
            <li className='p-4 rounded-lg text-yellow-500 hover:text-white font-semibold'>
              <Link href='/services'>Services</Link>
            </li>
            <li className='p-4 rounded-lg text-yellow-500 hover:text-white font-semibold'>
              <Link href='/about'>About</Link>
            </li>
            <li className='p-4 rounded-lg text-yellow-500 hover:text-white font-semibold'>
              <Link href='/contact'>Contact</Link>
            </li>
            {/* {user.displayName ? <li className=' p-4 rounded-lg text-yellow-500 bg-yellow-500 text-white hover:text-white hover:bg-yellow-400 font-semibold'>
              <Link href='/login'>Log in</Link>
            </li>:<li className=' p-4 rounded-lg text-yellow-500 bg-yellow-500 text-white hover:text-white hover:bg-yellow-400 font-semibold'>
              <Link href='/login'>Log Out</Link>
            </li> } */}
         {!user?<li className=' p-4 rounded-lg  bg-yellow-500 text-white hover:text-white hover:bg-yellow-400 font-semibold'>
              <Link href='/login'>Log in</Link>
            </li>:<li className=' hover:cursor-pointer  rounded-lg text-yellow-500 flex justify-center items-center   hover:text-white  font-bold'>
              <Link href='/dashboard' className='text-4xl p-2'><FaUserCircle/></Link>
            </li> }   
          </ul>


          {/* Mobile Button */}
          <div onClick={HandleNav} className='block sm:hidden z-10'>
            {nav ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
          </div>
          {/* Mobile Menu */}
          <div className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }>
            <ul >
              <li onClick={HandleNav} className=' text-4xl text-white hover:text-yellow-500 p-2 '>
                <Link href='/'>Home </Link>
              </li>
              <li onClick={HandleNav} className=' text-4xl text-white hover:text-yellow-500 p-2 '>
                <Link href='/services'>Services</Link>
              </li>
              <li onClick={HandleNav} className=' text-4xl text-white hover:text-yellow-500 p-2 '>
                <Link href='/about'>About</Link>
              </li>
              <li onClick={HandleNav} className=' text-4xl text-white hover:text-yellow-500 p-2 '>
                <Link href='/contact'>Contact</Link>
              </li>

            {!user?<li onClick={HandleNav} className=' text-4xl text-white hover:text-yellow-500 p-2 '>
                <Link href='/login'>Log in</Link>
              </li>:<li className='  rounded-lg text-yellow-500 flex justify-center items-center   hover:text-white  font-bold'>
              <Link href='/dashboard' className='text-4xl w-20 h-20'><FaUserCircle/></Link>
            </li>}  
            </ul>
          </div>
        </div>

      </div>

   
  )
}

export default Navbar