
import React from "react";
import { Link } from "react-router-dom";
import '../styles/CustomersList.css'
import Banner from '../components/Banner'
import Footer from "../components/Footer";
import Clickable from "../components/Clickable";



function CustomersList() {
    return (
        <React.Fragment>
            <Banner/>
            <main className="customer-list">
                <div className="center">
                    <h2>Customers list</h2>
                    <section className="btn-container">
                    <Link style={{color: "white",margin: "auto"}} to="/new-customer"><button id="btn"><i className="fa-solid fa-plus"></i><span>New client</span></button></Link>
                    </section>
                    <section className="list">
                        <Clickable customerName="Jean Dupont" petName="Roxy" race="Chat siamois"/>
                        <Clickable customerName="Anne Michel" petName="Cerise" race="Chien chihuahua"/>
                    </section>

                </div>
            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default CustomersList;
  