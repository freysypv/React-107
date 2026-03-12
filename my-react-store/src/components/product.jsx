//app is the parent of the product, catalog is the parent of product.
import QuantityPicker from "../QuantityPicker";
import"./product.css";

function Product(props){
    return(

        <div className="Product"> 
         <img src={"/images/" + props.data.image} alt="Product Image" />
           <h5>{props.data.title}</h5>
         <div className="price"> 
            <label>Total</label>
            { <label>{[props.data.price.toFixed(2)]}</label> /*to Fixed = round up the price to 2 decimal places. */}
            
            {/* comment */}
            {/*  */}
        
         </div>
              <QuantityPicker/>
        </div>

    )
}

export default Product;

