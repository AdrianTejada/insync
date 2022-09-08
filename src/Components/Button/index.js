import React from 'react'
import './button.css';

export default function Button({
  children,
  variant='primary',
  type='button',
  onClick=()=>{},
}) {
  return (
    <button className={`button-${variant}-light`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}