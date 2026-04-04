import Product from "../components/product";
// import "./catalog.css";
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
    <div className="catalog text-center mt-5 p-4 bg-opacity-30 bg-success text-info rounded-3 fs-5">
      <h1 className="badge text-bg-primary text-wrap width-6rem p-2 m-2 fs-6 ">Check our amazing products!</h1>
      <br />

      <div className="container d-flex gap-2 justify-content-center mt-4 rounded bg-opacity-50 bg-light text-light p-4 fs-6 w-90 mx-auto flex-wrap flex-direction-column">
        {categories.map((cat) => (
          <button className=" rounded" key={cat} onClick={() => filter(cat)}>
            {cat}
          </button>
        ))}

        <button className="rounded" key="all" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="total_price d-flex flex-column gap-2 justify-content-space-between mt-4 rounded bg-opacity-50 bg-light text-light p-4 fs-6 w-50 mx-auto flex-wrap flex-direction-column">
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
