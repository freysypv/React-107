import Product from "../components/product";
import{useState} from "react";

function Admin() {
    // const [state, setState] = useState(initialState);
    const [productTitle, setProductTitle] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [products, setProducts] = useState([]);

    function saveProduct() {
        console.log("Saving product");
        const product = {
            title: productTitle,
            category: productCategory,
            image: productImage,
            price: productPrice,
        };

        setProducts([...products, product]); // this is a way to add a new product to the products array. we use the spread operator ... 
        
        setProductTitle("");
        setProductCategory("");
        setProductImage("");
        setProductPrice("");

    }



    return (
      <div className="container text-center mt-5 p-4 bg-opacity-30 bg-success text-info rounded-3 fs-5">
        <h1 className="text-center mb-5">
          <section>
            <h2>Add Products</h2>

            <div className="card w-85  p-4 mb-5 mx-auto bg-opacity-50 bg-dark text-white rounded-3">
              <div className="card-body  d-flex flex-column gap-2">
                <div>
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={productTitle}
                    // onchange={handleChange}
                    onChange={(event) => setProductTitle(event.target.value)}
                  />
                </div>

                <div>
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    value={productCategory}
                    onChange={(event) => setProductCategory(event.target.value)}
                  />
                </div>
                <div>
                  <label className="form-label">
                    Image <span className="text-secondary fs-5">(URL)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="https://www.image.com/1"
                    value={productImage}
                    onChange={(event) => setProductImage(event.target.value)} // this is a way to update the value
                  />
                </div>
                <div>
                  <label className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    value={productPrice}
                    onChange={(event) =>
                      setProductPrice(Number(event.target.value))
                    }
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={saveProduct}
                  >
                    Save product
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-5 w-75">
              <h5> Products List</h5>
              {products.length === 0 ? 
                <p className="text-secondary fs-5">No products added yet.</p>
               : (
                <div className='row space-between'>{ 
                    products.map(product => (
                        <div key={product.title} className='col-md-4'>
                            <div className='card h-100'>
                                <img src={product.image} alt={product.title} className="card-img-top" />
                           
                                <div classname="card-body">
                                    <p>{product.category}</p>
                                    <h5>{product.title}</h5>
                                    <h5>${product.price.toFixed(2)}</h5>
                                </div>
                            </div>
                        </div>
                ))}</div>
              )}

              {/* <pre>{JSON.stringify(products)}</pre> */}
            </div>
          </section>
        </h1>
      </div>
    );
}

export default Admin;