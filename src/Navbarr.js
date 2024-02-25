import React from 'react';
import './App.css';
import { NavLink , Route, Routes } from 'react-router-dom';
import img1 from './images/logo.png'
import Marketing from './Marketing';
import Formulaire from './Formulaire';
import App from './App';

function Navbarr() {

const scrollToComponent = () => {
    const targetElement = document.getElementById('hero');

    if (targetElement) {
    targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
    }
};
return (
    <div>
        <nav className="navbar navbar-default navbar-expand-lg fixed-top custom-navbar">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <div className="container">
        <NavLink to={"/"} ><img src= {img1} className="img-fluid nav-logo-desktop" alt="Company Logo" style={{ maxHeight: "40px" }} /></NavLink>
        <ul className="navbar-nav ml-auto nav-right" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
        <li className="nav-item nav-custom-link">
            <NavLink  className="nav-link" to={"/"} >Acceuil <i className="icon ion-ios-arrow-forward icon-mobile"></i></NavLink>
        
        </li>
        <li className="nav-item nav-custom-link">
            <NavLink className="nav-link" to={"/"}>Produit <i className="icon ion-ios-arrow-forward icon-mobile"></i></NavLink>
        </li>
        <li className="nav-item nav-custom-link">
            <NavLink className="nav-link" to={"/"}>Témoignages <i className="icon ion-ios-arrow-forward icon-mobile"></i></NavLink>
        </li>
        <li className="nav-item nav-custom-link">
            <NavLink className="nav-link" to={"/"}>Tarif <i className="icon ion-ios-arrow-forward icon-mobile"></i></NavLink>
        </li>
        <li className="nav-item nav-custom-link">
            <NavLink className="nav-link" to={"/"}>Contact<i className="icon ion-ios-arrow-forward icon-mobile"></i></NavLink>
        </li>
        <li className="nav-item nav-custom-link btn btn-demo-small" style={{marginLeft : "10px;"}} >
        <NavLink to={""} className="nav-link">Réserver maintenant</NavLink>
        </li> 
        </ul>
    </div>
    </div>
</nav>
    </div>
)
}
export default Navbarr;