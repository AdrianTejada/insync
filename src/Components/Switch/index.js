import React, { useState } from 'react';
import './switch.css';
import { TbNorthStar } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";


export default function Switch() {
  const [theme, setTheme] = useState('light')

  return (
    <div 
      className={`switch-${theme}`}
      onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <div/>
      <button>
        {theme === 'light' ? <TbNorthStar/> : <BsFillMoonStarsFill/>}
      </button>
    </div>
  )
}
