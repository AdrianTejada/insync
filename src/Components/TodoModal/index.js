import React, {useState} from 'react';
import ModalWrapper from '../ModalWrapper';
import ModalFunctions from '../ModalFunctions';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Slices/todoSlice'; 
import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast';

export default function TodoModal({
  type,
  openModal,
  setOpenModal,
}) {
  const [title, setTitle] = useState();
  const [descript, setDescript] = useState();
  const [color, setColor] = useState('0');

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
      if (type === 'update') {
        console.log('updating task');
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
          onTitleChange={(text)=>setTitle(text)}
          onDescriptChange={(text)=>setDescript(text)}
          currentColor={(color)=>setColor(color)}
        />
      </ModalWrapper>)}
  </div>)
}
