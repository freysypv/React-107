import {useContext} from "react";
import GlobalContext from "../state/globalContext"

function Profile() {
    //const {user} = useCiontext(GlobalContext.user)
    const user = useContext(GlobalContext).user;

    console.log(user)

    return (
      <div className="container-lg w-97 mx-5 bg-secondary bg-opacity-50 fs-3 ">
        <h1 className="m-2 p-2">My Profile Page</h1>
        <p className="fs-6">Your Information</p>
        <div className=" card d-flex position-relative p-4 m-5 bg-dark text-white bg-opacity-20  w-50">
          <img
            src={user.avatar}
            className="rounded-circle"
            alt="Profile Picture"
          ></img>

          <h2 className=" fs-6 m-2">
            {user.lastName},{user.firstName}
          </h2>

          <h4 className="fs-6  ">{user.email}</h4>
        </div>
        <div className="card w-60 p-2 m-5  pb-3 bg-dark text-white bg-opacity-10">
          <h1 className="card-title fs-4 text-center m-2 p-2">Shipping Address</h1>
          <hr />
          <h4 className="fs-5">{user.address.street}</h4>
          <h2 className="fs-5">{user.address.city}</h2>
          <h2 className="fs-5">{user.address.state}</h2>
          <h3 className="fs-5">{user.address.country}</h3>
          <h3 className="fs-5">{user.address.zip}</h3>
        </div>

        
      </div>
    );
}

export default Profile;