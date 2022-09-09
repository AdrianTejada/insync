import React, {useState} from 'react';
import ModalWrapper from '../ModalWrapper';
import ModalFunctions from '../ModalFunctions';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../../Slices/todoSlice'; 
import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast';

export default function TodoModal({
  type,
  openModal,
  setOpenModal,
  currentTitle,
  currentDescript,
  id,
  selectedColor,
  status,
  time,
}) {
  const [title, setTitle] = useState(currentTitle);
  const [descript, setDescript] = useState(currentDescript);
  const [color, setColor] = useState(selectedColor ? selectedColor : '0');

  const dispatch = useDispatch();

  const handleSubmit  = () => {
    if (title) {
      if (type === 'new') {
        dispatch(addTodo({
          id: uuid(),
          title,
          description: descript,
          color,
          time: new Date().toLocaleString(),
          status: 'incomplete',
        }));

        toast.success('added new todo!');
        setTitle(null);
        setDescript(null);
        setColor('0');
        setOpenModal(false);
      }
      if (type === 'edit') {
        dispatch(updateTodo({
          id,
          title,
          description: descript,
          color,
          time,
          status
        }));

        toast.success('updated');
        setOpenModal(false);
      }
    } 
    else {
      toast.error('title is empty');
    }
  };

  return (<div>
      {openModal && (
        <ModalWrapper title={type === 'new' ? 'New Todo' : 'Edit Todo' } onClose={()=>setOpenModal(false)}>
        <ModalFunctions
          button1Text={type === 'new' ? 'create todo' : 'confirm'}
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
  </div>)
}
