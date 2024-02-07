import React from 'react';
import './App.css';
import img1 from './images/logo.png'
function Navbar() {
return (
    <div>
        <nav className="navbar navbar-default navbar-expand-lg fixed-top custom-navbar">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <div className="container">
        <a href="#"><img src= {img1} className="img-fluid nav-logo-desktop" alt="Company Logo" style={{ maxHeight: "40px" }} /></a>

        <ul className="navbar-nav ml-auto nav-right" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
        <li className="nav-item nav-custom-link">
            <a className="nav-link" href="index.html">Acceuil <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
        </li>
        <li className="nav-item nav-custom-link">
            <a className="nav-link" href="#marketing">Produit <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
        </li>
        <li className="nav-item nav-custom-link">
            <a className="nav-link" href="#testimonials">Témoignages <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
        </li>
        <li className="nav-item nav-custom-link">
            <a className="nav-link" href="#pricing">Tarif <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
        </li>
        <li className="nav-item nav-custom-link btn btn-demo-small" style={{marginLeft : "10px;"}} >
            <a className="nav-link" href="#">Réserver maintenant<i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
        </li>
        </ul>
    </div>
    </div>
</nav>
    </div>
)
}

export default Navbar
