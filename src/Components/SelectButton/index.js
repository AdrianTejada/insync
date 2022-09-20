import React from 'react';
import '../Button/button.css';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const tap = {
  scale: 0.90
}

export default function SelectButton ({children, onChange, value}) {
  const theme = useSelector((state)=>state.todo.todoTheme);

    return (
      <motion.select whileTap={tap} className={`button-secondary-${theme}`} onChange={(event)=>onChange(event)} value={value}>
        {children}
      </motion.select>
    )
}