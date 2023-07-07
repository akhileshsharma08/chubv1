"use client"

import React from 'react'

const Temp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, SetErr] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault();
        // SetErr("")
        // console.log(e.target.value, "e")

        // try {
        //     await SignUp(email, password)
        //     // router.push('/login')
        // }
        // catch (err) {
        //     SetErr(err.message)
        //     console.log(err)
        // }

    }

    return (
        <>
            <div className=" flex justify-center items-center  ">
                <div className="p-5  rounded-md flex flex-col items-center space-y-3  shadow-xl bg-white">
                    <div className="pt-2 pb-2" >
                        <Image src="/img/logo1.png" width={100} height={100} />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input className="p-3 border-[1px]  mb-2 border-slate-500 rounded-sm w-80" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="  Email" />
                        <div className="flex flex-col space-y-1">
                            <input className="p-3 border-[1px] mb-2 border-slate-500 rounded-sm w-80" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                            {/* <p className="font-bold text-[#0070ba]">Forgot password?</p> */}
                        </div>
                        <button className="w-full bg-yellow-400 rounded-3xl mb-2 p-3 text-white font-bold transition duration-200 hover:bg-yellow-500">Sign Up</button>
                        <div className="mydivbtn ">
                            <GoogleButton className='w-full mygooglebtn mb-2' style={{ width: "100%" }}
                                onClick={() => { console.log('Google button clicked') }}
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
export default Temp
