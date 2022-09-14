import React, { useEffect, useState } from 'react';
import './todoItem.css';
import { VscChevronDown, VscChevronUp, VscEdit, VscTrash } from "react-icons/vsc";
import TodoModal from '../TodoModal'; 
import CheckButton from '../CheckButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../../Slices/todoSlice';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

export default function TodoItem({
  item,
  variants
}) {
  const [openModal, setOpenModal] = useState(false);
  const [expand, setExpand] = useState(false);
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch();
  const theme = useSelector((state)=>state.todo.todoTheme);

  useEffect(()=>{
    if (item.status ==='complete'){
      setChecked(true)
    }
  },[checked, item.status]);

  const handleCheck = () => {
    setChecked(!checked)
    dispatch(updateTodo({...item, status: item.status === 'incomplete' ? 'complete' : 'incomplete'}))
  }
  
  const handleDelete = () => {
    dispatch(deleteTodo(item.id));
    toast.success('good work!')
  }

  return (
    <>
      <TodoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        type='edit'
        item={item}
      />
      <motion.div className='todo-item' variants={variants}>
        <span className={`todo-item-info-${theme}-${item.status}`}>
          <CheckButton
            checked={checked}
            onClick={handleCheck}
          />
          <div>
            <p>{item.title}</p>
            {expand ? <p>{item.description}</p> : null}
            <p>{item.time}</p>
          </div>
        </span>
        <span className='todo-item-controls'>
          {item.description ? 
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
      </motion.div>
    </>
  )
}
