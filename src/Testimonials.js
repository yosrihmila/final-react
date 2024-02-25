import React from 'react'
import './App.css'
function Testimonials() {
return (
    <div>
    <section id="testimonials">
    <div className="container">
    <div className="title-block">
        <h2>Ceux qui nous recommande</h2>
        <p>Plusieurs mentionnent leur expérience avec nous et les excellents résultats qu'ils ont obtenus.</p>
    </div>
    <div className="row">
        <div className="col-md-6">
        <div className="testimonial-box">
            <div className="row personal-info">
            <div className="col-md-2 col-xs-2">
                <div className="profile-picture review-one"></div>
            </div>
            <div className="col-md-10 col-xs-10">
                <h6>Joshua M. Salas <span className="rating">5 <i className="icon ion-md-star"></i></span></h6>
                <small>Rendez-vous pris pour le 11 octobre</small>
            </div>
            </div>
            <p>J'ai essayé d'obtenir un rendez-vous pendant plus de 6 mois, passant de nombreuses heures sans succès. Visapp m'a pris un rendez-vous ! J'aurais aimé les trouver plus tôt, je me serais épargné beaucoup de temps et de stress. Le prix est raisonnable compte tenu du temps que j'ai perdu à essayer d'obtenir un rendez-vous.</p>
        </div>
        </div>
        <div className="col-md-6">
        <div className="testimonial-box">
            <div className="row personal-info">
            <div className="col-md-2 col-xs-2">
                <div className="profile-picture review-one"></div>
            </div>
            <div className="col-md-10 col-xs-10">
                <h6>Michael Edwards <span className="rating">5 <i className="icon ion-md-star"></i></span></h6>
                <small>Rendez-vous pris pour le 12 novembre</small>
            </div>
            </div>
            <p>Très utile et je recommande à 100%, leur communication est de premier ordre ! !!!</p>
        </div>
        </div>
    </div>
    </div>
</section>
    </div>
)
}

export default Testimonials;