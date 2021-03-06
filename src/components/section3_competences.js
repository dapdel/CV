import React from 'react';
import Next from './Next';

export const Section3Competences = () => (
    <section id="section3" className="section sectionCompetences rel">
        <div className="chevron abs haut1 larg1" onClick={Next}>
            <i className="chevronBas fas fa-chevron-down"></i>
        </div>
        <div className="bord larg1 haut1 coul0"></div>
       <div className="flex-h haut1 larg100 rel">
            <div className="bord larg1 coul0">
            </div>
            <div className="bord larglogo coul0 inv5"></div> 
            <div className="bord larg2 coul0 haut1 abs car1">
            </div>
        </div>
        <div className="main" >
            <div className="maingauche flex-v">
                <div className="haut flex-h">
                    <div className="bord larg1logo coul1 haut1"><h2>Competences</h2>
                    </div>
                    <div className="bord fg coul0"></div> 
                </div>
                <div className=" milieu flex-h">
                    <div className="infographisme bord fg coul0 haut2">
                        <p>
                        <span>Infographie :</span><br/>
                        Photoshop, Illustrator, XD, 
                        Animate,
                        Gimp, Inkscape,
                        Autocad, Microstation
                        </p>
                    </div>
                </div>
                <div className="bas flex-h">
                    <div className="bord fg coul0">
                    </div>
                    <div className="bord larg2 coul0 haut1"></div> 
                </div>
            </div>
            <div className="mainmilieu flex-v rel">
                <div className="bord larg1 coul0 haut1 abs car2 inv3"></div> 
                <div className="haut flex-h haut2">
                    <div className="gauche bord  haut2 coul2 larg100">
                        <p><span>Programmation :</span><br/>
                            Html5, CSS3 et SASS,   
                            JavaScript, Jquery, React, 
                            PHP, MySQL, 
                            Wordpress, 
                            Github
                        </p>

                    </div>
                    <div className="haut flex-v">
                        <div className="haut1"></div> 
                        <div className="bord  larg1 coul0 haut1"></div> 
                    </div>
                </div>
                <div className="bas flex-h haut2">
                    <div className="gauche bord fg  larg1 coul0"></div> 
                    <div className="droite larg3 flex-v">
                        <div className="bord coul3 haut1">
                        <p><span>Humaines</span> et de <span>gestion</span><br/><span>Bilinguisme </span>(fr/angl)</p>
    
                        </div>
                        <div className="haut1 flex-h">
                            <div className="bord  larg1 coul0"></div>
                            <div className="bord  larg1 coul4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="maindroite rel">
                <div className="bord larg2 haut1 abs coul4 car3 inv4"></div>
                <div className="bord larg1 haut1 coul0 car4 abs inv4"></div>
            </div>
        </div>
        <div className="bord larg1logo haut1 coul0 raj"></div>
    </section>
    );