import React from 'react';
import projets from '../data/projets';
import ToutVoir from './toutVoir';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function cacher(){
    const popup0 = document.querySelector(".popup0");
    popup0.style.display = "none";
    ToutVoir();
    const section5 = document.querySelector("#section5");
    section5.scrollIntoView({behavior:'instant'});
}

export const Popup0 = () =>(
    <div className="popup0 popup">
        <div className="contenant">
            <div className="croix" onClick={cacher}>X</div>
            <h2>{projets[0].title}</h2>
            <div className="slider">
            <Splide>
                <SplideSlide>
                    <img src={`images/projets/${projets[0].imgs[0]}`} alt="projet0"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={`images/projets/${projets[0].imgs[1]}`}  alt="projet0"/>
                </SplideSlide>
            </Splide>
               
            </div>
            <p>Languages utilisés: {projets[0].lang}</p>
            <p>Sur Github: {projets[0].github}</p>
            <p>Sur le web: {projets[0].site}</p>
        </div>
    </div>
    );

