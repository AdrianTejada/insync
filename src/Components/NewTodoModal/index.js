import React from 'react';
import ModalWrapper from '../ModalWrapper';
import ModalFunctions from '../ModalFunctions';


export default function NewTodoModal({
    todoModal,
    setTodoModal,
}) {
  return (<div>
      {todoModal && (
        <ModalWrapper title='New Todo' onClose={()=>setTodoModal(false)}>
        <ModalFunctions
          button1Text='create todo'
          button2Text='cancel'
          onButton1Click={()=>console.log('hello')}
          onButton2Click={()=>setTodoModal(false)}
          onTitleChange={(text)=>console.log(text)}
        />
      </ModalWrapper>)}
  </div>)
}
