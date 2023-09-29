import React from 'react'
import Nav from '../../../components/Nav'
import BlogCard from '../../../components/BlogCard'
import Faq from '../../../components/Faq'
import NewsLetterSection from '../../../components/NewsLetterSection'
import SocialMadiaSection from '../../../components/SocialMadiaSection'
import FooterMenu from '../../../components/FooterMenu'

const page = () => {
    return (
        <>
            <Nav />
            <Faq/>
            <div className='mt-20'>
                <NewsLetterSection />
                <SocialMadiaSection />
                <FooterMenu />
            </div>

        </>
    )
}

export default page