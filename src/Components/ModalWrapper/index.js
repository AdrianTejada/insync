import React from 'react';
import './modal.css';
import Title from '../Title'
import { VscClose } from "react-icons/vsc";

export default function ModalWrapper({
  children,
  title,
  onClose=()=>{},
}) {
  return (
    <div className='modal-blur'>
      <div className='modal-container-light'>
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
