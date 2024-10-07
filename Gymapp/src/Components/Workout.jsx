import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExerciseCard from './ExerciseCard'

function Workout(props) {
  const {workout}=props
  return (
    <SectionWrapper header={"Welcome to "} title=
    {['The','Danger','o\'zone']}>
      <div className='flex flex-col gap-4'>
       {workout.map((exercise,i)=>{
        return(
          <ExerciseCard exercise={exercise} key={i} />
        )
       })}

      </div>
    </SectionWrapper>
  )
}

export default Workout