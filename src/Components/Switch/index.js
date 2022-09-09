import React from 'react';
import './switch.css';
import { TbNorthStar } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../../Slices/themeSlice';



export default function Switch() {
  const theme = useSelector((state)=>state.theme.todoTheme);
  const dispatch = useDispatch();

  return (
    <div className={`switch-${theme}`} onClick={()=>{
      dispatch(updateTheme(theme))
      console.log(theme)
      }}>
      <div/>
      <button>
        {theme === 'light' ? <TbNorthStar/> : <BsFillMoonStarsFill/>}
      </button>
    </div>
  )
}
