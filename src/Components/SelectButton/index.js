import React, { useState } from 'react';
import '../Button/button.css';
import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import { updateFilter } from '../../Slices/todoSlice';
import './selectButton.css';


export default function SelectButton () {
  const theme = useSelector((state)=>state.todo.todoTheme);
  const todoList = useSelector((state)=>state.todo.todoList);
  const filter = useSelector((state)=>state.todo.todoFilter);
  const dispatch = useDispatch(false);
  const [isOpen, setIsOpen] = useState(false);

  const options = {
    hidden: {
      opacity: 0,
      x: -30,
      transition: {
        duration: .2
      }
    },
    visible: {
      opacity: 1,
      x: 0,
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
      <button className={`button-secondary-${theme}`} onClick={()=>setIsOpen(!isOpen)} style={{borderRadius: isOpen ? '8px 0px 0px 8px' : null, minWidth: '4.4em'}}>
        {filter === 'all' ? 'view all' : filter}
      </button>
      <AnimatePresence>
      { isOpen && <motion.div variants={options} initial='hidden' animate={'visible'} className='select-button-option' exit='hidden'>
        {filter === 'all' ?  <>
        <button onClick={()=>handleFilterChange('incomplete')}>incomplete</button><button onClick={()=>handleFilterChange('complete')}>complete</button></> : 
        filter === 'incomplete' ? <><button onClick={()=>handleFilterChange('all')}>view all</button><button onClick={()=>handleFilterChange('complete')}>complete</button></> : 
        filter === 'complete' ? <><button onClick={()=>handleFilterChange('all')}>view all</button><button onClick={()=>handleFilterChange('incomplete')}>incomplete</button></> : null }  
      </motion.div>}
      </AnimatePresence>
    </span>
    )
}