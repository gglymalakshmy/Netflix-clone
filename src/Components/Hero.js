import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-10 mt-20 h-screen'>

      <h4 className='text-xl text-white'>Welcome Back To Netflix</h4>
      <h3 className='text-4xl font-black text-white text-center'>Unlimited movied,Tv Shows and more</h3>

      <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[190px] md:max-w-[300px]">
        <div class="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
          <video autoPlay loop muted controls>
            <source type='video/mp4' src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
          </video>


        </div>
      </div>
      <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[30px] md:max-w-[322px]"></div>
      <div class="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[40px] md:max-w-[50px]"></div>

    </div>
  )
}

export default Hero