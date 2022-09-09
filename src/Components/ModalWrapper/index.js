import React from 'react';
import './modal.css';
import Title from '../Title'
import { VscClose } from "react-icons/vsc";
import { useSelector } from 'react-redux';

export default function ModalWrapper({
  children,
  title,
  onClose=()=>{},
}) {
  const theme = useSelector((state)=>state.theme.todoTheme);


  return (
    <div className='modal-blur'>
      <div className={`modal-container-${theme}`}>
        <button onClick={onClose}>
          <VscClose/>
        </button>
        <Title variant='secondary'>
          {title}
        </Title>
        {children}
      </div>
    </div>
  )
}
