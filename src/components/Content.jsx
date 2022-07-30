import React from 'react'
import Details from './Details'
import Progress from './Progress'
import Status from './Status'

function Content() {
  return (
    <div className='w-[1100px] flex justify-evenly'>
        <Status /> 
        <Progress />
        <Details />
    </div>
  )
}

export default Content