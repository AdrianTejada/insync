import React, {useState} from 'react';
import './colorSelect.css';

export default function ColorSelect({
    selectedColor='0',
    currentColor=()=>{}
}) {
    const colorArr = ['0', '1', '2', '3', '4', '5'];
    const [color, setColor] = useState(selectedColor)

    const handleChange = (color) => {
        setColor(color);
        currentColor(color);
    }

  return (
    <div className='color-select-light'>
        <h3>
            colors
        </h3>
        <div>
            {colorArr.map((value)=><>
                <input type='radio' value={value} checked={color === value} name={value} readOnly/>
                <label htmlFor={value} onClick={()=>handleChange(value)} className={`gradient-${value}`}/>
            </>)}
        </div>
    </div>
  )
}
