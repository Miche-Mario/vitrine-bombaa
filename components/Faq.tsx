"use client"
import React, { useRef, useState, useEffect } from "react";
import Vector from '../public/image/Vector';

const Faq = () => {

    interface Faq {
        id: string,
        question: string;
        answer: string;
    }


    const FaqData: Faq[] = [
        {
            id: '1',
            question: 'Comment se fait l\'achat sur Bombaa?',
            answer: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit.Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit.Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit'
        },
        {
            id: '2',
            question: 'Comment se fait l\'achat sur Bombaa?',
            answer: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit'
        },
        {
            id: '3',
            question: 'Comment se fait l\'achat sur Bombaa?',
            answer: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit.Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit.Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit'
        },
        {
            id: '4',
            question: 'Comment se fait l\'achat sur Bombaa?',
            answer: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit'
        },
        {
            id: '5',
            question: 'Comment se fait l\'achat sur Bombaa?',
            answer: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit.Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit.Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit'
        },
        {
            id: '6',
            question: 'Comment se fait l\'achat sur Bombaa?',
            answer: 'Permettre aux vendeurs d\'ajouter le ou les localités ou ils peuvent livrer un frais fixe de livraison. Lorem ipsum dolor sit amet, consectetur. Lorem ipsum dolor sit'
        },
        


    ];
    const [answer, setAnswer] = useState<string>(FaqData[0].id)

    const handleClicked = (event: string) => {
        setAnswer(event)
    };
    let result = FaqData.find(item => item.id === answer)
    



    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    useEffect(() => {
      const container = containerRef.current;
  
      const handleMouseDown = (e: MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - container!.offsetLeft);
        setScrollLeft(container!.scrollLeft);
      };
  
      const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging) return;
        const x = e.pageX - container!.offsetLeft;
        const walk = (x - startX) * 2; // You can adjust the scrolling speed here
        container!.scrollLeft = scrollLeft - walk;
      };
  
      const handleMouseUp = () => {
        setIsDragging(false);
      };
  
      container?.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
  
      return () => {
        container?.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isDragging, startX, scrollLeft]);
  
    console.log(answer)
    return (
        <div className={`  bg-lightprimary grid grid-cols-1 md:grid-cols-2 gap-6  mx-4   sm:max-sm:pb-8 md:mx-24 mt-8 rounded-3xl md:py-20   py-20  mb-16 `}>

            <div className='md:mx-32 '>
                <p className=' text-4xl font-poppinsBold text-black px-[30px]'>FAQs</p>
                <div className="horizontal-card-slider2 md:px-[30px] mx-3 md:mx-0 " ref={containerRef}>

                    {
                        FaqData.map((item, index) => (
                            <div onClick={() => handleClicked(item.id)} key={index} className={`card rounded-lg px-2 py-2  ${item.id === answer ? 'bg-primary text-white' : 'bg-lightprimary text-black'}   border-primary flex  md:gap-12 items-center mt-8 border-2 rounded-2xl`}>
                                <p className={` md:text-lg text-[14px] md:text-[16px]  font-poppinsRegular px-3 md:px-0`}>{item.question}</p>
                                <div className={`${item.id === answer ? 'block' : 'hidden' }`}>
                                    <Vector/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='md:mx-4 mx-0  '>
               
                <p className='text-4xl font-poppinsBold text-black px-[30px] md:px-0 '>Réponses</p>
                <div className='bg-secondary border-2 rounded-2xl px-0 py-0 md:px-0 md:py-3 mt-8 mx-3  '>
                    <div className=' flex flex-col'>
                    <div className={`py-5 px-8`}>
                                    <Vector/>
                                </div>
                        <p className='text-lg font-poppins text-white leading-8 px-8 py-4'>{result?.answer }</p>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq