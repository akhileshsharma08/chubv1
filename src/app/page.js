import Image from 'next/image'
export default function Home() {
  return (
    <>
    {/* {loading ? <div className='flex justify-center items-center'>
        <Triangle 
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
    /> 
    </div> : */}
        <div className="relative  pt-10">
            <div className="absolute inset-0 object-cover w-full h-full bg-yellow-500 "></div>
            <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <Image className="mr-2 lg:mr-4 mt-2 lg:mt-12 absolute right-0 top-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg2.svg" alt="libg" width={250} height={250} />
                    <Image className="ml-2 lg:ml-4 mb-2 lg:mb-12 absolute bottom-0 left-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg3.svg" alt="ribg" width={40} height={400}  />
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h1 className="max-w-lg mb-6 font-sans text-3xl md:xl sm:lg font-bold tracking-tight text-center text-black sm:text-6xl sm:leading-none">
                                Looking to hire for your next project? <br className="hidden md:block" />
                            </h1>
                            <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                                More than 200 million people in India migrate multiple times a year in search of better lives. Constructions Hub provides a platform of opportunities to workers, employers, landlords and middlemen through a digital marketplace.
                            </p>
                            <button className='flex w-3/5 items-center justify-center rounded-full border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-yellow-400 hover:shadow-lg hover:border-black md:py-4 md:px-10 md:text-lg'> Learn More </button>
                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12 p-2 m-2">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    {/* } */}


</>
  )
}
