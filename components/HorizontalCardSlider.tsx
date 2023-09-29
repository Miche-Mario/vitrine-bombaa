import React, { useRef, useState, useEffect } from "react";
import CarrousselElement from "./CarElement";

interface CardItem {
  icone: JSX.Element;
  label: string;
}

interface HorizontalCardSliderProps {
  items: CardItem[];
}

const HorizontalCardSlider: React.FC<HorizontalCardSliderProps> = ({ items }) => {
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

  return (
    <div className="horizontal-card-slider1" ref={containerRef}>
      {items.map((item, index) => (
        <div className="card" key={index}>
         <CarrousselElement icone={item.icone} label={item.label}/>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCardSlider;
