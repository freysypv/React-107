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
    <div className="container text-center mt-5 bg-opacity-20 bg-dark text-white">
      <h1>Contact Us</h1>
      <p>
        If you have any questions or inquiries, please feel free to contact us!
      </p>
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
        
    </div>
  );
};

export default Contact;