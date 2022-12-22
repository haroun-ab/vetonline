import React from "react";
import '../styles/Informations.css'
import Banner from '../components/Banner'
import Footer from "../components/Footer";


function VetoFile() {
    return (
        <React.Fragment>
            <Banner/>
            <main className="informations">
                <div className="center">
                    <h2>Veterinary informations</h2>
                    <section className="margin-top-30">
                        <div>
                            <span className="title">Name :</span> <span>Jean Dupont</span>
                        </div>
                        <div>
                            <span className="title">Address :</span> <span>3 rue de la Paix - 75016 Paris</span>
                        </div>
                        <div>
                            <span className="title">Phone number :</span> <span>0612345678</span>
                        </div>
                        <div>
                            <span className="title">Email :</span> <span>jean@hotmail.com</span>
                        </div>
                        <div>
                            <span className="title">Siret :</span> <span>78945612374125</span>
                        </div>
                        <div className="btn-container">
                            <button id="btn">Edit</button>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default VetoFile;
  