import React from 'react';
import projets from '../data/projets';

export const Section5Portfolio = () => (
    <section id="section5" className="section sectionPortfolio flex-v"> 
        <div className="flex-h flexend">
            <div className="bord haut1 coul0 larg1"></div>
        </div>
        <div className="flex-h flexend larg100">
            <div className="contenant flex-v"> 
                <div className="ligne1 flex-h flexend">
                    <div className="bord larg2 haut1 coul1"><h2>Portfolio</h2></div>  
                </div>
                <div className="flex-h flexend larg100">
                    <div className="flex-v larg100">
                        <div className="ligne2 flex-h flexend">
                            <div className="bord  haut1 coul3 inv5 larg1"></div>
                            <div className="fg rel">
                                <div className="bord coul0 haut1 larg1  car1 abs"></div>
                            </div> 
                            <div className="bord  coul0 inv4 fg"></div> 
                            <div id="projet0" className="bord larg2 haut1 coul0"><img src={`images/projets/${projets[0].main_img}`} alt="" /></div>
                            <div className="bord coul0 haut1 larg1"></div>
                        </div>
                        <div className="ligne3 flex-h flexend">
                            <div className="inv4 fg"></div> 
                            <div id="projet1" className="bord larg2 haut1 coul0"><img src={`images/projets/${projets[1].main_img}`} alt="" /></div>
                            <div className="bord fg coul0 haut1 inv4 fg"></div> 
                            <div id="projet2" className="bord larg2 haut1 coul0"><img src={`images/projets/${projets[2].main_img}`} alt="" /></div>
                        </div>
                    </div>
                    <div className="bord haut2 coul0 inv5 larg1"></div>
                </div>
            </div>
            <div className="flex-v inv3 larg1">
                <div className="bord  haut2 coul0 larg1"></div>
                <div className="bord  haut1 coul0 larg1"></div> 
            </div>  
        </div>
        <div className="ligne4 flex-h flexend">
            <div className="fg inv4"></div> 
            <div className="bord haut1 coul0 inv4 fg"></div>
            <div id="projet3" className="bord larg2 haut1 coul0"><img src={`images/projets/${projets[3].main_img}`} alt="" /></div>
            <div className="bord  coul0 haut1 inv4 fg"></div> 
            <div className="bord coul0 haut1 inv4 fg"></div>
            <div id="projet4" className="bord larg2 haut1 coul0"><img src={`images/projets/${projets[4].main_img}`} alt="" /></div> 
        </div>
        <div className="ligne5 flex-h haut1 flexend">
            <div className="inv5 fg rel">
            </div> 
            <div className="bord coul0 larg1"></div> 
            <div className=" inv5 fg"></div>
            <div className="bord coul0 fg inv5"></div>
            <div id="projet5" className="bord larg2 coul0"><img src={`images/projets/${projets[5].main_img}`} alt="" /></div>
            <div className="fg "></div>  
        </div>



    </section>
    
    );