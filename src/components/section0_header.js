import React from 'react';

function variationMenu() {
    console.log("click");
    const divMenu = document.querySelector("#menu>div");
    const ulMenu = document.querySelector("#menu>ul");
    if (divMenu.style.width === "0px"){
        divMenu.style.width = "100vw";
        ulMenu.style.width = "230px";
        ulMenu.style.padding = "unset"; 
    } else {
        divMenu.style.width = "0px";
        ulMenu.style.width = "0px";
        ulMenu.style.padding = "0px"; 
    }
}


export const Section0Header = () => (
    <section id="section0" className="section sectionHeader flex-h haut1">
        <a href="#section1"><div className="logo bord haut1 larglogo coul4">
            <i className ="fas fa-sort-down abs fleche"></i>
            <img className="bord" src="images/logo.png" alt="logo composé de deux D Pour Daphné Delvaux avec deux balises du code intégrées" />
        </div>
        </a>
        <header className="flex-v">
            <div className="flex-h haut1 coul0 larg100">
                <div className="bord haut1 larglogo coul4 rel">
                    <img className="bord" src="images/logo.png" alt="logo composé de deux D Pour Daphné Delvaux avec une balise de code intégrée" />
                </div>
                <div className="bord larglogo"></div>
                <div className="bord fg"></div>
                <nav className="menu bord larg1 flex-v coul0" onClick={variationMenu}>
                        <i className="fas fa-bars"></i>
                        <p>MENU</p>
                </nav>
            </div>
         <div className="demibord"></div>
        </header>
        <nav id="menu" className="">
            <div></div>
            <ul onClick={variationMenu}>
                <li><a href="#section1">Accueil</a></li>
                <li><a href="#section2">A&nbsp;propos</a></li>
                <li><a href="#section3">Competences</a></li>
                <li><a href="#section4">Parcours</a></li>
                <li><a href="#section5">Portfolio</a></li>
                <li><a href="#section6">Interets</a></li>
                <li><a href="#section7">Contact</a></li>
            </ul>
        </nav>
   
    </section>
);