import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'

function Header(props){
  const {index,title,description}=props
  return(
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center gap-2'>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
        <h4 className='text-xl sm:text-2xl md:text-3xl '>{title}</h4>
      </div>
      <p className='test-sm sm:text-base x-auto'>{description}</p>
    </div>
  )
}

function Generator() {
  return (
    <SectionWrapper header={"generate your workout"} title=
    {['It\'s','Huge','o\'clock']}>
      <Header index={'01'} title={"Warm Up"} description={"5 minutes to get the blood flowing"}/>
      
    </SectionWrapper>
  )
}

export default Generator