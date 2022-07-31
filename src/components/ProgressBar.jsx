import React from 'react'

function ProgressBar( {percent} ) {


  return (
    <div className='w-full bg-neutral-500 rounded-full h-[45px] p-1'>
        <div className={`w-[${percent + '%'}] h-full bg-gradient-to-r to-[#E176FC] via-[#F17E6F] from-[#EFBC71] text-black font-bold text-lg rounded-full flex items-center justify-center`}>{percent}%</div>
    </div>
  )
}

export default ProgressBar