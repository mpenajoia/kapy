import React from 'react'
import Progress from './Progress'
import Status from './Status'

function Content() {
  return (
    <div className='w-[1100px] flex justify-evenly'>
        <Status /> 
        <Progress />
    </div>
  )
}

export default Content