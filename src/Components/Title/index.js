import React from 'react'
import './title.css';

export default function Title({children}) {
  return (
    <div className='title-light'>
      <h1>
        {children}
      </h1>
      <div/>
    </div>
  )
}