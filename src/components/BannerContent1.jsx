import React, { Component } from 'react'

class BannerContent1 extends Component {
    render() {
        return (
            <div className='flex justify-between px-4 pb-5'>
                <div className={'max-w-md pt-36'}>
                    <div>
                        <h1 className='text-6xl text-purple-800'>Enjoy!</h1>
                    </div>
                    <div className='pt-4'>
                        <p className='text-white'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Mi mauris arcu aenean in mauris elementum sed non. In sapien enim
                         asdffse dfsdfw awerr sdfr dsfsef awdfsfs fweaaf ksdf.
                        </p>
                    </div>
                    <div className='flex pt-6 '>
                        <input className='pl-7 rounded-3xl ' type="text" placeholder='Search your drink'/>
                        <div className='h-10 w-10 bg-purple-800 rounded-full ml-3'></div>
                    </div>
                </div>
                <div className='grid grid-cols-1 grid-rows-2 gap-4 '>
                    <div className=''>
                        <ul className='grid grid-cols-1 grid-rows-3 gap-4'>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='grid grid-cols-1 grid-rows-5 gap-2'>
                            <li className='h-2 w-2 bg-white rounded-full'></li>
                            <li className='h-2 w-2 bg-gray-200 rounded-full'></li>
                            <li className='h-2 w-2 bg-gray-200 rounded-full'></li>
                            <li className='h-2 w-2 bg-gray-200 rounded-full'></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default BannerContent1
