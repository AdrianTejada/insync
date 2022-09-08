import React from 'react';
import './modalFunctions.css';
import TextField from '../TextField';
import ColorSelect from '../ColorSelect';
import Button from '../Button';

export default function ModalFunctions({
    onTitleChange=()=>{},
    onDescriptChange=()=>{},
    titleValue,
    descriptValue,
    button1Text,
    onButton1Click=()=>{},
    onButton2Click=()=>{},
    currentColor=()=>{},
}) {
  return (
    <div className='modal-functions'>
        <TextField 
            onChange={(text)=>onTitleChange(text)}
            value={titleValue}
        >
            title*
        </TextField>
        <TextField
            onChange={(text)=>onDescriptChange(text)}
            value={descriptValue}
        >
            description
        </TextField>
        <ColorSelect currentColor={(color)=>currentColor(color)}/>
        <div className='button-row'>
            <Button onClick={onButton1Click}>
                {button1Text}
            </Button>
            <Button onClick={onButton2Click} variant='secondary'>
                cancel
            </Button>
        </div>
    </div>
  )
}
