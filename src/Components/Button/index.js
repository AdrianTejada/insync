import React from 'react'
import './button.css';
import { useSelector } from 'react-redux';

export default function Button({
  children,
  variant='primary',
  type='button',
  onClick=()=>{},
}) {
  const theme = useSelector((state)=>state.theme.todoTheme);

  return (
    <button className={`button-${variant}-${theme}`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}