import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between h-20 items-center px-5 '>
            <div className='grid grid-cols-2 gap-1 cursor-pointer h-4'>
                <div className='h-2 w-2 bg-white rounded-full'></div>
                <div className='h-2 w-2 bg-white rounded-full'></div>
                <div className='h-2 w-2 bg-white rounded-full'></div>
                <div className='h-2 w-2 bg-white rounded-full'></div>
            </div>
            <div className='hidden md:block '>
                <ul className='grid grid-cols-4 col-span-3 text-white font-Visby Round CF text-xl leading-8'>
                    <li >Home</li>
                    <li className='pr-8'>Smoothies</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='md:hidden'>
                <div className='h-0.5 w-4 bg-white mb-0.5'></div>
                <div className='h-0.5 w-4 bg-white mb-0.5'></div>
                <div className='h-0.5 w-4 mb-1 bg-white'></div>
            </div>
            <div className='hidden md:block'></div>
        </div>
    )
}

export default Navbar
