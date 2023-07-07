"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GoogleButton from 'react-google-button'
import { useRouter } from 'next/navigation'
import { UseUserAuth } from '@/Context/UserAuthContextProvider'



const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { SignUp, user } = UseUserAuth()
    const {  googleSignIn } = UseUserAuth()
    const [loading,setLoading] = useState(false)

    const router = useRouter()

    const GoogleSubmit = async () => {
        // e.preventDefault()
        try {
            await googleSignIn()
            setLoading(true)
            router.push('/dashboard')
            
        }
        catch (err) {
            console.log(err.message, "err in signup");
            setError(err.message)
        }


    };



    const HandleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            setLoading(true)
            await SignUp(email, password)
            router.push('/login')
            setLoading(false)
        } catch (err) {
            setError(err.message)
        }

    }

    if(loading ){
        return <h1>loading...</h1>
    }
    return (
        
        <>
            <div className="min-h-screen flex justify-center items-center mt-10 bg-yellow-500 ">
                <div className="p-5  rounded-md flex flex-col items-center space-y-3  shadow-xl bg-white">
                    <div className="py-5" >
                        <Image src="/img/logo1.png" width={100} height={100} alt='registration logo' />
                    </div>
                    <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
            <div className="-mt-1 mb-2 font-bod bg-white px-5 absolute">Register</div>
          </div>
                    <form onSubmit={HandleSubmit}>
                        <input className="p-3 border-[1px]  mb-2 border-slate-500 rounded-sm w-80" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="  Email" />
                        <div className="flex flex-col space-y-1">
                            <input className="p-3 border-[1px] mb-2 border-slate-500 rounded-sm w-80" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                            {/* <p className="font-bold text-[#0070ba]">Forgot password?</p> */}
                        </div>
                        {error && <span className='text-red-500 mb-2 mx-2  content-center'>Wrong Email or Password</span>}

                        <button type='submit' className="w-full bg-yellow-400 rounded-3xl mb-2 p-3 text-white font-bold transition duration-200 hover:bg-yellow-500">Sign Up</button>

                        <div className="mydivbtn ">
                            <GoogleButton className='w-full mygooglebtn mb-2' style={{ width: "100%" }}
                                onClick={GoogleSubmit}
                            />
                        </div>
                    </form>
                    <div className="flex flex-col space-y-5 w-full">
                        <div className="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
                            <div className="-mt-1 font-bod bg-white px-5 absolute">Or</div>
                        </div>
                        <Link href={"/login"}>
                            <button className="w-full border-yellow-400 hover:border-yellow-500 hover:border-[2px] border-[1px] rounded-3xl p-3 text-black font-bold transition duration-200">Log in</button>

                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
