import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Formulaire from './Formulaire';
function Pricing() {
return (
    <div>
    <section id="pricing">
        <div className="container">
        <div className="title-block">
            <h2>Tarif et Plans</h2>
            <p>Le meilleur site web pour la prise de rendez-vous Visa. N'hesitez pas vous voyez ça vaut le coup</p>
        </div>
        <div className="row">
            <div className="col-md-4" style={{marginLeft:"370px"}}>
            <div className="pricing-box">
                <h3>Version Standard</h3>
                <h6>50 D.T</h6>
                <small>seulement</small>
                <p>Prenez votre rendez-vous au bout d'une semaine</p>
                <ul>
                <li><i className="icon ion-md-checkmark-circle-outline"></i>Rapide</li>
                <li><i className="icon ion-md-checkmark-circle-outline"></i>Facile</li>
                <li><i className="icon ion-md-checkmark-circle-outline"></i>Verifé</li>
                <li><i className="icon ion-md-checkmark-circle-outline"></i>Confidentiel et sécurisé</li>
                <li>
                    <i className="icon ion-md-checkmark-circle-outline"></i>
                    Payer une fois votre rendez-vous <a style={{ marginLeft: "28px" }}>est entre vos mains</a>
                </li>
                </ul>
                <div className="text-center">
                <NavLink to={"Form"} className="btn btn-buy">Réserver maintenant</NavLink>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </div>
);
}

export default Pricing;
