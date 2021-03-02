import React from 'react';
import Next from './Next';

export const Section4Parcours = () => (
    <section id="section4" className="section sectionParcours rel">
        <div className="chevron abs haut1 larg1" onClick={Next}>
            <i className="chevronBas fas fa-chevron-down"></i>
        </div>
        <div className="bord larg1 haut1 coul0 car6 inv3 abs"></div>
        <h2 className="titre bord larg2 haut1 coul1">
        Parcours</h2>
        <div className="tout flex-v">
            <div className="bord sstitre haut1 larg2 coul2 rel raj"><h3 className="experiences abs ">Experiences</h3></div>
            <div className="haut flex-h">
                <div className="bord sstitre larg1 coul2 rel inv4"><h3 className="experiences abs ">Experiences</h3></div>
                <div className="haut-droite flex-v">
                    <div className="flex-h">
                        <p className="date">2018&#x2011;2019</p>
                        <p className="info">Conseillère en accessibilité (PFI) 
                            chez Plain-Pied à Namur             
                        </p>
                    </div>
                    <div className="flex-h">
                        <p className="date">2015&#x2011;2020</p>
                        <p className="info">Chef de chœur à la paroisse St Lambert
                            à Lasne            
                        </p>
                    </div>
                    <div className="flex-h">
                        <p className="date">2010&#x2011;2018</p>
                        <p className="info">Assistante chef de groupe pour la FSE
                            à La Hulpe (scoutisme)            
                        </p>
                    </div>
                    <div className="flex-h">
                        <p className="date">2008&#x2011;2015</p>
                        <p className="info">Catéchiste pour le secteur de Lasne            
                        </p>
                    </div>
                </div>
            </div>
            <div className="bas flex-h">
                <div className="bas-gauche flex-v">
                    <div className="flex-h">
                        <div className="bord sstitre haut1 coul3 rel larg2 raj"><h3 className="formations abs">Formations</h3></div>
                    </div>
                    <div className="flex-h">
                        <p className="info">Webmaster - Front End Developer 
                        chez Interface3 à Bruxelles               
                        </p>
                        <p className="date">2020&#x2011;2021</p> 
                    </div>
                    <div className="flex-h">
                        <p className=" info">Certificat d’Aptitude Pédagogique
                        au Centre de formation pour les secteurs infirmier
                        et de santé de l‘ACN à Bruxelles               
                        </p>
                        <p className="date">2006&#x2011;2008</p>
                    </div>
                    <div className="flex-h">
                        <p className="info">  Etudes et obtention du titre d’Architecte
                        à l’institut Supérieur d’Architecture Saint-Luc à Bruxelles               
                        </p>
                        <p className="date">1991&#x2011;1996</p>
                    </div>
                    <div className="flex-h">
                        <p className="info">   Etudes secondaires à la Frankfurt International School
                        et obtention du Bac International (équivalent CESS)              
                        </p>
                        <p className="date">1985&#x2011;1989</p>
                    </div>
                </div>
                <div className="bord sstitre larg1 coul3 rel inv4"><h3 className="formations abs">Formations</h3></div>
                <div className="larg1 haut1 inv4"></div>
            </div>
        </div>
        <div className="bord larg1 haut1 coul0 car2 inv3 abs"></div>
    </section>
    );