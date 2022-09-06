import React from 'react';
import './modal.css';
import Title from '../Title'

export default function Modal({children, title}) {
  return (
    <div className='modal-blur'>
      <div className='modal-container-light'>
        <Title variant='secondary'>
          {title}
        </Title>
        {children}
      </div>
    </div>
  )
}
