import React from 'react'
import './button.css';

export default function Button({
  children,
  variant='primary',
  type='button',
  ...rest
}) {
  return (
    <button className={`button-${variant}-light`} type={type} {...rest}>
      {children}
    </button>
  )
}