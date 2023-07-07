import React from 'react'
import Image from 'next/image'


const WHyUs = () => {
    return (
        <>
            <div className="whyUsSection bg-black h-100 mb-5 py-5">
               
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2> */}
                            <div className='text-white lg:text-3xl font-bold md:text-lg'>
                            <h1>Why you should hire
                                your construction worker
                                from <p className='text-yellow-500'>Construction Hub</p> </h1>
                        </div>
                            {/* <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1> */}
                            {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> */}
                        </div>
                        <div className="flex flex-wrap">
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-yellow-300 border-opacity-60">
                                {/* <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2> */}
                                <h2 className="text-yellow-500 text-lg title-font font-medium mb-1">Verified Profiles</h2>
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-500 text-black mb-1 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <p className="leading-relaxed text-white mb-4">100% genuine workers with verified phone numbers.</p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-yellow-300 border-opacity-60">
                                {/* <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2> */}
                                <h2 className="text-yellow-500 text-lg title-font font-medium mb-1">Eager to Work Heroes</h2>
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-500 text-black mb-1 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                        </div>
                        <p className='text-white'>Largest pool of ready to work heroes available</p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-yellow-300 border-opacity-60">
                                {/* <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2> */}
                                <h2 className="text-yellow-500 text-lg title-font font-medium mb-1">Skilled & Trained Heroes</h2>
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-500 text-black mb-1 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <p className='text-white'>Heroes go through strict skill evaluation process & scored</p>
                            </div>
                            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-yellow-300 border-opacity-60">
                                {/* <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2> */}
                                <h2 className="text-yellow-500 text-lg title-font font-medium mb-1">Hassle Free Hiring Process</h2>
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-500 text-black mb-1 flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-8 h-8" viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <p className='text-white'>Get phone numbers of heroes as soon as your booking goes live</p>
                            </div>
                        </div>
                        <button className='flex w-2/5 mt-10 mx-auto items-center justify-center rounded-full border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-white hover:bg-yellow-500 hover:border-black '> Learn More </button>
                        
                        {/* <button className=" w-2/5 flex mx-auto mt-16 text-white rounded-full border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium border-0 py-2 px-8 hover:bg-yellow-500 rounded text-lg">Learn More</button> */}
                    </div>
                </section>
            </div>
        </>
    )
}

export default WHyUs