import React from 'react'
import './title.css';

export default function Title({children, variant='main'}) {
  return (
    <div className={`title-${variant}-light`}>
      <h1>
        {children}
      </h1>
      <div/>
    </div>
  )
}