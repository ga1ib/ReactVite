import React, {useState} from 'react';

function MyComponent(){
    const [car,setCar]=useState([]);
    const [cyear, setYear] =useState (new Date().getFullYear());
    const [cmake, setMake] = useState('');
    const[cmodel, setModel]= useState('');

    function handleAddCar(){
        const newCar = {year: cyear,
                         make: cmake,
                         model: cmodel};
    setCar(c =>[...c,newCar]);
    setYear(new Date().getFullYear());
    setMake('');
    setModel('');
    }
    function handleRemoveCar(index){
        setCar(c=> c.filter((_ , i) => i !== index))
    }
    function handleYearChange(event){
        setYear(event.target.value);

    }
    function handleMakeChange(event){
        setMake(event.target.value);

    }
    function handleModelChange(event){
        setModel(event.target.value);

    }

    return(<>
    <h2>List of Car Objects</h2>
    <ul>
    {car.map((element, index)=>
    <li key={index} onClick={() => handleRemoveCar(index)}>
        {element.year} {element.make} {element.model}
     </li>)}

    </ul>
    <input type="number" value={cyear} onChange={handleYearChange}/><br />
    <input type="text" value={cmake} onChange={handleMakeChange} 
     placeholder='Enter car make' /> <br />
    <input type="text" value={cmodel} onChange={handleModelChange} 
     placeholder='Enter car model' /> <br />
     <button onClick={handleAddCar}>Add</button>

    </>);
}
export default MyComponent;