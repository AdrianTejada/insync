import React from 'react';
import './todoItem.css';
import { VscChevronDown } from "react-icons/vsc";
// import { VscChevronUp } from "react-icons/vsc";
import { VscEdit } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";

export default function TodoItem({
  item
}) {
  const {
    title,
    description,
    time,
    // status,
    // color,
    // id
  } = item;

  return (
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
        <button>
          <VscEdit/>
        </button>
        <button>
          <VscTrash/>
        </button>
      </span>
    </div>
  )
}
