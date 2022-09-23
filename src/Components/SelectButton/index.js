import React, { useState } from 'react';
import '../Button/button.css';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { updateFilter } from '../../Slices/todoSlice';
import './selectButton.css';

const tap = {
  scale: 0.90
}

export default function SelectButton () {
  const theme = useSelector((state)=>state.todo.todoTheme);
  const todoList = useSelector((state)=>state.todo.todoList);
  const filter = useSelector((state)=>state.todo.todoFilter);
  const dispatch = useDispatch(false);
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    hidden: {
      opacity: 0,
      transition: {
        duration: .2
      }
    },
    visible: {
      opacity: 1,
      transition: {
        duration: .2
      }
    },
  }
  
  const handleFilterChange = (value) => {
    dispatch(updateFilter(value));
    if (todoList.length === 0) {
      toast('add a task to change the list view')
    }
    setIsOpen(false)
  };

    return (<span className='select-button'>
      <motion.button whileTap={tap} className={`button-secondary-${theme}`} onClick={()=>setIsOpen(!isOpen)} style={{minWidth: '6em', marginRight: '.5em'}}>
        {filter === 'all' ? 'view all' : filter}
      </motion.button>
     <motion.div variants={options} initial='hidden' animate={isOpen ? 'visible' : 'hidden'} className='select-button-option'>
        <button 
        onClick={()=>handleFilterChange('all')}
        >all</button>        
        <button 
        onClick={()=>handleFilterChange('incomplete')}
        >incomplete</button>        
        <button 
        onClick={()=>handleFilterChange('complete')}
        >complete</button>        
      </motion.div>
    </span>
    )
}