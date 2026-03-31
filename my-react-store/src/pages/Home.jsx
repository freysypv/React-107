function Home(){
    return (
      <div className="container text-center mt-5 p-4 bg-opacity50 bg-light text-light-emphasis fs-5">
        <div className="card-body d-flex flex-column gap-2 bg-opacity-50 bg-light text-light-emphasis">
          <h1>Home</h1>
          <p className="text-info">Welcome to my online store!</p>
          <p>We offer a wide range of fresh fruits and berries.</p>
          <p>
            Our mission is to provide high-quality products and Services to our
            Custumers.
          </p>
          <p>
            We are committed to excellent customer service and satisfaction.
          </p>
        </div>
        <div className="card-body  gap-2  bg-info-subtle bg-opacity-20 text-light-emphasis mt-4 p-4 ">
          <h2>Featured Products</h2>
          <p>Check out our latest arrivals and best sellers!</p>
          <p>Don't miss out on our special offers and discounts!</p>
        </div>
      </div>
    );
};

export default Home;