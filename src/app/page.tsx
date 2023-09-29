import Bannier from '../../components/Bannier'
import Nav from '../../components/Nav'
import Section from '../../components/Section'
import Sec11 from '../../public/image/Sec11'
import Sec12 from '../../public/image/Sec12'
import Sec13 from '../../public/image/Sec13'
import emoji1 from "../../public/image/emoji1.png"

import Sec21 from '../../public/image/Sec21'
import Sec22 from '../../public/image/Sec22'
import Sec23 from '../../public/image/Sec23'
import FeaturesCarroussel from '../../components/FeaturesCarroussel'
import Sec33 from '../../public/image/Sec33'
import Sec32 from '../../public/image/Sec32'
import Sec31 from '../../public/image/Sec31'
import Section4 from '../../components/Section4'
import Carousel from '../../components/Testimonies'
import Faq from '../../components/Faq'
import NewsLetterSection from '../../components/NewsLetterSection'
import SocialMadiaSection from '../../components/SocialMadiaSection'
import Distraction from '../../components/distraction'
import FooterMenu from '../../components/FooterMenu'
export default function Home() {
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
  
const data1: data = {
  sideText: [
    { comp: <Sec11 />, description: "Mettez gratuitement vos articles en vente" },
    { comp: <Sec12 />, description: "Vendez-les à un heureux acheteur" },
    { comp: <Sec13 />, description: "Recevez vos sous" }
  ],
  mainTitle: "Videz vos placards, remplissez vos proches",
  sousTitre: "Ce qui ne vous sers plus, servira peut-etre aux autres",
  emoji: '/image/emoji1.png',
  buttonTitle: "Commencer à vendre",
  buttonLink: "/shop",
  sideImage: "../image/sec14.png",
  isPrimary: false,
  isVector: false
}

const data2: data = {
  sideText: [
    { comp: <Sec21 />, description: "De la friperie" },
    { comp: <Sec22 />, description: "Des articles neufs et d’occasions" },
    { comp: <Sec23 />, description: "Des articles à la mode" }
  ],
  mainTitle: "Achetez ce dont vous avez toujours rêvé",
  sousTitre: "Vous trouverai de tout sur Bombaa !",
  emoji: '/image/emoji2.png',
  buttonTitle: "Commencer à acheter",
  buttonLink: "/shop",
  sideImage: "../image/sec24.png",
  isPrimary: true,
  isVector: false,
}
const data3: data = {
  sideText: [
    { comp: <Sec31 />, description: "Plus de crédibilité" },
    { comp: <Sec32 />, description: "Plus de clients" },
    { comp: <Sec33 />, description: "Des offres adaptés" }
  ],
  mainTitle: "Vous pouvez meme devenir vendeur Pro",
  sousTitre: "Si vous avez tout un stock d'articles à écouler",
  emoji: '/image/emoji3.png',
  buttonTitle: "Créer mon compte pro",
  buttonLink: "/shop",
  sideImage: "../image/sec34.png",
  isPrimary: false,
  isVector: true,
}




  return (
    <div className='mb-52 '>
      <Nav/>
      <Bannier/>
      <Section dataa={data1}/>
      <Section dataa={data2}/>
      <FeaturesCarroussel/>
      <Section dataa={data3}/>
      <Section4/>
      <Carousel/>
      <Faq/>
      <NewsLetterSection/>
      <SocialMadiaSection/>
      <FooterMenu/>
    </div>
  )
}
