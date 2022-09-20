import React from 'react'
import './checkButton.css'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';

const checkVariants = {
  // initial: {
  //   color: '#A4A4A4',
  // },
  checked: {
    pathLength: 1,
    color: '#FFFFFF'
  },
  unchecked: {
    pathLength: 0,
    color: '#A4A4A4'
  }
};

const tap = {
  scale: 0.8
}


export default function CheckButton({
  checked,
  onClick,
}) {
  const theme = useSelector((state)=>state.todo.todoTheme);

  return (
    <motion.div className={`check-button-${theme}-${checked ? 'checked' : 'unchecked'}`}
    animate={checked ? 'checked' : 'unchecked'}
    onClick={onClick}
    whileTap={tap}
    >
        <svg
            viewBox='0 0 53 38'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            >
            <motion.path
                variants={checkVariants}
                animate={checked ? 'checked' : 'unchecked'}
                fill='none'
                strokeMiterlimit='10'
                strokeWidth='6'
                d='M1.5 22L16 36.5L51.5 1'
                strokeLinejoin='round'
                strokeLinecap='round'
                />
        </svg>
    </motion.div>
  )
}
