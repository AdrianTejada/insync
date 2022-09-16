import React from 'react'
import './button.css';
import { useSelector } from 'react-redux';
import {motion} from 'framer-motion';

const tap = {
  scale: 0.95
}

export default function Button({
  children,
  variant='primary',
  type='button',
  onClick=()=>{},
}) {
  const theme = useSelector((state)=>state.todo.todoTheme);

  return (
    <motion.button whileTap={tap} className={`button-${variant}-${theme}`} type={type} onClick={onClick}>
      {children}
    </motion.button>
  )
}