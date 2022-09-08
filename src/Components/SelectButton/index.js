import React from 'react';
import '../Button/button.css';

export default function SelectButton ({children, ...rest}) {
    return (
      <select className='button-secondary-light'>
        {children}
      </select>
    )
  }