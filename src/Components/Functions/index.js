import React from 'react';
import Button from '../Button';
import SelectButton from '../SelectButton';
import './functions.css';
import { MdPlaylistAdd } from "react-icons/md";
import Switch from '../Switch';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../Slices/todoSlice';

export default function Functions({
  onTodoClick=()=>{},
  onAboutClick=()=>{},
}) {
  const filter = useSelector((state)=>state.todo.todoFilter);
  const theme = useSelector((state)=>state.todo.todoTheme);
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const status = event.target.value;
    dispatch(updateFilter(status));
  };

  return (
    <div className='functions'>
       <div>
        <Button onClick={onTodoClick}>
          new task<MdPlaylistAdd/>
          </Button>
        <Switch/>
       </div>
       <div>
          <SelectButton onChange={(event)=>handleFilterChange(event)} value={filter}>
            <option value='all'>all tasks</option>
            <option value='incomplete'>incomplete</option>
            <option value='complete'>complete</option>
          </SelectButton>
          <Button variant={'secondary'} onClick={onAboutClick}>
            about
          </Button>
       </div>
    </div>
  )
}
