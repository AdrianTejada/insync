import React from 'react';
import './switch.css';
import { TbNorthStar } from "react-icons/tb";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { updateTheme } from '../../Slices/todoSlice';
import { motion } from 'framer-motion';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default function Switch() {
  const theme = useSelector((state)=>state.todo.todoTheme);
  const dispatch = useDispatch();

  return (
    <div className={`switch-${theme}`} onClick={()=>dispatch(updateTheme(theme))}>
      <motion.div transition={spring}>
        <motion.button layout>
          {theme === 'light' ? <TbNorthStar/> : <BsFillMoonStarsFill/>}
        </motion.button>
      </motion.div>
    </div>
  )
}
