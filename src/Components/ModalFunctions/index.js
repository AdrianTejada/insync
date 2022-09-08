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
        <ColorSelect onChange={(e)=>console.log(e)}/>
        <div className='button-row'>
            <Button>
                create todo
            </Button>
            <Button variant='secondary'>
                cancel
            </Button>
        </div>
    </div>
  )
}
