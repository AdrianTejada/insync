import React from 'react'
import ModalWrapper from '../ModalWrapper';
import Button from '../Button';
import {VscGithubInverted} from 'react-icons/vsc';
import { useSelector } from 'react-redux';
import './aboutModal.css'
import { AnimatePresence } from 'framer-motion';

export default function AboutModal({
    openModal,
    setOpenModal
}) {
  const theme = useSelector((state)=>state.todo.todoTheme);

  return ( <AnimatePresence>
    {openModal && (
        <ModalWrapper title='About' onClose={()=>setOpenModal(false)}>
          <div className={`about-${theme}`}>
            <p>
              A simple todo list app built with React.js, Redux, SCSS and Framer. For the source code & documentation feel free to click on the Github icon below!
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
              <Button>
                gradientify!
              </Button>
            </div>
          </div>
        </ModalWrapper>
    )}
  </AnimatePresence>)
}