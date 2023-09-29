import React from 'react'



interface SectionProps {
  title: string;
}
const Button:React.FC<SectionProps> = ({title}) => {
  return (
    <div>
      <button className=" bombaa text-white font-poppinsMedium md:text-[18px] text-[14px] rounded-lg px-10 py-2  " >{title}</button>
    </div>
  )
}

export default Button