"use client"

import React, { useRef, useState, useEffect } from 'react';
import Icone1 from '../public/image/Icone1';
import Icone2 from '../public/image/Icone2';
import Icone3 from '../public/image/Icone3';
import Icone4 from '../public/image/Icone4';
import Icone5 from '../public/image/Icone5';
import CarrousselElement from './CarElement';
import HorizontalCardSlider from './HorizontalCardSlider';
import LogoScroll from './HorizontalCardSlider';
import LogoSlider from './HorizontalCardSlider';


const FeaturesCarroussel: React.FC = () => {


  const items = [

    {
      icone: <Icone1/>,
      label: "Paiement sécurisé",
    },  {
      icone: <Icone2/>,
      label: "Livraison possible",
    },  {
      icone: <Icone3/>,
      label: "Simple d'utilisation",
    },  {
      icone: <Icone4/>,
      label: "Livraison à domicile",
    },
    {
      icone: <Icone5/>,
      label: "Discussion vendeur-acheteur possible",
    },
    
    // Add more items as needed
  ];

  return (
    <div className="flex justify-center items-center md:py-6  mx-4  md:mx-24">
      <HorizontalCardSlider items={items} />
    </div>
  );
};





export default FeaturesCarroussel