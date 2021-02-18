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
            <div className={`popup${index} popup`}>
                <div className="contenant">
                    <div className="croix" onClick={function () { changeVisibility(false); revenir();}}>X</div>
                    <h2>{projet.title}</h2>
                    <div className="slider">
                        <Splide>
                            {projet.imgs.map((images) =>(
                                <SplideSlide>
                                <img src={`images/projets/${images}`} alt="projet0"/>
                            </SplideSlide>
                            ))}
                        </Splide>
                    </div>
                    <p>Languages utilisés: {projet.lang}</p>
                    <p>Sur Github: {projet.github}</p>
                    <p>Sur le web: {projet.site}</p>
                </div>
            </div>
        );
}
export default Popup;
                             