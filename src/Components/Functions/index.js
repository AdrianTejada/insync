import React from 'react';
import SelectButton from '../SelectButton';
import './functions.css';
import { RiPlayListAddLine } from "react-icons/ri";
import Switch from '../Switch';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { AiOutlineInfo } from 'react-icons/ai';

const tap = {scale: 0.9};

export default function Functions({
  onTodoClick=()=>{},
  onAboutClick=()=>{},
}) {
  const theme = useSelector((state)=>state.todo.todoTheme);

  return (
    <div className='functions'>
       <div className='row'>
        <motion.button whileTap={tap} onClick={onTodoClick} className={`add-todo-${theme}`}>
          <RiPlayListAddLine/>
        </motion.button>
        <Switch/>
       </div>
       <div className='row'>
          <SelectButton/>
          <motion.button whileTap={tap} onClick={onAboutClick} className={`info-${theme}`}>
            <AiOutlineInfo/>
          </motion.button>
       </div>
    </div>
  )
}
