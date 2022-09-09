import React from 'react';
import '../Button/button.css';
import { useSelector } from 'react-redux';

export default function SelectButton ({children, ...rest}) {
  const theme = useSelector((state)=>state.theme.todoTheme);


    return (
      <select className={`button-secondary-${theme}`}>
        {children}
      </select>
    )
  }
