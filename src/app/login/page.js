"use client"

import React, { useEffect, useState } from 'react'
import Link from "next/link"
import Image from 'next/image'
import { UseUserAuth } from '../../Context/UserAuthContextProvider'
import GoogleButton from 'react-google-button'
import { useRouter } from 'next/navigation';

const login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { LogIn } = UseUserAuth()
  const [error, setError] = useState("")
  const router = useRouter()
  const {  googleSignIn } = UseUserAuth()


  const HandleGoogleLogin = async () => {
   
   
      try {
        await googleSignIn()
        alert('success login')
        router.push('/dashboard')
      }
      catch (err) {
        console.log(err.message, "err in login")
        alert("err in login")
      }

    
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    try {
      await LogIn(email, password)
      router.push('/dashboard')
    } catch (err) {
      setError(err.message)
    }
  }

  //   useEffect(()=>{
  // HandleGoogleLogin ()
  //   },[])

  return (
    <div>

      <div className="min-h-screen flex justify-center items-center mt-10 bg-yellow-500 ">
        <div className="p-5  my-10 border-slate-200 rounded-md flex flex-col items-center space-y-3  shadow-xl bg-white" >
          <div className="py-5">
            <Image src="/img/logo1.png" width={100} height={100} alt='login image' />

          </div>
          <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
            <div className="-mt-1 mb-2 font-bod bg-white px-5 absolute">Log in</div>
          </div>
          <form >
            <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80 mb-2" onChange={(e) => setEmail(e.target.value)} type="email" placeholder=" Email Address" />
            <div className="flex flex-col space-y-1">
              <input className="p-3 border-[1px] border-slate-500 rounded-sm w-80 mb-2" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              {/* <p className="font-bold text-[#0070ba]">Forgot password?</p> */}
            </div>
            {error && <span className='text-red-500 mb-2 mx-2  content-center'>Wrong Email or Password</span>}

            <button type='submit' onClick={handleLogin} className="w-full bg-yellow-400 rounded-3xl mb-2 p-3 text-white font-bold transition duration-200 hover:bg-yellow-500">Log in</button>
            <div className="mydivbtn ">
              <GoogleButton className='w-full mygooglebtn mb-2' style={{ width: "100%" }}
                onClick={HandleGoogleLogin}
              />
            </div>
          </form>
          <div className="flex flex-col space-y-5 w-full">
            <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
              <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
            </div>
            <Link href={"/"} passHref>
              <button className="w-full border-yellow-400 hover:border-yellow-500 hover:border-[2px] border-[1px] rounded-3xl p-3 text-black font-bold transition duration-200">Sign Up</button>

            </Link>
          </div>
        </div>
      </div>

    </div>


  )
}

export default login