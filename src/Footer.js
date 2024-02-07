import React from 'react';
import './App.css'; 

function Footer() {
return (
    <div>
        <footer>
    <div className="container">
        <div className="row">
        <div className="col-md-9">
            <h5>Seo Ranking</h5>
            <ul>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">Developer API</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Video Tutorials</a></li>
            </ul>
        </div>
        <div className="col-md-3">
            <h5 className='rand'>Company</h5>
            <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque, tortor nec mattis feugiat, velit purus euismod odio, quis vulputate velit urna.</p>
            <p className='p2'><a href="mailto:sales@theseocompany.com" className="external-links">sales@theseocompany.com</a></p>
        </div>
        </div>
        <div className="divider"></div>
        <div className="row">
        <div className="col-md-6 col-xs-12">
            <a href="#"><i className="icon ion-logo-facebook"></i></a>
            <a href="#"><i className="icon ion-logo-instagram"></i></a>
            <a href="#"><i className="icon ion-logo-twitter"></i></a>
            <a href="#"><i className="icon ion-logo-youtube"></i></a>
        </div>
        <div className="col-md-6 col-xs-12">
            <small>2023 &copy; All rights reserved. Made by Visapp team 😉</small>
        </div>
        </div>
    </div>
    </footer>
    </div>
);
}

export default Footer;
