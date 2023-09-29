import { data } from 'autoprefixer'
import Link from 'next/link';
import React from 'react'
interface data {
    title: string;
    links: {
        label: string;
        link: string;
    }[]
  
}

interface SectionProps {
    dataa: data;
}

const FooterMenuTem: React.FC<SectionProps> = ({ dataa }) => {
  return (
    <div className='pt-4 md:pt-0'>
        <p className='  text-lg font-poppinsBold'>{dataa.title}</p>
        <div className=' flex flex-col  items-start md:mt-4 mt-2'>
            {dataa.links.map((link, index) => (
                <Link className='py-1 font-poppinsRegular text-md text-gray-700' href={link.link}>{link.label}</Link>
            ))}
        </div>
    </div>
  )
}

export default FooterMenuTem