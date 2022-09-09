import React, { useState } from 'react';
import './todoItem.css';
import { VscChevronDown } from "react-icons/vsc";
// import { VscChevronUp } from "react-icons/vsc";
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";
import TodoModal from '../TodoModal'; 

export default function TodoItem({
  item
}) {
  const [openModal, setOpenModal] = useState(false);

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
            <p>{description}</p>
            <p>{time}</p>
          </div>
        </span>
        <span className='todo-item-controls'>
          <button>
            <VscChevronDown className='chevron'/>
          </button>
          <button onClick={()=>setOpenModal(true)}>
            <VscEdit/>
          </button>
          <button>
            <VscTrash/>
          </button>
        </span>
      </div>
    </>
  )
}
