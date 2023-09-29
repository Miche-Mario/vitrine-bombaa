import React from 'react'
import Icone1 from '../public/image/Icone1'

interface CardItem {
    icone: JSX.Element;
    label: string;
  }
  

const CarrousselElement: React.FC<CardItem> = ({icone, label}) => {
  return (
    <div className=' bg-primary rounded-lg flex w-fit justify-between items-center px-4 py-3'>
        <div className=" shadow-2xl bg-[#2287d0] h-14 w-14 rounded-lg flex justify-center items-center">
            {icone}

        </div>
        <p className=' text-white font-md font-poppinsMedium px-2'>{label}</p>
    </div>
  )
}

export default CarrousselElement