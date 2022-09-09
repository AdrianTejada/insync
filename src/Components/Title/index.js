import React from 'react'
import './title.css';
import { useSelector } from 'react-redux';

export default function Title({children, variant='main'}) {
  const theme = useSelector((state)=>state.theme.todoTheme);

  return (
    <div className={`title-${variant}-${theme}`}>
      <h1>
        {children}
      </h1>
      <div/>
    </div>
  )
}