import React from "react";
import '../styles/Informations.css'
import Banner from '../components/Banner'
import Footer from "../components/Footer";


function CustomerFile() {
    return (
        <React.Fragment>
            <Banner/>
            <main className="informations ">
                <div className="center">
                    <h2>Customer informations</h2>
                    <section>
                        <h3>PET OWNER</h3>
                        <div>
                            <span className="title">Name :</span> <span>Jean Dupont</span>
                        </div>
                        <div>
                            <span className="title">Address :</span> <span>3 rue de la Paix - 75016 Paris</span>
                        </div>
                        <div>
                            <span className="title">Email :</span> <span>jean@hotmail.com</span>
                        </div>
                        <div>
                            <span className="title">Phone number :</span> <span>0612345678</span>
                        </div>
                    </section>
                    <section>
                        <h3>PET</h3>
                        <div>
                            <span className="title">Race :</span> <span>Chat siamois</span>
                        </div>
                        <div>
                            <span className="title">Name :</span> <span>Roxy</span>
                        </div>
                        <div>
                            <span className="title">Date of birth :</span> <span>07/05/2020</span>
                        </div>
                        <div className="consultations">
                            <span className="title">Last consultations :</span> 
                            <ul>
                                <li>27/09/2022 14:35 - Vaccin contre la chlamydiose</li>
                                <li>15/09/2022 9:35 - Visite médicale, pas de soucis particulier</li>
                            </ul>
                        </div>
                    </section>

                    <div className="btn-container">
                        <button id="btn">Edit</button>
                        <button id="send-mail" className="fa-solid fa-envelope"></button>
                    </div>
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default CustomerFile;
  