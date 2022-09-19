import React, {useState} from 'react';
import './colorSelect.css';
import { useSelector } from 'react-redux';

export default function ColorSelect({
    selectedColor='0',
    currentColor=()=>{}
}) {
    const colorArr = ['0', '6', '7', '8', '9', '10'];
    const [color, setColor] = useState(selectedColor)
    const theme = useSelector((state)=>state.todo.todoTheme);

    const handleChange = (color) => {
        setColor(color);
        currentColor(color);
    }

  return (
    <div className={`color-select-${theme}`}>
        <h3>
            colors
        </h3>
        <div>
            {colorArr.map((value)=><span key={value}>
                <input type='radio' value={value} checked={color === value} name={value} readOnly/>
                <label htmlFor={value} onClick={()=>handleChange(value)} className={`gradient-${value}`}/>
            </span>)}
        </div>
    </div>
  )
}
