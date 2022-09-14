import React from 'react';
import '../Button/button.css';
import { useSelector } from 'react-redux';

export default function SelectButton ({children, onChange, value}) {
  const theme = useSelector((state)=>state.todo.todoTheme);
  
    return (
      <select className={`button-secondary-${theme}`} onChange={(event)=>onChange(event)} value={value}>
        {children}
      </select>
    )
}