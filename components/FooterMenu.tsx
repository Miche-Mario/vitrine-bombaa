import React from 'react'
import FooterMenuTem from './FooterMenuTem';

const FooterMenu = () => {
    interface data {
        title: string;
        links: {
            label: string;
            link: string;
    }[]
    }

    const data: data = {
        title: 'Vendre',
        links: [
            {
                label: 'Nos conseils de ventes',
                link: '/'
            },
            {
                label: 'Devenir Pro',
                link: '/about'
            },
            {
                label: 'Pourquoi vendre dur Bombaa?',
                link: '/about'
            }
        ]
    }

    const data1: data = {
        title: 'Acheter',
        links: [
            {
                label: 'Paiement',
                link: '/'
            },
            {
                label: 'Réception de colis',
                link: '/about'
            },
            {
                label: 'Politique de remboursement',
                link: '/about'
            }
        ]
    }
    const data2: data = {
        title: 'Autres',
        links: [
            {
                label: 'Centre d\'aide',
                link: '/'
            },
            {
                label: 'A propos de Bombaa',
                link: '/about'
            },
            {
                label: 'Politiques',
                link: '/about'
            }
        ]
    }
  return (
    <div className=' md:mb-11 mb-40 mt-24'>
    <div className=' flex flex-col justify-between items-start md:items-center md:flex-row bg-lightprimary rounded-3xl py-12 md:px-12 px-4 mb-8 md:mx-20 my-10 mx-4 '>
        <div className=' mb-6 md:mb-0'>
            <img src='image/bombaaLogo.png' alt='logo' />
            <p className=' font-octarine text-black text-2xl mt-3 md:mt-5'>Les meilleurs ventes en <br/> quelques clics</p>
        </div>
        <>
        <FooterMenuTem dataa={data}/>
        <FooterMenuTem dataa={data1}/>
        <FooterMenuTem dataa={data2}/>

        </>
    </div>
    <div className='text-md md:text-lg flex justify-center items-center font-poppinsRegular text-gray-800'>
    © Bombaa - Tous droits réservés
    </div>
    </div>
  )
}

export default FooterMenu