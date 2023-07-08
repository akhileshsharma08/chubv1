import React from 'react'
import Image from 'next/image'

const about = () => {
  return (
    <>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="mainheading my-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-black tagline">A mission to enrich livelihoods</h1>
            <div className="container">
            <p className='text-center text-lg'>Constructions HUB is on a mission to transform the unorganized labor sector in emerging markets like India, and to bring greater transparency and data-driven analytics to the ecosystem - enriching the livelihoods of millions of low-income workers in the process.</p>
            </div>
          </div>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points=" 8,5 8,1 16,1 16,5"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="9,15 1,15 1,5 23,5 23,15 15,15"
                strokeLinejoin="round"
              />
              <polyline
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                points="22,18 22,23 2,23 2,18"
                strokeLinejoin="round"
              />
              <rect
                x="9"
                y="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                width="6"
                height="4"
                strokeLinejoin="round"
              />
            </svg>
          </div>
         


          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Hire Experienced worker
              <br className="hidden md:block" />
              {/* your next{' '} */}
              <span className="inline-block text-deep-purple-accent-400">
                To Build Your Dream Project
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              we have varities of manpower for differnt fields like construction, plumber, electrition , roof treatment , tiles works and many more . we provide experienced workers for your dream project. we are one of the most reputed in Agra. we are currently active in MES and CPWD
            </p>
          </div>
      
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <Image
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=" construction hub about image1 "
            />
            <Image
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="construction hub about image2"
            />
          </div>
          <div className="px-3">
            <Image
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="construction hub about image3"
            />
          </div>
        </div>
      </div>
    </div>

    {/* second section -------------- */}
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" alt="hero" src="/img/face.jpg" width={720} height={600}/>
    </div>
    {/* <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
     
    </div> */}
    <div className="max-w-xl mb-6 ml-10">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              HOW WE RISE ?  
              <br className="hidden md:block" />
              {/* your next{' '} */}
              <span className="inline-block text-deep-purple-accent-400">
                
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            During COVID-19 Crises we faced many problems for man power  and workers also faced many hard problems during that crises. mostly workers are the migrants.
            to solve that problem we feel to create a platform which solve this problems in a mean time.
            </p>
          </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Hire Experienced worker
              <br className="hidden md:block" />
              {/* your next{' '} */}
              <span className="inline-block text-deep-purple-accent-400">
                To Build Your Dream Project
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              we are one of the most reputed in Agra. we are currently active in MES and CPWD
            </p>
          </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image className="object-cover object-center rounded" alt="hero" src="/img/face.jpg" width={720} height={600}/>
    </div>
  </div>
</section>
    </>
  )
}

export default about


