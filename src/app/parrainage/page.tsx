import React from 'react'
import Nav from '../../../components/Nav'
import Bannier from '../../../components/parrainage/Bannier'
import Section from '../../../components/Section'
import Sec11 from '../../../public/image/Sec11'
import Sec12 from '../../../public/image/Sec12'
import Sec13 from '../../../public/image/Sec13'
import LinkSVG from '../../../public/image/LinkSVG'
import NewsLetterSection from '../../../components/NewsLetterSection'
import SocialMadiaSection from '../../../components/SocialMadiaSection'
import FooterMenu from '../../../components/FooterMenu'
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
const page = () => {

  const data1: data = {
    sideText: [
      { comp: <Sec12 />, description: "Crée ton compte parrain" },
      { comp: <LinkSVG />, description: "Envoi ton lien de parrainage à tes connaissances susceptibles de bien vendre sur l'application" },
      { comp: <Sec13 />, description: "Reçois 2% des ventes de chacun d'eux pendant 06 mois" }
    ],
    mainTitle: "Comment ça marche?",
    sousTitre: "Suis attentivement",
    emoji: '/image/emoji1.png',
    buttonTitle: "Créer mon compte parrain",
    buttonLink: "/shop",
    sideImage: "../image/sec14.png",
    isPrimary: false,
    isVector: false
  }
  return (
    <div className=''>
        <Nav/>
        <Bannier/>
        <Section dataa={data1}/>
        <>
         <div className={`  bg-lightprimary flex flex-col justify-center items-center  mx-4  sm:max-sm:pb-8 md:mx-24 mt-8 rounded-3xl md:py-20  px-[30px] py-20 mb-16 `}>
            <div>
            <p className=' font-octarine text-center text-2xl md:text-4xl text-black'>
              Combien pourras-tu gagner en 6 mois seulement ?
            </p>
            <div className='mt-8 '>
                <p className=' md:text-2xl text-xl  font-poppinsRegular text-center text-gray-700  '>Plus tu recrute, plus tu gagne <img src="/image/emoji2.png" alt='emoji1' className='w-8 h-8 inline-block align-sub '/>  </p>
            </div>
         </div>
         <div className={` md:mt-10 mt-6  flex flex-col  justify-center items-center     `}>
            <div className=' bg-primary rounded-lg py-3 px-4 text-white font-poppinsBold text-2xl md:text-4xl'>
              20 000 FCFA
            </div>
        </div>
        <div className='   mt-6 text-primary  font-poppinsRegular text-md md:text-xl'>
          Si chaque vendeur parrainé gagne 100 000 FCFA en 6 mois
        </div>
        </div>
    </>
    <NewsLetterSection/>
      <SocialMadiaSection/>
      <FooterMenu/>
    </div>
  )
}

export default page