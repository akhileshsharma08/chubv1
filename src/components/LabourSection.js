import React from 'react'
import LabourCard from './LabourCard'
import Image from 'next/image'
import Data from '../public/category.json'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import dynamic from "next/dynamic";



const LabourSection = () => {

  const items = Data.map((item) => {
    return (
      <div className="flex flex-wrap mb-5">
        <div className="p-2  w-full mx-2">
          <div key={item.id} className="h-full flex items-center border-gray-200 border p-2 rounded-lg">
            <div className="img rounded-full">
              <Image src={item.avatar} className="rounded-full" width={60} height={60} alt='lbour images' />
            </div>
            <div className="flex-grow">
              <h2 className="text-yellow-500 title-font font-medium ml-2"> {item.category}</h2>
            </div>
          </div>
        </div>
      </div>
    )
  })
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <>

      <div className='bg-black w-full h-auto text-white mb-15 '>
        <div className="container text-center mb-10 pt-10 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Categories You Need </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-yellow-500 inline-flex"></div>
          </div>
          <div className="category-card">
            <section className="text-white body-font">
              <div className="container px-5 pt-14 pb-24  flex">
              <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                items={items}
                autoPlay
              />
                 
              </div>
            </section>
          </div>
        </div>

        <LabourCard />


      </div>

    </>
  )
}

// export default LabourSection
export default dynamic(() => Promise.resolve(LabourSection), { ssr: false })


