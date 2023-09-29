"use client";


import React, { useState, useEffect } from 'react'
import Apple from '../public/image/Apple'
import GooglePlay from '../public/image/GooglePlay'
import Vector1 from '../public/image/Vector1'
import Vector11 from '../public/image/Vector11'
import Store from './Store'

const Bannier = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);

    useEffect(() => {
        // After the component mounts, set isVisible to true to trigger the animation
        setIsVisible(true);

         // Mettez à jour isVisible après 5 secondes
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10000);
        const timer1 = setTimeout(() => {
            setIsVisible1(true);
        }, 1000);
     
  
      return () => {clearTimeout(timer); clearTimeout(timer1)};
      }, []);
    return (
        <div className=' grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-8  bg-lightprimary mx-4 pb-20 sm:max-sm:pb-20  justify-center items-center md:mx-24 mt-8 rounded-3xl md:py-20  md:px-36    '>
                <div className={`md:order-1  order-2 -mt-20 md:mt-0 flex-col px-12 md:px-0    transition-transform  duration-[3000ms]  transform ${isVisible ? 'translate-y-0' : ' translate-y-32'}`} >
                    <p className='font-octarine md:max-w-md   md:text-5xl text-3xl text-left  text-darkprimary md:leading-[80px] leading-[40px]'>
                        Avec Bombaa, le vieux demeure toujours neuf
                    </p>
                    
            
                    <div className='flex   items-center gap-2   mt-4 md:mt-10  '>
                        <div className='md:gap-4 gap-2'>
                            <Store logo={<GooglePlay />} name="Play Store" />
                        </div>
                        <div className=' '>
                            <Store logo={<Apple />} name="App Store" />
                        </div>
                    </div>
                </div>
           

            <div className={`md:order-2  order-1 md:scale-100 scale-[.55]  -mt-20 md:mt-0   flex justify-center  transition-transform   duration-[1000ms] transform ${isVisible ? ' translate-y-0' : ' translate-y-8'}`}>
                <div className=' transition-transform transform  delay-3000'>

                    <div className='relative'>

                        <div className='absolue' >
                            <img
                                src='/image/headerImage0.png'
                                alt="Image 1"
                                className=' '
                            />
                        </div>
                        <div className={`absolute -z-10 top-16 left-32 ml-2 duration-[2000ms]   transform ${isVisible1 ? 'opacity-100  translate-x-0' : ' -translate-x-full opacity-0'}`}>
                            <Vector1 />
                        </div>
                        <div className={`absolute top-36 -z-10 mt-32 -left-[106px] duration-[2000ms]  transform ${isVisible1 ? 'opacity-100   -translate-x-0' : '  translate-x-full opacity-0'}`} >
                            <Vector11 />
                        </div>
                    </div>





                </div>


{ isVisible &&
 <>              <div className={`      bg-white absolute   shadow-2xl shadow-gray-300 mt-24 -ml-2 px-6 py-6   rounded-3xl top-0 -translate-x-full `}>
                    <img
                        src='/image/headerImage1.png'
                        alt="Image 2"
                        className=''
                    />
                </div>
                <div className=' bg-white shadow-2xl shadow-gray-300   px-6 py-6  rounded-3xl absolute transition-transform transform -bottom-28 ml-8 translate-x-full -translate-y-full  delay-8000'>
                    <img
                        src='/image/headerImage2.png'
                        alt="Image 2"
                        className=""
                    />
                </div>
                <div className='bg-white shadow-2xl shadow-gray-300   px-4 py-2  rounded-lg   absolute transition-transform transform ml-6 translate-x-full top-60 mt-8 -translate-y-full  delay-9000'>
                    <span className=' text-gray-800 text-sm'>Vends ce qui ne te sers pas</span>
                </div>
                </>  }
            </div>
        </div>
    )
}

export default Bannier