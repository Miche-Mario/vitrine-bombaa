import React from 'react'

const ChevronRight = ({color} : {color:string}) => {
  return (
<svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1.17285L6 6.17285L1 11.1729" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  )
}

export default ChevronRight