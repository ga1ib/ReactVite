import React, {useState} from 'react';
function ColorPicker() {
     const [color, setColor] = useState('black');
     const handleChange = (e) => {
        setColor(e.target.value);
    };
     return  (<div className='color-pickier-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Slected Color : {color}</p>
        </div>
        <label >Select color : </label>
        <input type="color" value={color} onChange={handleChange} />
     </div>);
}
export default ColorPicker;