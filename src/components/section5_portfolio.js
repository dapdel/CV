import React, { useState } from 'react';
import projets from '../data/projets';
import Next from './Next';
import Hide from './Hide';
import Popup from './Popup';


const Section5Portfolio = () => {
    const [popupVisible, setPopupVisible]=useState(false);
    const [popupIndex, setPopupIndex]=useState(0);
    function montrerPopup(j){
        setPopupIndex(j);
        setPopupVisible(true);
        Hide();
       
        /*
        const popup = document.querySelector(`.popup${j}`);
            popup.style.display = "block";
        */
    }
    return(
    <section id="section5" className="section sectionPortfolio rel">
        <div className="chevron abs haut1 larg1" onClick={Next}>
            <i className="chevronBas fas fa-chevron-down"></i>
        </div>
        <div className=" flex-v">
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
                                <div id="projet0" className="projet bord larg2 haut1 coul0" onClick={() => montrerPopup(0)}><img src={`images/projets/${projets[0].main_img}`} alt="" /></div>
                                <div className="bord coul0 haut1 larg1"></div>
                            </div>
                            <div className="ligne3 flex-h flexend">
                                <div className="inv4 fg"></div> 
                                <div id="projet1" className="projet bord larg2 haut1 coul0" onClick={() => montrerPopup(1)}><img src={`images/projets/${projets[1].main_img}`} alt="" /></div>
                                <div className="bord fg coul0 haut1 inv4 fg"></div> 
                                <div id="projet2" className="projet bord larg2 haut1 coul0" onClick={() => montrerPopup(2)}><img src={`images/projets/${projets[2].main_img}`} alt="" /></div>
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
                <div id="projet3" className="projet bord larg2 haut1 coul0" onClick={() => montrerPopup(3)}><img src={`images/projets/${projets[3].main_img}`} alt="" /></div>
                <div className="bord  coul0 haut1 inv4 fg"></div> 
                <div className="bord coul0 haut1 inv4 fg"></div>
                <div id="projet4" className="projet bord larg2 haut1 coul0" onClick={() => montrerPopup(4)}><img src={`images/projets/${projets[4].main_img}`} alt="" /></div> 
            </div>
            <div className="ligne5 flex-h haut1 flexend">
                <div className="inv5 fg rel">
                </div> 
                <div className="bord coul0 larg1"></div> 
                <div className=" inv5 fg"></div>
                <div className="bord coul0 fg inv5"></div>
                <div id="projet5" className="projet bord larg2 coul0" onClick={() => montrerPopup(5)}><img src={`images/projets/${projets[5].main_img}`} alt="" /></div>
                <div className="fg "></div>  
            </div>
        </div> 
        {popupVisible? <Popup index={popupIndex} changeVisibility={setPopupVisible}/>:null}
    </section>
    
    )};
    export default Section5Portfolio;