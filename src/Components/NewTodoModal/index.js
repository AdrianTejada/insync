import React, {useState} from 'react';
import ModalWrapper from '../ModalWrapper';
import ModalFunctions from '../ModalFunctions';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Slices/todoSlice'; 
import {v4 as uuid} from 'uuid';
import toast from 'react-hot-toast';

export default function NewTodoModal({
    todoModal,
    setTodoModal,
}) {
  const [title, setTitle] = useState();
  const [descript, setDescript] = useState();
  const [color, setColor] = useState('0');

  const dispatch = useDispatch();

  const handleSubmit  = () => {
    if (title) {
      dispatch(addTodo({
        id: uuid(),
        title,
        description: descript,
        color,
        date: new Date().toLocaleDateString(),
        status: 'incomplete',
    }));
    toast.success('added new todo!');
    setTodoModal(false);
    }
  };

  return (<div>
      {todoModal && (
        <ModalWrapper title='New Todo' onClose={()=>setTodoModal(false)}>
        <ModalFunctions
          button1Text='create todo'
          onButton1Click={handleSubmit}
          onButton2Click={()=>setTodoModal(false)}
          onTitleChange={(text)=>setTitle(text)}
          onDescriptChange={(text)=>setDescript(text)}
          currentColor={(color)=>setColor(color)}
        />
      </ModalWrapper>)}
  </div>)
}
