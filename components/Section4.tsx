"use client"

import React, { useState } from 'react';
import Emoji4 from '../public/image/Emoji4'
import Vector4 from '../public/image/Vector4'
import BlogCard from './BlogCard';
import Button from './Button';

const Section4 = () => {
    interface data {
        mainTitle: string;
        content: string
    }

    const data: data = {
        mainTitle: 'Pour mettre un article en vente',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    }

    const [isGrowing, setIsGrowing] = useState(false);
    const [isSliding, setIsSliding] = useState(false);


    return (
        <div>
            <div className={` relative bg-lightprimary flex flex-col justify-center items-center  mx-4   sm:max-sm:pb-8 md:mx-24 mt-8 rounded-3xl md:py-20  px-[30px] py-20 mb-16 `}>

                <div className=" rounded-lg overflow-hidden absolute hidden md:block  top-0 right-0">
                    <Vector4 />
                </div>


                <div>
                    <p className=' font-octarine text-center text-2xl md:text-4xl text-black'>
                        Nous vous donnons nos conseils de vente
                    </p>
                    <div className='mt-4 '>
                        <div className=' md:text-2xl text-xl  font-poppinsRegular text-center text-gray-700 '>Votre épanouissement est notre raison d'etre <div className='w-10 h-10 inline-block align-sub '><Emoji4 /></div>  </div>
                    </div>
                    <div className=' grid grid-cols-1 md:grid-cols-3 md:px-1  md:gap-16 gap-10  mt-20'>
                        <BlogCard dataa={data} />
                        <BlogCard dataa={data} />
                        <BlogCard dataa={data} />
                    </div>
                    <div>
                        <div className="flex justify-center items-center mt-8 ">
                            <Button title='Lire plus' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section4