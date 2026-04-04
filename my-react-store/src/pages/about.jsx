

function About()
{ return (
  <div className="card-body text-center container mt-5 bg-primary text-white bg-opacity-40 fs-5"> ">
    <h1>About Us!</h1>
    <p className="card-text text-info fw-bold fs-5 ">Farm to Table organic fresh produce.</p>
    <p className="card-text fst-italic ">Our mission is to provide high-quality products and Services to our Custumers.</p>
    <p className="card-text text-info fw-bold fs-5 ">We offer a wide range of fresh fruits and berries.</p>
    <div className="d-flex justify-content-center mt-4 mb-4 bg-opacity-50 bg-light p-4 rounded w-50 mx-auto h-50">
      <img src="public/img.png" alt="About Us" className=" rounded p-2 " />
      <img src="public/fruits-stand.png" alt=""  className=" img-fluid rounded w-50 p-2"/>
    </div>
    
  </div>
);

};

export default About;