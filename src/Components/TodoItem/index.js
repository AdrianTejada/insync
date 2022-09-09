import React, { useState } from 'react';
import './todoItem.css';
import { VscChevronDown, VscChevronUp, VscEdit, VscTrash } from "react-icons/vsc";
import TodoModal from '../TodoModal'; 
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../Slices/todoSlice';

export default function TodoItem({
  item
}) {
  const [openModal, setOpenModal] = useState(false);
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch()
  
  const {
    title,
    description,
    time,
    color,
    id,
  } = item;
  
  const handleDelete = ()=> {
    dispatch(deleteTodo(id));
  }

  return (
    <>
      <TodoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        type='edit'
        selectedColor={color}
        currentTitle={title}
        currentDescript={description}
      />
      <div className='todo-item'>
        <span className='todo-item-info-light'>
          <button/>
          <div>
            <p>{title}</p>
            {expand ? <p>{description}</p> : null}
            <p>{time}</p>
          </div>
        </span>
        <span className='todo-item-controls'>
          {description ? 
             <button onClick={()=>setExpand(!expand)}>
              {expand ? <VscChevronUp className='chevron'/> : <VscChevronDown className='chevron'/>}
            </button>
          : null}
          <button onClick={()=>setOpenModal(true)}>
            <VscEdit/>
          </button>
          <button onClick={handleDelete}>
            <VscTrash/>
          </button>
        </span>
      </div>
    </>
  )
}
