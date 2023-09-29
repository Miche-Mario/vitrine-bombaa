import React, { ReactComponentElement } from 'react'

const Store = ({logo, name }: {logo:any, name:string}) => {
  return (
    <div className='flex bg-white px-2 py-1.5 md:px-4 md:py-2 gap-2  items-center rounded-lg shadow-gray-200 shadow-2xl  md:border-t-8 border-t-4 border-l-4 '>
        <div className=' md:w-10 w-8 h-8 md:h-10 '>
            {logo}
        </div>
        <div className='flex flex-col   '>
            <p className='text-black font-poppinsLight md:text-[16px]  text-[10px]'>Disponible sur</p>
            <p className=' font-poppinsMedium text-[14px] md:text-[20px] text-black'>{name}</p>
        </div>
    </div>
  )
}

export default Store