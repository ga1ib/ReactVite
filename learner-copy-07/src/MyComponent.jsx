import React, {useState} from "react";

function MyComponent() {
const [name, setName] =useState('guest');
const [quantity, setQuantity] =useState("");
const [comment, setComment] =useState('');
const [payment, setPayment ] =useState();
const [shipping, setShipping ] =useState();


function handleQuantityComponent(event) {
setQuantity(event.target.value);    
}

function handleCommentComponent(event) {
setComment(event.target.value);    
}

function handleNameComponent(event) {
setName(event.target.value);    
}
function handlePaymentComponent(event) {
setPayment(event.target.value);    
}
function handleShippingComponent(event) {
setShipping(event.target.value);    
}

return (
<div>
    <input value={name} onChange={handleNameComponent} />
<p>Name = {name}</p>
    <input value={quantity} onChange={handleQuantityComponent} type="number"/>
<p>Quantity = {quantity}</p>
    <textarea value={comment} onChange={handleCommentComponent}
    placeholder="Enter the delivery address"/>
    <p>Comment: {comment}</p>
    <select value={payment} onChange={handlePaymentComponent}>
        <option value="">Select an option for payment</option>
        <option value="Master Card">Master Card</option>
        <option value="Visa Card">Visa Card</option>
        <option value="Gift Card">Gift Card</option>
    </select>
    <p>Payment: {payment}</p>
    <label>
        <input type="radio" value="Pick Up"
        checked ={shipping ==="Pick Up"} 
        onChange={handleShippingComponent}/>
        Pick Up
    </label>
    <label>
        <input type="radio" value="Delivery"
        checked ={shipping === "Delivery"} 
        onChange={handleShippingComponent}/>
        Delivery
    </label>
    <p> Shiping: {shipping}</p>
</div>);
}
export default MyComponent;