import {useForm} from "react-hook-form"
import React, {useEffect} from "react";
import '../styles/Authentification.css'
import Banner from '../components/Banner'
import Footer from "../components/Footer";
import { Link } from "react-router-dom";



function Signup_confirmation() {
    
    
    return(<React.Fragment>
        <Banner/>
        <main>
         <h2>Your account has been successfully created. You&nbsp;can&nbsp;log&nbsp;in now&nbsp;!</h2>
         <h3>👉&nbsp;<Link to='/login'>Login Page</Link></h3>
        </main>
        <Footer/>
    </React.Fragment>)
}

export default Signup_confirmation;