import React from 'react';

function retourAccueil() {
    let scrollPos = window.scrollY;
    let i = scrollPos;
    let int = setInterval(function() {
        window.scrollTo(0, i);
        i -= 100;
        if (i <= 100) {
            window.scrollTo(0, 0);
            clearInterval(int);}
    }, 20); 
}
function viderFormulaire() {
    const envoye = document.querySelector(".envoye");
    setTimeout(function(){
        const formulaire = document.querySelector("#contact-form");
        formulaire.reset();
        envoye.style.display="block";
    },300);
    setTimeout(function(){
        envoye.style.display="none";
    },5000);
}

export const Section7Contact = () => (
    <section id="section7" className="section sectionContact">
        <div className="flex-h">
            <div className="bord haut1 larg2 raj coul0"></div>
            <div className=" haut1 larg2 raj "></div>
            <div className="bord haut1 fg raj coul0"></div>
        </div>
        <div className="flex-h coul0">
            <div className="inv3">
                <div className="bord haut3 larg1"></div>
                <div className="bord haut1"></div>
                <div className="bord haut2"></div>
            </div>
            <div className="principale flex-h larg100" >
                <div className="gauche flex-v">
                    <div className="haut flex-h haut1 inv4">
                        <div className="bord larglogo"></div>
                        <div className="bord fg"></div>
                    </div>
                    <div className="flex-h inv4">
                        <div className="bord fg coul2"></div>  
                        <div className="bord haut2 larg2 coul0"><img src="images/daphneblackwhite.png" alt="Daphné Delvaux"/>
                        </div> 
                    </div>
                    <div className="flex-h">
                        <div className="bord haut2 fg">
                            <p>Daphné Delvaux de Fenffe <br/>
                            GSM: 0472545553 <br/>
                            ddelvaux71@gmail.com</p>
                        </div>
                        <div className="bord haut2 larg2 raj coul4"><img src="images/daphne.png" alt="Daphné Delvaux"/></div>
                    </div>
                    <div className="haut1 flex-h">
                        <div className="bord cv flex-v">
                        <a target="blank" href="https://drive.google.com/file/d/1TywDL6oJ5kW4hweaQcgt28BIvdii7asI/view?usp=sharing" rel="noreferrer">Vue/Impression CV</a>
                           
                        </div>
                        <div className="bord fg"></div>
                        <div className="in bord larg1 coul4 raj">
                            <a href="https://www.linkedin.com/in/daphne-delvaux" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="centre fg">
                    <div className="haut flex-h haut1">
                        <div className="bord larg1 raj"></div>
                        <div className="bord larg2 coul1"><h2>Contact</h2></div> 
                        <div className="bord fg"></div>
                    </div>
                    <form id="contact-form" >
                        <div className=" flex-h">
                            <div className=" flex-v fg">
                                <div className="bord haut1 flex-v">
                                    <input type="hidden" name="contact_number"/>
                                    <label htmlFor="user_name">Nom:</label>
                                    <input
                                        type="text"
                                        id="user_name"
                                        name="user_name"
                                        placeholder="Ex: Martin Dupond"
                                        required
                                        />
                                </div>
                                <div className="bord haut1 flex-v">
                                    <label htmlFor="mail">Adresse mail:</label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        placeholder="Ex: martin.dupond@gmail.com"
                                        required
                                        />
                                </div>
                            </div>
                            <div className="bord haut2 larg1"></div>
                        </div>
                        <div className="bord haut2 larg100 flex-v">
                            <label htmlFor="mail">Message:</label><br />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Veuillez écrire votre message"
                                required
                            ></textarea>
                        </div>
                        <div className="haut1 flex-h">
                            <div className="bord larg1"></div>
                            <div className="fg coul3 rel"><div className="envoye bord haut1 coul3 larg100 abs"><p>Message envoyé !</p></div><input className="bord envoyer" type="submit" value="Envoyer" onClick={viderFormulaire} /></div>
                        </div>
                    </form>
                </div>
                <div className="droite larg1 inv4">
                    <div className="bord haut1"></div>
                    <div className="bord haut1"></div>
                    <div className="in bord haut1 coul4">
                        <a href="https://www.linkedin.com/in/daphne-delvaux" target="_blank" rel="noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="bord haut2"></div>
                    <div className="bord haut1" onClick={retourAccueil}>
                        <i className="flechesHaut fas fa-angle-double-up"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );