import React from 'react';

export const Section0Header = () => (
    <section id="section0" className="section sectionHeader flex-h haut1">
        <div className="logo bord haut1 larglogo coul4">
            <img className="bord" src="images/logo.png" alt="logo composé de deux D Pour Daphné Delvaux avec deux balises du code intégrées" />
        </div>
        <header className="flex-v">
            <div className="flex-h haut1 coul0 larg100">
                <div className="bord haut1 larglogo coul4">
                    <img className="bord" src="images/logo.png" alt="logo composé de deux D Pour Daphné Delvaux avec deux balises du code intégrées" />
                </div>
                <div className="bord larglogo"></div>
                <div className="bord fg"></div>
                <nav className="bord larg1 flex-v coul0">
                    <div className="menu">
                        <i className="fas fa-bars"></i>
                        <p>MENU</p>
                    </div>
                </nav>
            </div>
         <div className="demibord"></div>
        </header>
    </section>
);