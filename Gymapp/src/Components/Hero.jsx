import React from 'react'

function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
        <div className='flex flex-col gap-4'>
    <p>IT'S TIME TO GET</p>
    <h1 className='uppercase text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl'>work<span className='text-blue-400 font-medium'>extreme</span></h1>
    </div>
    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl'>Lorem ipsum dolor sit amet consectetur, 
        adipisicing elit. Omnis <span className='text-blue-400 font-medium'>reprehenderit</span> similique 
        provident. Dignissimos totam nesciunt sunt natus 
        culpa modi quaerat sed <span className='text-blue-400 font-medium'>perferendis</span> impedit, aut 
        mollitia dolores cum atque 
        vel praesentium.</p>

        <button className='px-8 py-3 bg-black-400 text-white uppercase font-semibold rounded-lg blueShadow duration-300'><p>Accept & Begin</p></button>
  </div>
  )
}

export default Hero