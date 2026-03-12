import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer"> 
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
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                </div>
            <div className="copyright">
                <p>&copy; 2024 My React Store. All rights reserved.</p>
            </div>


        </footer>
    );
};   

export default Footer;