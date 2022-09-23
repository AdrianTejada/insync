import React, {useState, useEffect} from 'react';
import ModalWrapper from '../ModalWrapper';
import ModalFunctions from '../ModalFunctions';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../Slices/todoSlice'; 
import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

export default function TodoModal({
  type,
  openModal,
  setOpenModal,
  item,
}) {
  const [title, setTitle] = useState();
  const [descript, setDescript] = useState();
  const [color, setColor] = useState('0');
  
  const dispatch = useDispatch();

  const handleSubmit  = () => {
    if (title) {
      if (type === 'new') {
        var time = new Date().getDate().toString() + '.' + new Date().getMonth().toString() + '.' + new Date().getFullYear().toString() + ' ';
        var hour = new Date().getHours().toString() + ':';
        var minute = new Date().getMinutes().toString();

        if (hour.length === 1) {
          const zero = '0';
          hour = zero.concat(hour)
        }
        if (minute.length === 1) {
          const zero = '0';
          minute = zero.concat(minute)
        }

        time = time + hour + minute

        dispatch(addTodo({
          id: uuid(),
          title,
          description: descript,
          color,
          time,
          status: 'incomplete',
        }));
        setTitle(null);
        setDescript(null);
        setColor('0');
        setOpenModal(false);
      }
      else if (type === 'edit' && (item.title !== title || item.description !== descript || item.color !== color)) {
        dispatch(updateTodo({
          ...item,
          title,
          description: descript,
          color,
        }));
        setOpenModal(false);
      } else {
        toast.error('no changes made!')
      }
    } 
    else {
      toast.error('title is empty');
    }
  };
  
  useEffect(()=>{
    if (type === 'edit' && item) {
      setTitle(item.title)
      setDescript(item.description)
      setColor(item.color)
    } else {
      setTitle('')
      setDescript('')
      setColor('0')
    }

  },[type, item, openModal])
  // how does this work


  return (<AnimatePresence>
      {openModal && (
        <ModalWrapper title={type === 'new' ? 'New Task' : 'Edit ask' } onClose={()=>setOpenModal(false)}>
        <ModalFunctions
          button1Text={type === 'new' ? 'create task' : 'confirm'}
          onButton1Click={handleSubmit}
          onButton2Click={()=>setOpenModal(false)}
          titleValue={title}
          onTitleChange={(text)=>setTitle(text)}
          descriptValue={descript}
          onDescriptChange={(text)=>setDescript(text)}
          currentColor={(color)=>setColor(color)}
          selectedColor={color}
        />
      </ModalWrapper>)}
  </AnimatePresence>)
}
