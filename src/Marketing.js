import React from 'react'
import img3 from './images/bro_8.png'
function Marketing() {
return (
    <div>
    <section id="marketing">
    <div className="container">
    <div className="row">
        <div className="col-md-6">
        <div className="content-box">
            <span>Un Rendez-vous en moins d'une semaine</span>
            <h2>N'hesitez pas</h2>
            <p>Chez Visapp, notre spécialité est de rendre votre processus de prise de rendez-vous aussi paisible et fluide 
            que possible. Grâce à nos services, vous aurez moins de soucis à vous faire en obtenant des rendez-vous rapides, 
            précis et sans stress. <br/> <br/>
            Avons-nous lu dans vos pensées ? <br/>
            Nous le savons, car nous étions à votre place.</p>
        </div>
        </div>
        <div className="col-md-5" style={{float: "right" , marginLeft: "95px"}}>
            <img src={img3} className="img-fluid" alt="Demo image" style={{maxHeight: "700px"}} />
        </div>
    </div>
    </div>
</section>
    </div>
)
}

export default Marketing
