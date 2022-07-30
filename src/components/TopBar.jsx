import React from 'react'
import logo from '../img/logo.png'

function TopBar() {
    const handleConnect = () => {
        console.log('Connect me')
    }


  return (
    <div className='flex justify-between w-full items-center px-28 mt-10'>
        <img src={logo} alt="Kapybara Logo" />
        <button onClick={handleConnect} className='px-6 py-2 bg-neutral-700 rounded-md text-xl font-bold'>Connect</button>
    </div>
  )
}

export default TopBar