import React from 'react';
import Next from './Next';

export const Section2APropos = () => (
    
    <section id="section2" className="section sectionAPropos rel">
        <div className="chevron abs haut1 larg1" onClick={Next}>
            <i className="chevronBas fas fa-chevron-down"></i>
        </div>
        <div className="flex-h haut1 larg100 rel">
            <div className="bord larg1 coul0">
            </div>
            <div className="bord larg1 coul2 haut1 abs car1">
                </div>
            <div className="bord larglogo coul0"></div>
            <div className="bord larg1 coul0 inv5 raj"></div>
            <div className="bord larg1logo inv2 coul0"></div>
            <div className="haut1 fg"></div>
            <div className="bord larg1 coul0 inv1"></div>   
            <div className="larg1 inv1"></div>
            <div className="bord larg1 coul2"></div>
            <div className="bord larg1 coul0"></div>
        </div>
        <div className="text flex-v rel">
            <div className="bord larg1 coul0 haut1 car2 abs inv5">
            </div>
            <div className="bord larg2 coul0 haut1 titre abs coul1"><h2>A Propos</h2>
            </div>
            
            <div className="bord larg1 coul0 haut1 car4 abs inv5">
            </div>
            <div className="bord larg2 coul0 haut1 car5 abs coul0 inv3"></div>
            <p>
            Bonjour,<br/> 
                Architecte de formation, j’ai longtemps été 
                mère au foyer de 4 enfants. Actuellement, 
                les enfants devenus grands, je désire prendre 
                une autre direction et celle-ci m’a été 
                confirmée lors de ma dernière formation. 
                Le dévelopement Web est, pour moi, 
                amusement, découvertes et défis à dépasser !
                Accepteriez-vous de faire partie de mon 
                parcours ? N'hésitez pas à me contacter !
            </p>
            <blockquote>
                <cite>" Un voyage de mille kilomètres commence toujours par un premier pas"     </cite>
                <p> Lao Tseu</p>
            </blockquote>
            <div className=" larg1 haut1 car6 abs inv4">
            </div>
        </div>
    </section>
    );