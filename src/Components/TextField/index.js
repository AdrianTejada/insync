import React from 'react';
import './textField.css';
import { useSelector } from 'react-redux';

export default function TextField({
  children='title',
  value,
  onChange=()=>{}
}) {
  const theme = useSelector((state)=>state.theme.todoTheme);

  return (
    <div className={`text-field-${theme}`} >
      <h3>
        {children}
      </h3>
      <input type='text' onChange={(text)=>onChange(text.target.value)} value={value}/>
    </div>
  )
}
