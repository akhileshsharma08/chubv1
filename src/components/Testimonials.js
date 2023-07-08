import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {BsFillArrowRightSquareFill,BsFillArrowLeftSquareFill} from 'react-icons/bs'
import {FaQuoteRight} from 'react-icons/fa'
import FeedbackData from '../public/feedback.json'
import Image from 'next/image';

const Testimonials = () => {
    // console.log(FeedbackData,"fdbackkkk")
  return (
    <div>
            <div className="flex items-center justify-between h-full w-full absolute z-0">
                <div className="w-1/3 bg-white h-full" />
                <div className="w-4/6 ml-16 bg-gray-100 h-full" />
            </div>
            <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-0">
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={10}>
                    <h1 className="text-5xl font-bold xl:block hidden leading-tight text-gray-800">
                        What our Clients are
                        <br />
                        saying
                    </h1>
                    <h1 className="text-5xl font-bold xl:hidden block leading-tight lg:leading-10 text-black">What our Clients are saying</h1>
                    <Slider>
                        {FeedbackData.map((data,id)=>{
                            return(
                              <Slide index={data.id} tabIndex="null" key={data.id}>
                            <div className="flex">
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <Image src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="image of profile" className="w-full h-full flex-shrink-0 object-fit object-cover shadow-lg rounded" />
                                        <div className="w-32 md:flex hidden items-center justify-center absolute top-0 -mr-16 -mt-14 right-0 h-32 bg-black rounded-full">
                                            <FaQuoteRight className='h-55 w-55 text-yellow-500'/>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between">
                                        <div>
                                            <h1 className="text-2xl font-semibold xl:leading-loose text-gray-800">{data.subject}</h1>
                                            <p className="text-base font-medium leading-6 mt-4 text-gray-600">{data.message}</p>
                                        </div>
                                        <div className="md:mt-0 mt-8">
                                            <p className="text-base font-medium leading-4 text-gray-800">{data.name}</p>
                                            <p className="text-base leading-4 mt-2 mb-4 text-gray-600">{data.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>  
                            )
                        })}
                        
                       
                    </Slider>
                    <div className="flex items-center mt-8">
                        <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                        <BsFillArrowLeftSquareFill className='text-gray-500 bg-yellow-500 h-6 w-6' />
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="next slide" className="cursor-pointer ml-2">
                            <BsFillArrowRightSquareFill className='text-black bg-yellow-500 h-10 w-10'/>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
  )
}

export default Testimonials