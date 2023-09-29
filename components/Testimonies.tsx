"use client"

import React, { useState } from 'react';
import Emoji4 from '../public/image/Emoji4';
import Emoji5 from '../public/image/Emoji5';
import ChevronLeft from '../public/image/ChevronLeft';
import ChevronRight from '../public/image/ChevronRight';
import HeartEmoji from '../public/image/HeartEmoji';

interface Card {
    author: string;
    picture: string;
    profession: string;
    content: string;
}

const cardsData: Card[] = [
    {
        author: 'Bernice GANHOU',
        picture: '/image/profile.png',
        profession: 'Etudiante',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    },
    {
        author: 'Bernice GANHOU',
        picture: '/image/profile.png',
        profession: 'Etudiante',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    },
    {
        author: 'Bernice GANHOU',
        picture: '/image/profile.png',
        profession: 'Etudiante',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    },
    {
        author: 'Bernice GANHOU',
        picture: '/image/profile.png',
        profession: 'Etudiante',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    },
    {
        author: 'Bernice GANHOU',
        picture: '/image/profile.png',
        profession: 'Etudiante',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    },
    {
        author: 'Bernice GANHOU',
        picture: '/image/profile.png',
        profession: 'Etudiante',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    },
    {
        author: 'Bernice GANHOU',
        picture: '/image/profile.png',
        profession: 'Etudiante',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    },
    {
        author: 'Bernice GANHOU',
        picture: '/image/profile.png',
        profession: 'Etudiante',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    },
    {
        author: 'Bernice GANHOU',
        picture: '/image/profile.png',
        profession: 'Etudiante',
        content: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison'
    },

];

const CardsPerPage = 3;

const Carousel: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);

    const totalPages = Math.ceil(cardsData.length / CardsPerPage);

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
    };

    const renderCards = () => {
        const startIndex = currentPage * CardsPerPage;
        const endIndex = startIndex + CardsPerPage;
        const currentCards = cardsData.slice(startIndex, endIndex);

        return currentCards.map((card, index) => (
            <div key={index} className="">
                <div className="bg-primary rounded-2xl shadow-lg py-8 px-2  relative">
                    <div className=' absolute bg-white -top-7 gap-2  right-1/3 left-1/3 w-32 py-2  rounded-3xl flex justify-center items-center'>
                        <img src={card.picture} alt='picture'/>
                        <HeartEmoji/>
                    </div>
                    <div className=' mt-8 px-8'>
                        <p className="text-md text-white font-poppinsRegular">{card.content}</p>
                        <p className='mt-10 text-white font-poppinsMedium'>{card.author}</p>
                        <p className=' text-white'>{card.profession}</p>
                    </div>
                  
                </div>
            </div>
        ));
    };

    return (
        <div className={` bg-white flex flex-col   mx-4  sm:max-sm:pb-8 md:mx-24 mt-8 rounded-3xl md:py-20  px-[30px] py-20 mb-16 `}>
            <p className=' font-octarine text-center text-2xl md:text-4xl text-black'>
                Témoignages
            </p>
            <div className='mt-4 '>
                <div className=' md:text-2xl text-xl  font-poppinsRegular text-center text-gray-700'>Ils ont le smile grace à nous <div className='w-10 h-10 inline-block align-sub '><Emoji5 /></div>  </div>
            </div>
            <div className=" flex justify-end items-center gap-4">
                {/* Chevrons de navigation */}
                <button
                    onClick={handlePrevPage}
                    className="px-2 py-1  focus:outline-none"
                    disabled={currentPage === 0}
                >

                    <ChevronLeft color={currentPage === 0 ? 'lightgray' : 'black'} />
                </button>
                <button
                    onClick={handleNextPage}
                    className="px-2 py-1   focus:outline-none"
                    disabled={currentPage === totalPages - 1}
                >
                    <ChevronRight color={currentPage === totalPages - 1 ? 'lightgray' : 'black'} />
                </button>
            </div>
            {/* Cartes actuellement affichées */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-14">{renderCards()}</div>
            {/* Barres de position */}
            <div className="flex justify-center mt-8">
                {Array.from({ length: totalPages }, (_, index) => (
                    <div
                        key={index}
                        className={`w-8 h-1  ${index === currentPage ? 'bg-secondary' : 'bg-gray-300'
                            } mx-1`}
                    ></div>
                ))}
            </div>
        </div>

    );
};

export default Carousel;
