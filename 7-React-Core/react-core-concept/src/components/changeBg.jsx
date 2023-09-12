import { useState } from 'react'
import image from '../assets/react.svg'

export default function ChangeBg() {
    const [isTomato, setIsTomato]= useState(false)
    
  return (
      <div className={`container ${isTomato ? 'bg-tomato' : 'bg-gray'}`} >
          <img width={'50%'} src={image} alt="" onClick={()=> setIsTomato(!isTomato)}/>
    </div>
  )
}
