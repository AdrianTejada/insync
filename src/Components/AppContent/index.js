import React from 'react';
import './appContent.css';
import TodoItem from '../TodoItem';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const container = {
  hidden: {opacity: 1},
  visible: {
    opacity: 1,
    scale: 1, 
    transition: {
      staggerChildren: 0.2
    }
  }
}

const child = {
  hidden: {y: 20, opacity : 0},
  visible: {y: 0,opacity: 1},
  exit: {opacity: 0, x: -20}
}

export default function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const theme = useSelector((state)=>state.todo.todoTheme);
  const filter = useSelector((state)=>state.todo.todoFilter)
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
    <motion.div className={`app-content-${theme}`}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <AnimatePresence 
      // mode='popLayout'
      >
        {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((item)=><TodoItem 
        key={item.id}
        item={item}
        variants={child}
        />
        ): <motion.div
        variants={child}
        >no todos!</motion.div>}
      </AnimatePresence>
    </motion.div>
  )
}
