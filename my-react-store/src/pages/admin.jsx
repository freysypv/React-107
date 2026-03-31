import Product from "../components/product";

function Admin() {
    return (
        <div className="container text-center mt-5 p-4 bg-opacity-30 bg-success text-info">
            <h1 className="text-center mb-5">
                <section>
                    <h2>Add Products</h2>

                    <div className="card w-85  p-4 mb-5 mx-auto bg-opacity-50 bg-dark text-white 
                    ">
                        <div className="card-body  d-flex flex-column gap-2">
                            <div>
                                <label className="form-label">Title</label>
                                <input type="text" className="form-control" />

                            </div>

                            <div>
                                <label className="form-label">Category</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div>
                                <label className="form-label">Image</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div>
                                <label className="form-label">Price</label>
                                <input type="number" className="form-control" />
                            </div>
                            <div>
                                <button className="btn btn-primary mt-2" >
                                    Save product
                                </button>
                            </div>

                        </div>

                    </div>
                </section>
            </h1>
        </div>
    );
}

export default Admin;