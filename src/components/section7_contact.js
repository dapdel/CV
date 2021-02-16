import React from 'react';

export const Section7Contact = () => (
    <section id="section7" className="section sectionContact">
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
                        <div className="bord haut2 larg2 coul4"><img src="images/daphneblackwhite.png" alt="Daphné Delvaux"/>
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
                        <div className="bord cv">
                        <a target="blank" href="https://drive.google.com/file/d/1k0j8tBBYbN9f3t0hm825e8hAfeXvGi0J/view?usp=sharing">Vue/Impression CV</a>
                           
                        </div>
                        <div className="bord fg"></div>
                        <div className="in bord larg1 coul4 raj"><i class="fab fa-linkedin-in"></i></div>
                    </div>
                </div>
                <div className="centre fg">
                    <div className="haut flex-h haut1">
                        <div className="bord larg1 raj"></div>
                        <div className="bord larg2 coul1"><h2>Contact</h2></div> 
                        <div className="bord fg"></div>
                    </div>
                    <form action="mailto:daphne.vanraemdonck@skynet.be" method="post" enctype="text/plain">
                        <div className=" flex-h">
                            <div className=" flex-v fg">
                                <div className="bord haut1 flex-v">
                                    <label for="name">Nom:</label><br />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Ex: Martin Dupond"
                                        required
                                        />
                                </div>
                                <div className="bord haut1 flex-v">
                                    <label for="mail">Adresse mail:</label><br />
                                    <input
                                        type="text"
                                        id="mail"
                                        name="mail"
                                        placeholder="Ex: martin.dupond@gmail.com"
                                        required
                                        />
                                </div>
                            </div>
                            <div className="bord haut2 larg1"></div>
                        </div>
                        <div className="bord haut2 larg100 flex-v">
                            <label for="mail">Message:</label><br />
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Veuillez écrire votre message"
                                required
                            ></textarea>
                        </div>
                        <div className="envoyer haut1 flex-h">
                            <div className="bord larg1"></div>
                            <div className="bord fg coul3"><input type="submit" value="Envoyer" /></div>
                        </div>
                    </form>
                </div>
                <div className="droite larg1 inv4">
                    <div className="bord haut1"></div>
                    <div className="bord haut1"></div>
                    <div className="in bord haut1 coul4"><i class="fab fa-linkedin-in"></i></div>
                    <div className="bord haut2"></div>
                    <div className="bord haut1"></div>
                </div>
            </div>
        </div>
    </section>
    );