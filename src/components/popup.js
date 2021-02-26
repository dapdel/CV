import React from 'react';
import projets from '../data/projets';
import ToutVoir from './ToutVoir';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Popup({index,changeVisibility}){
    function revenir(){
        ToutVoir();
        const section5 = document.querySelector("#section5");
        section5.scrollIntoView({behavior:'instant'});
    }
    const projet=projets[index];
    //const images = projet.imgs;
    
    return(
            <div className={`popup${index} popup abs`}>
                <div className="contenantPopup flex-v">
                    <div className="croix" onClick={function () { changeVisibility(false); revenir();}}>RETOUR <i className="fas fa-times"></i></div>
                    <div>
                        <h2>{projet.title}</h2>
                        {projet.imgs!==""?
                        <div className="slider">
                            <Splide>
                                {projet.imgs.map((images) =>(
                                    <SplideSlide>
                                    <img src={`images/projets/${images}`} alt="projet0"/>
                                </SplideSlide>
                                ))}
                            </Splide>
                        </div>:null}
                        <p>{projet.lang}</p>
                        <p className="descr">{projet.descriptif}</p>
                    </div>
                    <div className="boutons flex-h">
                        {projet.github!==""?<button><a target="blank" href={`${projet.github}`}>Voir sur Github</a></button>:null}
                        {projet.site!==""?<button><a target="blank" href={`${projet.site}`}>Voir sur le Web</a></button>:null}
                    </div>
                </div>
            </div>
        );
}
export default Popup;
                             