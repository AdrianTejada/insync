import React from 'react'
import './button.css';

export default function Button({
  children,
  variant='primary',
  type='button',
  ...rest
}) {
  return (
    <button className={`button button--${variant}`} type={type} {...rest}>
      {children}
    </button>
  )
}