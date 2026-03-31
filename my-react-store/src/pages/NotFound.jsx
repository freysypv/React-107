import {Link} from "react-router-dom";

function NotFound(){
    return (
        <div className="container text-center mt-5 bg-opacity-70 bg-secondary text-white">
            <h1>404- Not Found</h1>
            <p> Oooops!  Sorry, the page you are looking for does not exist.</p>

            <Link to="/" className="btn btn-dark mt-3 ">
                Go back Home
            </Link>


        </div>
    );
}

export default NotFound;