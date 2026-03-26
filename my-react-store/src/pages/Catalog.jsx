import Product from "../components/product";
import "./Catalog.css";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";
import QuantityPicker from "../QuantityPicker";

function Catalog() {
  const [products, setProducts] = useState([]); //this is a state that will hold the products from the catalog. is an array because we will have multiple products.
  const [categories, setCategories] = useState([]); //this is a state that will hold the categories from the catalogory data. is  an array because we will have multiple categories.
  const [productsToDisplay, setProductsToDisplay] = useState([]);

  function loadCatalog() {
    let service = new DataService();
    let data = service.getProducts();
    setProductsToDisplay(data); // intially display all the products.
    // extract data categories
    let cats = ["Fruits", "Berries"]; //create a placeholder for category.
    setCategories(cats); // set the categories to the placeholder.
  }

  function filter(category) {
    let list = [];
    //find the product that match the category
    for (let i = 0; i < products.length; i++) {
      let prod = products[i]; // new varieble
      if (
        prod.category === category
      ) // if this is true the category will be push, if false it will not.
      {
        list.push(prod);
      }
    }
    setProductsToDisplay(list);
  }

  const reset = () => {
    setProductsToDisplay(products); // Reset to all products
  };

  useEffect(() => {
    //this is a hook that will run when the component is mounted. it will load the data from the catalog.

    //load your data here
    let service = new DataService();
    let data = service.getProducts(); //this is a method that will return the products from the catalog.parentesis is for calling the method/ecxecute.

    setProducts(data);
    loadCatalog();
  }, []); //the empty array [] means it run only once when the component is mounted.

  return (
    <div className="catalog">
      <h1>Check our amazing products!</h1>
      <br />

      <div className="container">
        {categories.map((cat) => (
          <button key={cat} onClick={() => filter(cat)}>
            {cat}
          </button>
        ))}

        <button key="all" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="total_price">
        {productsToDisplay.map((props) => (
          <>
            <Product key={props._id} data={props} />
            <QuantityPicker price={props.price} />
          </>
        ))}
      </div>
      
    </div>
  );
}

export default Catalog;
