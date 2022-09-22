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

export default function SelectButton ({}) {
  const theme = useSelector((state)=>state.todo.todoTheme);
  const todoList = useSelector((state)=>state.todo.todoList);
  const filter = useSelector((state)=>state.todo.todoFilter);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleFilterChange = (event) => {
    const status = event.target.value;;
    dispatch(updateFilter(status));
    if (todoList.length === 0) {
      toast('add a task to change the list view')
    }
  };

    return (<div className='select-button'>
      <motion.button whileTap={tap} className={`button-secondary-${theme}`} onChange={()=>setIsOpen(!isOpen)} style={{width: '6em'}}>
        {filter}
      </motion.button>
      <motion.div>
        <button>all</button>        
        <button>incomplete</button>        
        <button>complete</button>        
      </motion.div>
    </div>
    )
}