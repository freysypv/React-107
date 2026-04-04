import { useState } from "react";



function Contact(){
  //  useState is the unstable_setDevServerHooks, setusestate is the function that we use to update the value of isEmailVisible
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  function showEmail(){
    setIsEmailVisible(true);
  }
  function hideEmail(){
    setIsEmailVisible(false);
  }
  return (
    <div className="container text-center mt-5 bg-opacity-20 bg-dark text-white p-4 rounded w-85 mx-auto fs-5">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, please feel free to contact us!
      </p>
      <img
        src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="img-fluid rounded w-50 h-50 mb-4 mt-4 mx-auto d-block"
      />
      <p className="card-text ">working hours: 9:00 AM - 5:00 PM EST</p>
      <p className="card-text">Phone: +1 (555) 123-4567</p>
      <p className="card-text">Address: 123 Main Street, Anytown, USA</p>

      {isEmailVisible == true ? (
        <p className="fs-4 text-secondary ">freysypv@hotmail.com</p>
      ) : (
        <p className="fs-4 text-primary ">
          click the button bellow to see my email
        </p>
      )}
      <button className="btn btn-primary m-2 p-2" onClick={showEmail}>
        Show my Email
      </button>
      <button className="btn btn-secondary m-2 p-2" onClick={hideEmail}>
        Hide my Email
      </button>

      <div className="d-flex justify-content-center mt-4  bg-opacity-50 bg-light text-light p-4 rounded w-75 mx-auto">
        <img
          src="public/image.png"
          alt="Contact Us"
          className="img-fluid rounded w-50 h-400   m-2 p-2"
        />
        <img
          src="https://images.unsplash.com/photo-1732472581875-89ff83f18439?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="" className="img-fluid rounded w-50 h-40 p-2"
        />
      </div>
    </div>
  );
};

export default Contact;