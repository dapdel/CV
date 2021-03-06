/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Next from './Next';

export const Section1Accueil = () => (
    <section id="section1" className="section sectionAccueil rel coul0">
        <div className="chevron abs haut1 larg1" onClick={Next}>
            <i className="chevronBas fas fa-chevron-down"></i>
        </div>
        <div className="flex-h">
            <div className="gauche flex-v inv4">
                <div className="bord haut1 larg1"></div>
                <div className="bord haut2 rel coul1">
                    <a className="lien accueil" href="#">Accueil</a>
                </div>
                <div className="bord haut1"></div>
                <nav className="midvis bord haut2 rel">
                    <a className="lien parcoursbis" href="#section4">Parcours</a>
                </nav>
                <div className="midcache bord haut2 rel">
                </div>
            </div>
            <div className="milieu-gauche flex-v fg">
                <div className="haut flex-h">
                    <div className="gauche flex-v fg">
                        <div className="haut flex-h haut1">
                            <div className="bord larglogo coul4">
                                <img className="bord" src="images/logo.png" alt="logo composé de deux D Pour Daphné Delvaux avec deux balises du code intégrées" />
                            </div>
                            <div className="bord fg"></div>
                            <div className="bord larg1 inv3"></div>
                        </div>
                        <div className="bas flex-h haut1">
                            <nav className="bord midvis larg1logo">
                                <a className="lien portfoliobis portfolio" href="#section5">Portfolio</a>
                            </nav>
                            <div className="midcache bord larg1logo inv5">
                            </div>
                            <div className="bord fg"></div>
                        </div>
                    </div>
                    <div className="droite  flex-h haut2 inv4">
                        <nav className="gauche bord larg1 rel">
                            <a className="lien competences" href="#section3">Competences</a>
                        </nav>
                        <div className="droite  flex-v">
                            <div className="bord  haut1"></div>
                            <div className="bord haut1 larg1 coul3"></div>
                        </div>
                    </div>
                </div>
                <div className="milieu flex-h">
                    <div className="gauche flex-v larglogo inv5">
                        <div className="bord haut1 larglogo"></div>
                        <nav className="bord haut2 rel larglogo">
                            <a className="aPropos lien" href="#section2">A Propos</a>
                        </nav>
                    </div>
                    <div className="droite flex-v fg">
                        <div className="haut flex-h larg100">
                            <div className="nom bord haut2 fg flex-h coul2">
                            <h1 className="dapdel">
                                    Daphne Delvaux
                                </h1>
                            </div>
                            <div className="droite flex-v">
                                <div className="haut flex-h haut1">
                                    <div className="bord larg1 inv1"></div>
                                    <div className="bord larg1 inv3"></div>
                                </div>
                                <div className="bas bord haut1 inv3">
                                </div>
                            </div>
                        </div>
                        <div className="bas flex-h haut1">
                            <div className="bord fg inv4"></div>
                            <div className="bord larg3 front coul4">
                                <h2 className="dev">
                                    Front-end Developer
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bas flex-h haut1">
                    <div className="bord larg2 haut1 raj"></div>
                    <nav className="bord larg1logo fin">
                        <a className="lien contact" href="#section7">Contact</a>
                    </nav>
                    <div className="bord fg inv4">
                        </div>
                    <div className="bord larg2 inv3"></div>
                </div> 
            </div>
            <div className="milieu-droite flex-v inv2">
                <nav className="haut bord haut1">
                    <a className="lien portfolio" href="#section5">Portfolio</a>
                </nav>
                <div className="milieu flex-h">
                    <div className="gauche flex-v fg">
                        <div className="bord haut3"></div>
                        <div className="bord haut1"></div>
                    </div>
                    <div className="doite flex-v larg1">
                        <div className="bord haut1"></div>
                        <div className="bord haut1"></div>
                        <div className="bord haut2"></div>
                    </div>
                </div>
                <nav className="bas bord haut1">
                    <a className="lien parcours" href="#section4">Parcours</a>
                </nav>
            </div>
            <div className="droite flex-v">
                <div className="bord haut1 larg1">
                </div>
                <div className="bord haut1"></div>
                <nav className="bord haut2 rel">
                    <a className="lien interets" href="#section6">Interets</a>
                </nav>
                <div className="bord haut1"></div>
                <div className="bord haut1">
                </div>

            </div>
        </div>
    </section>

);