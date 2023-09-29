import React from 'react'
import FacebookIcone from '../public/image/FacebookIcone'
import Instagram from '../public/image/Instagram'
import Twitter from '../public/image/Twitter'
import TiktokIcone from '../public/image/TiktokIcone'
import LinkedInIcone from '../public/image/LinkedInIcone'

const SocialMadiaSection = () => {
    return (
        <>
            <div className=' justify-center  items-center  gap-32 hidden md:flex '>
                <div className='flex bg-primary hover:bg-secondary rounded-full w-[150px] h-[150px] justify-center items-center'>
                    <FacebookIcone size={80} />
                </div>
                <div className='flex bg-primary hover:bg-secondary rounded-full w-[150px] h-[150px] justify-center items-center'>
                    <Instagram size={80} />
                </div>
                <div className='flex bg-primary hover:bg-secondary rounded-full w-[150px] h-[150px] justify-center items-center'>
                    <Twitter size={80} />
                </div>
                <div className='flex bg-primary hover:bg-secondary rounded-full w-[150px] h-[150px] justify-center items-center'>
                    <TiktokIcone size={80} />
                </div>
                <div className='flex bg-primary hover:bg-secondary rounded-full w-[150px] h-[150px] justify-center items-center'>
                    <LinkedInIcone size={80} />
                </div>
            </div>

            <div className=' justify-center items-center  mx-2 gap-2   flex md:hidden '>
                <div className="w-1/6 relative " style={{ paddingBottom: '17%' }}>
                    <div className="absolute inset-0 bg-primary  hover:bg-secondary rounded-full flex items-center justify-center">
                        <FacebookIcone size={40} />
                    </div>
                </div>
                <div className="w-1/6 relative" style={{ paddingBottom: '17%' }}>
                    <div className="absolute inset-0 bg-primary  hover:bg-secondary rounded-full flex items-center justify-center">
                        <Instagram size={40} />

                    </div>
                </div><div className="w-1/6 relative" style={{ paddingBottom: '17%' }}>
                    <div className="absolute inset-0 bg-primary  hover:bg-secondary rounded-full flex items-center justify-center">
                        <Twitter size={40} />
                    </div>
                </div><div className="w-1/6 relative" style={{ paddingBottom: '17%' }}>
                    <div className="absolute inset-0 bg-primary  hover:bg-secondary rounded-full flex items-center justify-center">
                        <TiktokIcone size={40} />
                    </div>
                </div><div className="w-1/6 relative" style={{ paddingBottom: '17%' }}>
                    <div className="absolute inset-0 bg-primary  hover:bg-secondary rounded-full flex items-center justify-center">
                        <LinkedInIcone size={40} />
                    </div>
                </div>
            </div>
        </>



    )
}

export default SocialMadiaSection