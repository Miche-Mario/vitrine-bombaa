"use client";

import React, { useState, useEffect } from "react";

import Vector1 from "../../public/image/Vector1";
import Vector11 from "../../public/image/Vector11";
import ParrainageBannierVector from "../../public/image/ParrainageBannierVector";

const Bannier = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  useEffect(() => {
    // After the component mounts, set isVisible to true to trigger the animation
    setIsVisible(true);

    // Mettez à jour isVisible après 5 secondes
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);
    const timer1 = setTimeout(() => {
      setIsVisible1(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer1);
    };
  }, []);
  return (
    <div className=" grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-8   bg-lightprimary mx-4  sm:max-sm:pb-20  justify-center items-center md:mx-24 mt-8 rounded-3xl md:py-0  md:px-0    ">
      <div
        className={`flex  justify-center items-start mb-6 md:mb-0  flex-col md:px-24 px-8 py-8 md:py-32  '}`}
      >
        <p className="font-octarine    md:text-5xl text-2xl text-left  text-darkprimary md:leading-[80px] leading-[40px]">
          Parraine des
          <br /> personnes sur Bombaa
        </p>
        <p className=" md:text-2xl text-lg md:leading-[50px] leading-[30px] font-poppinsRegular text-gray-900">
          Crée ton compte parrain et gagne de l&apos;argent pour chaque nouvelle
          inscription que Bombaa obtins grâce à toi
        </p>

        <div className="flex   items-center    mt-4 md:mt-10  ">
          <div className=" ">
            <button className="mr-3 bg-primary border-2  border-primary    px-6 md:px-6 py-2 md:py-2 w-max rounded-lg text-white md:text-xl text-sm font-poppinsSemiBold ">
              M&apos;inscrire
            </button>
          </div>
          <div className=" ">
            <button className=" border-2 bg-transparent border-primary  py-2 px-2 w-max md:px-3  rounded-lg text-primary md:text-xl text-sm font-poppinsSemiBold ">
              Me connecter
            </button>
          </div>
        </div>
      </div>

      <div className={` h-[100%]  md:hidden    flex justify-end items-end `}>
        <div className="relative   ">
          <div className="  ">
            <ParrainageBannierVector size={301} />
          </div>
          <div className="top-0 left-0">
            <img
              src="/image/parrainagebannier.png"
              alt="Image 1"
              className=" h-[100%]    absolute top-0 left-0"
            />
          </div>
        </div>
      </div>

      <div className={` h-[100%]  md:flex      hidden justify-end items-end `}>
        <div className="relative   ">
          <div className="  ">
            <ParrainageBannierVector size={731} />
          </div>
          <div className="top-0 left-0">
            <img
              src="/image/parrainagebannier.png"
              alt="Image 1"
              className=" h-[100%]    absolute top-0 left-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannier;
