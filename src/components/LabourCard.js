import React from "react"
import Image from "next/image"
import Data from "../public/category.json"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import dynamic from "next/dynamic";



const LabourCard = () => {

  const items = Data.map((mydata) => {
    return (
      <div className=" myccard flex flex-wrap justify-between  items-center w-full " key={mydata.id} >
        <div className="  p-2  my-4 items-center h-30 md:w-48 overflow-hidden	">
          <div  className="h-full flex items-center border-gray-200 border p-2 rounded-lg">
            <div className="imgage rounded-full">
              <Image src={mydata.avatar} className="rounded-full" width={60} height={60} alt="avatar" />
            </div>
            <div className="flex-grow">
              <h2 className="text-yellow-500 title-font font-medium ml-2"> {mydata.name}</h2>
              <p className="text-white ml-2">{mydata.designation}</p>
              <p className="text-white ml-2">{mydata.exprience} &nbsp;Yrs Exp</p>
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
    <div className="text-white">

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="text-center mb-50">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-2">Top Workers</h1>
            <div className="flex mt-6 mb-10 justify-center">
              <div className="w-24 h-1 rounded-full bg-yellow-500 inline-flex"></div>
            </div>
          </div>

          <section className=" container text-white body-font">
            <div className="box  ml-5">
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


          <div className="flex flex-wrap sm:-m-4 -mx-4 my-10 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                <p className="leading-relaxed text-white">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                <p className="leading-relaxed text-white">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-yellow-500 mb-5 flex-shrink-0">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-yellow-500 text-lg title-font font-medium mb-3">Neptune</h2>
                <p className="leading-relaxed text-white">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                <a className="mt-3 text-yellow-500 inline-flex items-center">Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

// export default LabourCard
export default dynamic(() => Promise.resolve(LabourCard), { ssr: false })