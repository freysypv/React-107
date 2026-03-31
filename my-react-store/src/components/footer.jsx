import React from 'react';
import "./footer.css";

// function Footer() {
//     d
// }

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light text-center p-4 mt-5 bg-opacity-40 fs-4"> 
            <div>
                <h4>Contact Us</h4>
                <p>
                    Email: <a href="mailto:example@email.com">example@email.com</a>
                </p>
                <p>
                    Phone: <a href="tel:+1234567890">+1 (973) 567-890</a>
                </p>
                <p>
                    Address: 123 Main Street, Anytown, USA
                </p>
                
            </div>
                <div className="social-media  m-3 p-2 bg-opacity-50 bg-secondary text-light w-50 rounded-end ">
                    <a href="https://facebook.com//yourProfile" target="_blank" rel="noopener noreferrer" className='btn btn-primary text-light m-1 p-2'>Facebook</a>
                    <br />
                    <a href="https://twitter.com//yourProfile" target="_blank" rel="noopener noreferrer" className='btn btn-info text-light m-1 p-2' >Twitter</a>
                    <br />
                    <a href="https://instagram.com//yourProfile" target="_blank" rel="noopener noreferrer" className='btn btn-success text-light m-1 p-2 ' >Instagram</a>
                    <br />
                    <a href="https://youtube.com//yourProfile" target="_blank" rel="noopener noreferrer" className="btn btn-danger text-light m-2 p-2">YouTube</a>
                </div>
            <div className="copyright">
                <p>&copy; 2024 My React Store. All rights reserved.</p>
            </div>


        </footer>
    );
};   

export default Footer;