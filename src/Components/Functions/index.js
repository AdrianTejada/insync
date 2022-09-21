import React from 'react';
import SelectButton from '../SelectButton';
import './functions.css';
import { RiPlayListAddLine } from "react-icons/ri";
import Switch from '../Switch';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../Slices/todoSlice';
import { motion } from 'framer-motion';
import { AiOutlineInfo } from 'react-icons/ai';

const tap = {scale: 0.9};

export default function Functions({
  onTodoClick=()=>{},
  onAboutClick=()=>{},
}) {
  const filter = useSelector((state)=>state.todo.todoFilter);
  const theme = useSelector((state)=>state.todo.todoTheme);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const status = event.target.value;
    dispatch(updateFilter(status));
  };

  return (
    <div className='functions'>
       <div>
        <motion.button whileTap={tap} onClick={onTodoClick} className={`add-todo-${theme}`}>
          <RiPlayListAddLine/>
        </motion.button>
        <Switch/>
       </div>
       <div>
          <SelectButton onChange={(event)=>handleFilterChange(event)} value={filter}>
            <option value='all'>all tasks</option>
            <option value='incomplete'>incomplete</option>
            <option value='complete'>complete</option>
          </SelectButton> 
          <motion.button whileTap={tap} onClick={onAboutClick} className={`info-${theme}`}>
            <AiOutlineInfo/>
          </motion.button>
       </div>
    </div>
  )
}
