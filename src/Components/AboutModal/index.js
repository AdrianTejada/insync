import React from 'react'
import ModalWrapper from '../ModalWrapper';
import Button from '../Button';
import './aboutModal.css'
import {VscGithubInverted} from 'react-icons/vsc';
import { useSelector, useDispatch } from 'react-redux';
import { gradientify, toggleShowList } from '../../Slices/todoSlice';
import { AnimatePresence } from 'framer-motion';

export default function AboutModal({
    openModal,
    setOpenModal
}) {
  const theme = useSelector((state)=>state.todo.todoTheme);
  const dispatch = useDispatch();

  const handleGradientify = () => {
    dispatch(toggleShowList())
    dispatch(gradientify())
    setOpenModal(false)
    setTimeout(()=>{
      dispatch(toggleShowList())
    }, [1])
  };

  return ( <AnimatePresence>
    {openModal && (
        <ModalWrapper title='About' onClose={()=>setOpenModal(false)}>
          <div className={`about-${theme}`}>
            <p>
              A simple todo list app built with React.js, Redux, SCSS and Framer Motion. For the source code & documentation feel free to click on the Github icon below!
            </p>
            <p>
              Designed & developed by Adrian Tejada.
            </p>
            <a target='_blank' href='https://www.atejada.dev/' rel="noopener noreferrer">
              https://www.atejada.dev/
            </a>
            <div>
              <button>
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