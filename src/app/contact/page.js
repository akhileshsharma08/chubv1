
"use client"

import React, { useState } from 'react'


const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const contactData = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        console.log(name, phone, email, message, "contact data")
    }

    return (
        <>
            <section className="text-gray-600  body-font relative pt-10">
           

                <div className="py-4 lg:py-8  relative">
                    <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" />
                    <div className="xl:mx-auto xl:container  relative ">
                        <div className="flex flex-wrap xl:mx-auto xl:container">
                            <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0  ">
                                <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />
                                <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                                    <div className="w-full 2xl:pl-48 xl:pt-1">
                                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-yellow-500">We’re Here</h1>
                                        <div className="w-full md:w-10/12 mt-3">
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                                            <div className="mt-4 md:mt-8">
                                                <h2 className="text-sm md:text-base text-yellow-500 font-semibold">Address</h2>
                                                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">Office #13, NSTP, Laxmi palace, Agra, Uttar Pradesh,India</h2>
                                            </div>
                                            <div className="mt-4 md:mt-8">
                                                <h2 className="text-sm md:text-base text-yellow-500 font-semibold">Contact</h2>
                                                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+91 8865029818  (Phone)</h2>
                                                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+91  8865029818 (Cell)</h2>
                                            </div>
                                            <div className="mt-4 md:mt-8">
                                                <h2 className="text-sm md:text-base text-yellow-500 font-semibold">Email</h2>
                                                <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">help@construstionhub.com</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                                <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-black">Let’s Talk</h1>
                                    <div className="w-full 2xl:w-8/12 mt-3">
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">For enquiries, please email us using the form below</h2>
                                        <div className="mt-4 md:mt-8">
                                            <p className="text-gray-800 text-base font-medium">Name</p>
                                            <input value={name} onChange={(e) => setName(e.target.value)} className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="Akhilesh sharma" />
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <p className="text-gray-800 text-base font-medium">Phone</p>
                                            <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none border-black py-5 pl-4 text-gray-800" type="text" placeholder="88650298XX" />
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <p className="text-gray-800 text-base font-medium">Email Address</p>
                                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-yellow-500 focus:border-yellow-500 focus:outline-none border-black py-5 pl-4 text-gray-800" type="email" placeholder="example@mail.com" />
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <p className="text-gray-800 text-base font-medium">Message</p>
                                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-yellow-500 focus:border-yellow-500 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" type="text" placeholder="Write us something..." defaultValue={""} />
                                        </div>
                                        <div className="py-5">
                                            <button onClick={contactData} className="py-3 md:py-5 px-5 md:px-10 bg-yellow-400 hover:bg-yellow-500 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider font-semibold">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Contact