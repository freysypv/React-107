import Product from "../components/product";
import "./Catalog.css";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";


function Catalog() {
    const [products, setProducts] = useState([]); //this is a state that will hold the products from the catalog. is an array because we will have multiple products.
    //const products =[];
    useEffect(() => {
        //load your data here
        let service = new DataService(); 
        let data = service.getProducts(); //this is a method that will return the products from the catalog.parentesis is for calling the method/ecxecute.
        setProducts(data);
    }, []);                              //the empty array [] means it run only once when the component is mounted. 


    return(
        <div className="catalog">
            <h1>Check our amazing products!</h1>
            {products.map(prod => <Product key={prod._id} data={prod}/>)}
        </div>
    )
} 
 
export default Catalog;

