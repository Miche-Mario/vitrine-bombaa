import React from 'react'
import Nav from '../../../components/Nav'
import Section4 from '../../../components/Section4'
import BlogCard from '../../../components/BlogCard';
import NewsLetterSection from '../../../components/NewsLetterSection';
import SocialMadiaSection from '../../../components/SocialMadiaSection';
import FooterMenu from '../../../components/FooterMenu';

const page = () => {
    interface data {
        mainTitle: string;
        content: string
    }

    const data: data = {
        mainTitle: 'Pour mettre un article en vente',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    }
  return (
    <>
        <Nav/>
        <div className=' md:mx-32 mt-20 mx-8'>
            <div className=' flex justify-center items-center md:text-4xl text-xl font-poppinsBold '>Blog</div>
            <div className=' grid grid-cols-1 md:grid-cols-3 md:px-1  md:gap-16 gap-10  mt-20'>
                <BlogCard dataa={data} />
                <BlogCard dataa={data} />
                <BlogCard dataa={data} />
                <BlogCard dataa={data} />
                <BlogCard dataa={data} />
                <BlogCard dataa={data} />
            </div>
           
        </div>
        <div className='mt-20'>
        <NewsLetterSection/>
      <SocialMadiaSection/>
      <FooterMenu/>
        </div>
      
    </>
  )
}

export default page