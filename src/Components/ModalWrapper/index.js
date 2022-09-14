import React from 'react';
import './modal.css';
import Title from '../Title'
import { VscClose } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const appear = {
  hidden : {opacity: 0},
  visible: {opacity: 1},
  exit: {opacity: 1}
}

export default function ModalWrapper({
  children,
  title,
  onClose=()=>{},
}) {
  const theme = useSelector((state)=>state.todo.todoTheme);

  return (
    <motion.div className='modal-blur' variants={appear} initial='hidden' animate='visible' exit='exit'>
      <div className={`modal-container-${theme}`}>
        <button onClick={onClose}>
          <VscClose/>
        </button>
        <Title variant='secondary'>
          {title}
        </Title>
        {children}
      </div>
    </motion.div>
  )
}
