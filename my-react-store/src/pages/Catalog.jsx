import Product from "../components/product";
import "./Catalog.css";

function Catalog() {
    return(
        <div className="Catalog">
            <h1>Check our amazing products!</h1>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    )
}
 
export default Catalog;