import React, {useState} from 'react';
import './colorSelect.css';

export default function ColorSelect({
    selectedColor='1',
    onChange=()=>{}
}) {
    const [color, setColor] = useState(selectedColor)

    const handleChange = (color) => {
        setColor(color);
        onChange(color);
    }

  return (
    <div className='color-select-light'>
        <h3>
            colors
        </h3>
        <div>
            <input type='radio' value={'1'} checked={color === '1'} name='1'/>
            <label htmlFor='1' className='gradient-1' onClick={()=>handleChange('1')}/>
            <input type='radio' value={'2'} checked={color === '2'} name='2'/>
            <label htmlFor='2' className='gradient-2' onClick={()=>handleChange('2')}/>
            <input type='radio' value={'3'} checked={color === '3'} name='3'/>
            <label htmlFor='3' className='gradient-3' onClick={()=>handleChange('3')}/>
            <input type='radio' value={'4'} checked={color === '4'} name='4'/>
            <label htmlFor='4' className='gradient-4' onClick={()=>handleChange('4')}/>
            <input type='radio' value={'5'} checked={color === '5'} name='5'/>
            <label htmlFor='5' className='gradient-5' onClick={()=>handleChange('5')}/>
        </div>
    </div>
  )
}
