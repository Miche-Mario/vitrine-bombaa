import React from 'react'
import Emoji1 from '../public/image/emoji1.png'
import Sec11 from '../public/image/Sec11'
import Sec12 from '../public/image/Sec12'
import Sec13 from '../public/image/Sec13'


const SellSection = () => {

    const data = [
        {"comp": <Sec11/>, "description" : "Mettez gratruitement vos articles en vente"},
        {"comp": <Sec12/>, "description" : "Vendez-les à un heureux acheteur"},
        {"comp": <Sec13/>, "description" : "Recevez vos sous"},
    ]
  return (
    <>
         <div className='flex flex-col justify-center items-center mx-10'>
            <div>
            <p className=' font-octarine text-center text-2xl md:text-4xl text-black'>
                Videz vos placards, remplissez vos proches
            </p>
            <div className='mt-4 '>
                <p className=' md:text-2xl text-xl  font-poppinsMedium text-center leading-[35px] relative inline-block'>Ce qui ne vous sers plus, servira peut-etre aux autres <span><img src='image/emoji1.png' alt='emoji1' className='w-10 h-10 absolute bottom-0 right-4  top-8 md:top-0 md:-right-12'/> </span>  </p>
            </div>
         </div>
         <div className=' grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-52   bg-white mx-4 pb-20 sm:max-sm:pb-20 justify-center items-center md:mx-24  md:py-20  md:px-36    '>
           <div className=' md:order-1 order-2'>
                {
                    data.map((item, index) => (
                        <div key={index} className="flex items-center gap-7 mt-4">
                            <div>{item.comp}</div>
                            <p className='text-lg md:text-xl text-black font-poppinsMedium'>{item.description}</p>
                        </div>
                    ))
                }
                <div className=' flex md:block   justify-center items-center '>
                    <button className=' bg-primary text-white text-center rounded-lg px-4 py-2  mt-8 text-md font-poppinsBold'>Commencer à vendre</button>
                </div>
            </div>
            <div className='md:order-2 mt-5 order-1'>
                <img src='/image/sec14.png' alt='section1'/>
            </div>
        </div>
        </div>
    </>
  
  )
}

export default SellSection