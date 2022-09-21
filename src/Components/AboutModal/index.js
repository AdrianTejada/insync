import React from 'react'
import ModalWrapper from '../ModalWrapper';
import Button from '../Button';
import './aboutModal.css'
import {VscGithubInverted} from 'react-icons/vsc';
import { useSelector, useDispatch } from 'react-redux';
import { gradientify, toggleShowList } from '../../Slices/todoSlice';
import { AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

export default function AboutModal({
    openModal,
    setOpenModal
}) {
  const theme = useSelector((state)=>state.todo.todoTheme);
  const todoList = useSelector((state)=>state.todo.todoList);
  const dispatch = useDispatch();

  const handleGradientify = () => {
    if (todoList.length > 1) {
      dispatch(toggleShowList())
      dispatch(gradientify())
      setOpenModal(false)
      setTimeout(()=>{
        dispatch(toggleShowList())
      }, [100])
    } else {
      toast.error('must create at least 2 tasks!')
    }
  };

  return ( <AnimatePresence>
    {openModal && (
        <ModalWrapper title='About' onClose={()=>setOpenModal(false)}>
          <div className={`about-${theme}`}>
            <p>
              A single page todo app built with React.js, Redux, SCSS and Framer Motion. For the source code & documentation feel free to click on the Github icon below!
            </p>
            <p className='link'>
              Designed & developed by Adrian Tejada.
            </p>
            <a target='_blank' href='https://www.atejada.dev/' rel="noopener noreferrer" className='link'>
              https://www.atejada.dev/
            </a>
            <div>
              <button onClick={()=>window.open('https://github.com/AdrianTejada/insynccc')}>
                <VscGithubInverted/>
              </button>
              <Button onClick={handleGradientify}>
                gradientify!
              </Button>
            </div>
          </div>
        </ModalWrapper>
    )}
  </AnimatePresence>)
}