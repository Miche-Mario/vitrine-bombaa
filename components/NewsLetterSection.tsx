import React from 'react'
import NewsIcone from '../public/image/NewsIcone'
import NewsArrow from '../public/image/NewsArrow'
import NewsArrow2 from '../public/image/NewsArrow2'

const NewsLetterSection = () => {
    return (
        <div className=' flex  md:mx-24    mb-20  '>
            <div className=' sm:max-sm:justify-center w-full items-center'>
                <div className='flex md:flex-row flex-col  items-center mx-6 md:mx-0'>
                    <div>
                        <NewsIcone />
                    </div>
                    <div className='mx-0 md:mx-8 '>
                        <p className=' text-3xl md:text-4xl font-octarine text-black text-center leading-[3rem]'>Abonnes-toi à notre newsletter</p>
                    </div>
                    <div className=' '>
                        <p className=' text-[20px] font-poppinsRegular text-center  text-gray-700'>(pour du contenu et des offres de réductions exclusives)</p>
                    </div>
                </div>


               
                    <div className='  flex-row items-center border-b-2 border-b-gray-900 mx-4 md:mx-0  mt-4 py-2 flex md:hidden'>
                        <input type='email' placeholder='nom@mail.com' className=' text-gray-700 w-full md:text-[25px] text-[18px] border-none outline-none ' />
                        <NewsArrow2 />
                    </div>

                    <div className=' hidden flex-col     md:flex mt-6'>
                    <input type='email' placeholder='nom@mail.com' className=' text-gray-700  md:text-[25px] text-[18px] border-none outline-none ' />

                        <div className='-mt-3 flex justify-around w-full  items-center '>
                            <div className='border-b-2   border-b-gray-900 w-full '></div>
                            <div className=' ml-10'>
                                <NewsArrow /> 
                            </div>
                        </div>
                        
                    </div>

                </div>




        </div>
    )
}

export default NewsLetterSection