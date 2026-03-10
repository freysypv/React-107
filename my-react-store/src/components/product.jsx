import QuantityPicker from "../QuantityPicker";
import"./product.css";

function Product(){
    return(

        <div className="Product"> 
        <img src="https://picsum.photos/200" alt="Product Image" />
           <h5>Products Title goes here</h5>
           <div className="price">
            <label>Price</label>
            <label>Total</label>
            {/* comment */}
            {/*  */}
        
              </div>
              <QuantityPicker/>
        </div>

    )
}

export default Product;

