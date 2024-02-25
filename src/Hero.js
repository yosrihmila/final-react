import React from 'react';
import './App.css';
import img2 from './images/removedvisa.png'
import { NavLink , Routes , Route} from 'react-router-dom';
import Formulaire from './Formulaire';

function Hero() {
return (
    <div>
    <section id="hero">
    <div className="container">
    <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
        <img src={img2} alt="Demo image" style={{marginTop: "150px", width: "500px" , maxHeight: "320px;"}} />
        </div>
        <div className="col-md-7 content-box hero-content">
        <span>Rendez-vous visa</span>
        <h1>Trouvez un rendez-vous visa<b className="type-js"><b className="text-js">en un clin d'œil</b></b></h1>
        <p>Plus besoin d'actualiser pendant des heures, nous vous facilitons la prise des rendez-vous.</p>
        <NavLink to="Form" className="btn btn-regular">Réserver maintenant</NavLink>
        </div>
    </div>
    </div>
</section>
    </div>
)
}

export default Hero;