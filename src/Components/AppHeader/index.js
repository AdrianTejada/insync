import React from 'react';
import Button from '../Button';
import SelectButton from '../SelectButton';
import './appHeader.css';

export default function AppHeader() {
  return (
    <div className='appHeader'>
        <Button>New Note</Button>
        <SelectButton>
            <option value='all'>All</option>
            <option value='incomplete'>Incomplete</option>
            <option value='complete'>Complete</option>
        </SelectButton>
    </div>
  )
}
