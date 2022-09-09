import React, { useState } from 'react';
import './todoItem.css';
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
// import { VscChevronUp } from "react-icons/vsc";
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import TodoModal from '../TodoModal'; 

export default function TodoItem({
  item
}) {
  const [openModal, setOpenModal] = useState(false);
  const [expand, setExpand] = useState(false);

  const {
    title,
    description,
    time,
    color,
  } = item;

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
          <button onClick={()=>console.log(description)}>
            <VscTrash/>
          </button>
        </span>
      </div>
    </>
  )
}
