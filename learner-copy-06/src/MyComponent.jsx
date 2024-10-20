import React, {useState} from "react";
function MyComponent(){
const[name, setName] = useState ('Guest');
const [number, setNumber] = useState (0);



const updateName=()=>{
    setName("Galib");
}
const incrementNumber=()=>{
    setNumber(number + 1);
}
const decrementNumber=()=>{
    setNumber(number - 1);
}

return(<div>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>
    <p>Number: {number}</p>
    <button onClick={incrementNumber}>Increase Number</button>
    <p>Number: {number}</p>
    <button onClick={decrementNumber}>Decrease Number</button>
</div>);
}
export default MyComponent;