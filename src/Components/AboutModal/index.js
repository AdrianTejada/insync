import React from 'react'
import ModalWrapper from '../ModalWrapper';
import Button from '../Button';
import {VscGithubInverted} from 'react-icons/vsc';

export default function AboutModal({
    openModal,
    setOpenModal
}) {
  return ( <>
    {openModal && (
        <ModalWrapper title='About' onClose={()=>setOpenModal(false)}>
            <div>
              A simple todo list app built with React.js, Redux, SCSS and Framer. For the source code & documentation feel free to click on the Github icon below!
            </div>
            <div>
              Designed & developed by Adrian Tejada.
            </div>
            <a href='https://www.atejada.dev/'>
              https://www.atejada.dev/
            </a>
            <div>
              <button>
                <VscGithubInverted/>
              </button>
              <Button/>
            </div>
        </ModalWrapper>
    )}
  </>)
}
