import React from 'react';
import projets from '../data/projets';
import ToutVoir from './toutVoir';
import { Splide, SplideSlide } from '@splidejs/react-splide';

function Popup(i){
    function cacher(){
        const popup = document.querySelector(".popup");
        popup.style.display = "none";
        ToutVoir();
        const section5 = document.querySelector("#section5");
        section5.scrollIntoView({behavior:'instant'});
    }

    return(
            <div className={`popup${i} popup`}>
                <div className="contenant">
                    <div className="croix" onClick={cacher}>X</div>
                    <h2>{projets[i].title}</h2>
                    <div className="slider">
                        <Splide>
                            <SplideSlide>
                                <img src={`images/projets/${projets[i].imgs[0]}`} alt="projet0"/>
                            </SplideSlide>
                            <SplideSlide>
                                <img src={`images/projets/${projets[i].imgs[1]}`}  alt="projet0"/>
                            </SplideSlide>
                        </Splide>
                    </div>
                    <p>Languages utilisés: {projets[i].lang}</p>
                    <p>Sur Github: {projets[i].github}</p>
                    <p>Sur le web: {projets[i].site}</p>
                </div>
            </div>
        );
}
export default Popup;