function Home(){
    return (
      <div className="container text-center mt-5 p-4 bg-opacity50 bg-light text-light-emphasis fs-5">
        <div className="card-body d-flex flex-column gap-2 bg-opacity-50 bg-light text-light-emphasis">
          <h1>Home</h1>
          <p className="text-info fs-3">Welcome to my online store!</p>
          <p className="badge text-bg-primary text-wrap width-6rem">We offer a wide range of fresh fruits and berries.</p>
          <div>
            <img src="public/image.png" alt="Fresh Fruits" className="img-fluid rounded w-50 h-50" />
          </div>
          <p className="text-danger fs-5 fw-bold">
            Our mission is to provide high-quality products and Services to our
            Custumers.
          </p>
          <div>
            <img src="public/strawberry.png.png" alt="Strawberry" className="img-fluid rounded" />
          </div>
          <p className="text-info fs-5">
            We are committed to excellent customer service and satisfaction.
          </p>
        </div>
        <div className="card-body  gap-2  bg-info-subtle bg-opacity-20 text-light-emphasis mt-4 p-4 ">
          <h2>Featured Products</h2>
          <p>Check out our latest arrivals and best sellers!</p>
            <div className="d-flex justify-content-center mt-4 mb-4 bg-opacity-50 bg-light text-light-emphasis p-4 rounded w-50 mx-auto">
              <img src="public/fruits-stand.png" alt="Fruits Stand" className="img-fluid rounded" />
            </div>
          <p>Don't miss out on our special offers and discounts!</p>
        </div>
      </div>
    );
};

export default Home;