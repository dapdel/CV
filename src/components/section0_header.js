import React from 'react';
/*

const menu = document.querySelector(".menu");
menu.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click");
  const divMenu = document.querySelector("div#menu");
  const ulMenu = document.querySelector("ul#menu");
  divMenu.style.width = "0px";
  ulMenu.style.width = "0px";
  ulMenu.style.padding = "0px";
});

ou 

function variationMenu(e) {
    e.preventDefault();
    etc...
avec onClick={variationMenu} sur div menu...

mais rien ne fonctionne
*/
export const Section0Header = () => (
    <section id="section0" className="section sectionHeader flex-h haut1">
        <div className="logo bord haut1 larglogo coul4">
            <img className="bord" src="images/logo.png" alt="logo composé de deux D Pour Daphné Delvaux avec deux balises du code intégrées" />
        </div>
        <header className="flex-v">
            <div className="flex-h haut1 coul0 larg100">
                <div className="bord haut1 larglogo coul4">
                    <img className="bord" src="images/logo.png" alt="logo composé de deux D Pour Daphné Delvaux avec une balise de code intégrée" />
                </div>
                <div className="bord larglogo"></div>
                <div className="bord fg"></div>
                <nav className="menu bord larg1 flex-v coul0">
                        <i className="fas fa-bars"></i>
                        <p>MENU</p>
                </nav>
            </div>
         <div className="demibord"></div>
        </header>
    </section>
);