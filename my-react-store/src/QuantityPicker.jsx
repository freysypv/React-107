import "./QuantityPicker.css";
import { useState } from "react";

function QuantityPicker() {
  //state varieble
  //function to set the value of the quantity and update it when the buttons are clicked
  const [quantity, setQuantity] = useState(1); //initial value of the quantity is set to 1

  function handledecrease() {
    let nextval = quantity - 1; //decrease the quantity by -1

    //quantity=quantity-1;


    if (nextval > 0){
                              //check if the next value is greater than 0
        setQuantity(nextval);}//update the quantity state variable with the new value
  }
  //quantity=quantity+1;
  //setQuantity(quantity + 1);

  function handleIncrease() {
    let nextval = quantity + 1; //increase the quantity by 1
    setQuantity(nextval); //update the quantity state variable with the new value
  }

  return (
    <div classname="QuantityPicker">
      <button className="btn-minus" onClick={handledecrease} disabled={quantity === 1}>
        -
      </button>
      <label>{quantity}</label>
      <button className="btn-plus" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
}

export default QuantityPicker;
