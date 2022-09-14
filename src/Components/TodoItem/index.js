import React, { useEffect, useState } from 'react';
import './todoItem.css';
import { VscChevronDown, VscEdit, VscTrash } from "react-icons/vsc";
import TodoModal from '../TodoModal'; 
import CheckButton from '../CheckButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../../Slices/todoSlice';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const expandIcon = {
  expand: { 
    rotate: 0, 
    transition: {
      type: 'tween',
      duration: .1
    }
  },
  close: { 
    rotate: 90,
    transition: {
      type: 'tween',
      duration: .1
    }
  }
};

const expandDescription = {
  expand: {
    height: 0,
    opacity: 0,
    marginTop: 0,
    marginBottom: 0,
      transition: {
      type: 'tween',
      duration: .15
    }
  },
  close: {
    height: '1em',
    marginTop: '-.3em',
    marginBottom: '.4em',
    opacity: 1,
  }
};

export default function TodoItem({
  item,
  variants,
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
      <motion.div className='todo-item' variants={variants} exit='exit' animate='visible' initial='hidden'>
        <span className={`todo-item-info-${theme}-${item.status}`}>
          <CheckButton
            checked={checked}
            onClick={handleCheck}
          />
          <div>
            <p>{item.title}</p>
            <motion.p 
              variants={expandDescription} 
              animate={expand ? 'close' : 'expand'}
              transition={{opacity: {duration: .2, delay: .2},default: {duration: .2}}}
            >
              {item.description}
            </motion.p>
            <p>{item.time}</p>
          </div>
        </span>
        <span className='todo-item-controls'>
          {item.description ? 
             <motion.button 
              onClick={()=>setExpand(!expand)}
              variants={expandIcon}
              animate={expand ? 'close' : 'expand'}
             >
              <VscChevronDown className='chevron'/>
            </motion.button>
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
