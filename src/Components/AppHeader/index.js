import React from 'react';
import Button from '../Button';
import Modal from '../Modal';
import SelectButton from '../SelectButton';
import './appHeader.css';
import { MdPlaylistAdd } from "react-icons/md";

export default function AppHeader() {
  return (
    <div className='appHeader'>
        <Button>new todo <MdPlaylistAdd/></Button>
        <SelectButton>
            <option value='all'>All</option>
            <option value='incomplete'>Incomplete</option>
            <option value='complete'>Complete</option>
        </SelectButton>
        <Modal/>
    </div>
  )
}
