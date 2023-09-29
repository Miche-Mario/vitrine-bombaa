import { data } from 'autoprefixer';
import React from 'react'
import Vector2 from '../public/image/Vector2';
import Vector3 from '../public/image/Vector3';
import Button from './Button';


interface data {
    sideText: {
        comp: JSX.Element;
        description: string;
    }[];
    mainTitle: string;
    sousTitre: string;
    emoji: string;
    buttonTitle: string;
    buttonLink: string;
    sideImage: string;
    isPrimary: boolean;
    isVector: boolean;
}

interface SectionProps {
    dataa: data;
  }

  const Section: React.FC<SectionProps> = ({ dataa }) => {

  return (
    <>
         <div className={` ${dataa.isPrimary ? ' bg-lightprimary' : 'bg-white'} flex flex-col justify-center items-center  mx-4  sm:max-sm:pb-8 md:mx-24 mt-8 rounded-3xl md:py-20  px-[30px] py-20 mb-16 `}>
            <div>
            <p className=' font-octarine text-center text-2xl md:text-4xl text-black'>
                {dataa.mainTitle}
            </p>
            <div className='mt-4 '>
                <p className=' md:text-2xl text-xl  font-poppinsRegular text-center text-gray-700  '>{dataa.sousTitre} <img src={dataa.emoji} alt='emoji1' className='w-8 h-8 inline-block align-sub '/>  </p>
            </div>
         </div>
         <div className={` md:mt-10  grid grid-cols-1  md:grid-cols-2 md:gap-52 gap-3  justify-center items-center     `}>
           <div className={` ${dataa.isPrimary ? 'md:order-2 order-2' : 'md:order-1 order-2'} sm:max-sm:ml-8 sm:max-sm:mt-3 `}>
                {
                    dataa.sideText.map((item: any, index: number) => (
                        <div key={index} className="flex  gap-7 mt-4">
                            <div>{item.comp}</div>
                            <p className='text-lg md:text-xl text-black font-poppinsMedium'>{item.description}</p>
                        </div>
                    ))
                }
                <div className=' flex md:block   justify-center items-center '>
                   <Button title={dataa.buttonTitle}/>
                </div>
            </div>
       
               
                <div className={` ${dataa.isPrimary ? 'md:order-1 order-1' : 'md:order-2  order-1'} mt-5 ${dataa.isVector && "relative"}`}>
                        <div className={`${dataa.isVector ? "  md:w-[470px] w-max rotate-[20deg] md:rotate-0" :"hidden "}`}>
                            <Vector3/>
                        </div>
                        <img src={dataa.sideImage} className={`${dataa.isVector && "absolute top-0 md:left-7 "}`} alt='section1'/>
                </div>
           
        </div>
        </div>
    </>
  
  )
}

export default Section