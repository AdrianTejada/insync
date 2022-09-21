import React, { useEffect, useState } from 'react';
import './todoItem.css';
import { VscChevronDown, VscEdit, VscTrash } from "react-icons/vsc";
import TodoModal from '../TodoModal'; 
import CheckButton from '../CheckButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, updateTodo } from '../../Slices/todoSlice';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const tap = {
  scale: 0.8
};

const expandIcon = {
  expand: { 
    rotate: 0, 
    transition: {
      type: 'spring',
      duration: .3,
      bounce: .4
    }
  },
  close: { 
    rotate: 90,
    transition: {
      type: 'spring',
      duration: .3,
      bounce: .4
    }
  }
};

const expandDescription = {
  close: {
    height: '1em',
    marginTop: '-.3em',
    marginBottom: '.4em',
    opacity: 1,
  },
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
};

export default function TodoItem({
  item
}) {
  const [openModal, setOpenModal] = useState(false);
  const [expand, setExpand] = useState(false);
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch();
  const theme = useSelector((state)=>state.todo.todoTheme);

  const messages = [
    "well done.",
    "well done.",
    "well done.",
    "good work!",
    "good work!",
    "good work!",
    "looking good! 😎",
    "fight!!! 💪",
    "another one off the list.",
  ]

  useEffect(()=>{
    if (item.status ==='complete'){
      setChecked(true)
    }
  },[checked, item.status]);

  const handleCheck = () => {
    setChecked(!checked)
    dispatch(updateTodo({...item, status: item.status === 'incomplete' ? 'complete' : 'incomplete'}))
    if (item.status === 'incomplete') {
      const random = Math.floor(Math.random() * messages.length)
      toast.success(messages[random])
    }
  }
  
  const handleDelete = () => {
    dispatch(deleteTodo(item.id));
  }

  return (
    <>
      <TodoModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        type='edit'
        item={item}
      />
      <div className={`todo-item-${theme}`}>
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
              initial='expand'
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
              whileTap={tap}
             >
              <VscChevronDown className='chevron'/>
            </motion.button>
          : null}
          <motion.button onClick={()=>setOpenModal(true)} whileTap={tap}>
            <VscEdit/>
          </motion.button>
          <motion.button whileTap={tap} onClick={handleDelete}>
            <VscTrash/>
          </motion.button>
        </span>
      </div>
    </>
  )
}
