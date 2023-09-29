import React from 'react'
import Chevron from '../public/image/ChevronRight';
import ChevronRight from '../public/image/ChevronRight';

interface data {
    mainTitle: string;
    content: string
}

interface SectionProps {
    dataa: data;
}

const BlogCard: React.FC<SectionProps> = ({ dataa }) => {
    return (
        <div className='bg-white flex flex-col card rounded-3xl shadow-2xl'>
            <div className='px-8 py-4'>
                <p className=' font-poppinsSemiBold text-xl text-black py-4'>{dataa.mainTitle}</p>
                <p className=' font-poppinsMedium text-gray-600 text-md '>{dataa.content}</p>

                <div className=' flex items-center gap-3 pt-4'>
                    <p className=' font-poppinsMedium text-gray-600 py-4'>Lire plus</p>
                    <ChevronRight color='black' />
                </div>
            </div>


            <img src='/image/sec42.png' className=' w-full ' alt='icone' />
        </div>
    )
}

export default BlogCard