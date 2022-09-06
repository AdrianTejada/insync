import React from 'react';
import './textField.css';

export default function TextField({
  children='title',
  value,
  onChange=()=>{}
}) {
  return (
    <div className='text-field-light' >
      <h3>
        {children}
      </h3>
      <input type='text' onChange={(text)=>onChange(text.target.value)} value={value}/>
    </div>
  )
}
