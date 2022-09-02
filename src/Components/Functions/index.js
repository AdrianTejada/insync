import React from 'react';
import Button from '../Button';
import Modal from '../Modal';
import SelectButton from '../SelectButton';
import './functions.css';
import { MdPlaylistAdd } from "react-icons/md";
import Switch from '../Switch';

export default function Functions() {
  return (
    <div className='functions'>
       <div>
        <Button>new todo <MdPlaylistAdd/></Button>
        <Switch>da switch</Switch>
       </div>
       <div>
          <SelectButton>
            <option value='all'>all items</option>
            <option value='incomplete'>incomplete</option>
            <option value='complete'>complete</option>
          </SelectButton>
          <Button variant={'secondary'} >about</Button>
       </div>
        <Modal/>
    </div>
  )
}
