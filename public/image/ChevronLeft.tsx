import React from 'react'

const ChevronLeft = ({color}:{color:string}) => {
  return (
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="chevron-left">
<path id="Vector" d="M12.5 15L7.5 10L12.5 5" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
  )
}

export default ChevronLeft