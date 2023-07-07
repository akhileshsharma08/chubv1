import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/img/logo1.png'

const Footer = () => {
  return (
    <>
            <div className=" bg-black pb-8">
                <div className="mx-auto container pt-10 lg:pt-22 flex flex-col items-center justify-center">
                    <div>
                    <Link  href={"/"}>
                    <Image src={Logo} width={100} height={100} alt='constructionshub footer logo'/>
            </Link>

                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-bold text-white">Build. Review. Ship.</h1>
                        {/* <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Download Now</h2>
                            <h2 className="cursor-pointer">License</h2>
                        </div> */}
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className="text-slate-50 text-center  md:mr-6 cursor-pointer pt-4 hover:text-yellow-400 ">About</li>
                                <li className="text-slate-50 text-center  md:mr-6 cursor-pointer pt-4 lg:hover:text-yellow-400 ">Features</li>
                                <li className="text-slate-50 text-center  md:mr-6 cursor-pointer pt-4 lg:hover:text-yellow-400 ">Pricing</li>
                                <li className="text-slate-50 text-center  md:mr-6 cursor-pointer pt-4 lg:hover:text-yellow-400 ">Careers</li>
                                <li className="text-slate-50 text-center  md:mr-6 cursor-pointer pt-4 lg:hover:text-yellow-400 ">Help</li>
                                <li className="text-slate-50 text-center  pt-4   hover:text-yellow-400 cursor-pointer">Privacy Policy</li>
                            </ul>
                        </div> text-center
                        <div className="text-sm text-slate-50 mb-10 f-f-l">
                            <p> © 2022 TheConstructorsHub. All rights reserved</p>
                        </div>
                    </div>
                    
                </div>
            </div>

    </>
  )
}

export default Footer