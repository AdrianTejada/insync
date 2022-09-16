import React from 'react';
import './appContent.css';
import TodoItem from '../TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCompleted } from '../../Slices/todoSlice';
import { motion, AnimatePresence } from 'framer-motion';

const todoItem = {
  hidden: {
    y: 30,
    opacity : 0,
    scale: 1
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      duration: .4,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      type: 'tween',
      duration: .2
    }
  }
};

export default function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const theme = useSelector((state)=>state.todo.todoTheme);
  const filter = useSelector((state)=>state.todo.todoFilter)
  const dispatch = useDispatch();
  const sortedTodoList = [...todoList];

  sortedTodoList.sort((a, b)=> new Date(a.time) - new Date(b.time));

  const filteredTodoList = sortedTodoList.filter((item)=>{
    if (filter === 'all') {
      return true;
    } else {
      return item.status === filter;
    }
  })
  return ( 
    <>
      <div className={`app-content-${theme}`}>
        <AnimatePresence mode='popLayout'>
          {filteredTodoList && filteredTodoList.length > 0 ? 
          filteredTodoList.map((item)=> <motion.div layout variants={todoItem} initial='hidden' animate='visible' exit='exit' key={item.id}>
              <TodoItem item={item}/>
            </motion.div>)
          : null }
        </AnimatePresence>
      </div>
      <div className={`clear-todos-${theme}`}>
        <AnimatePresence>
          {(filteredTodoList.every((item)=>item.status === 'complete') && filteredTodoList.length > 0) && 
              <motion.button whileTap={{ scale: 0.9 }} onClick={()=>dispatch(deleteCompleted())}>
                clear all!
              </motion.button>
          }
        </AnimatePresence>
      </div>
    </>
  )
}
