import {useForm} from "react-hook-form"
import React, {useEffect, useState, useRef} from "react";
import '../styles/Authentification.css'
import Banner from '../components/Banner'
import Footer from "../components/Footer";
import axios from "axios"

function Signup() {
    const { handleSubmit, register, formState: { errors } } = useForm();


    
    async function postData(data){
        console.log(data)
        await axios.post(
            'http://127.0.0.1:8000/api/signup',
            data,{headers: { 'Content-Type': 'application/json'}}
          ).then((response) => {
            redirection(response)
          }).catch((error)=> {
            // console.log(error)
            displayErrorEmail(error)} )

            function redirection(response){
                if(response.status === 201){
                    console.log(response)
                    document.location.pathname = "/signup-confirmation"
                }
            }


            function displayErrorEmail(error){
                
                if(error.name == "AxiosError" && !document.querySelector('#error-mail-msg')){
                    const errorMsg = "The email has already been taken"
                    const errorEmail = document.createElement('span');
                    errorEmail.id = "error-mail-msg"
                    errorEmail.innerText = errorMsg;
                    document.querySelector('.email').appendChild(errorEmail)
                }
             }
    }

   
    return (
        <React.Fragment>
            <Banner/>
            <main className="authentification">
            <h2>You're veterinary&nbsp;?<br/>And you want to save time&nbsp;?<br/> Join&nbsp;us&nbsp;🤗&nbsp;!</h2>
                <form onSubmit={handleSubmit((data) => postData(JSON.stringify(data)))}> 
                    <h2>Sign up</h2>
                    <div className="form-control radio_checkbox">
                        <label htmlFor="sexe"></label>
                        <div className="sexe-div">
                        <input type="radio" name="sexe" value="Mr" checked
                             {...register("sexe")}/>
                            <label htmlFor="sexe">Mr</label>
                   
                        </div>
                        <div className="sexe-div">
                            <input type="radio" name="sexe" value="Ms" 
                            {...register("sexe")}/>
                        
                            <label htmlFor="sexe">Ms</label>    
                        </div>
                        <span>{errors.sexe && errors.sexe.message}</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="nom">Name</label>
                        <input type="text" name="nom"  
                        {...register("nom", {
                            required: "Required"
                            })}/>
                        <span>{errors.nom && errors.nom.message}</span>
                    </div>
                    <div className="form-control email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" 
                        {...register("email", {
                        required: "Required",
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            message: "Expected format: example@hotmail.com"
                        }
                        })}/>
                        <span>{errors.email && errors.email.message}</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="adresse">Address</label>
                        <input type="text" name="adresse"  
                        {...register("adresse", {
                            required: "Required"
                            })}/>
                        <span>{errors.adresse && errors.adresse.message}</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="numero">Phone number</label>
                        <input type="text" name="numero" 
                        {...register("numero", {
                            required: "Required"
                            })}/>
                        <span>{errors.numero && errors.numero.message}</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="mdp">Password</label>
                        <input type="password" name="mdp" ref="mdp"
                        {...register("mdp", {
                        required: "Required", 
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z./_-\d]{8,}$/i,
                            message: "At least 8 characters (1 uppercase letter, 1 lowercase letter, 1 number)\n"
                        }})}/>
                        <span>{errors.mdp && errors.mdp.message}</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="siret">Siret</label>
                        <input type="text" name="siret" 
                        {...register("siret", {
                        required: "Required",
                        pattern: {
                            value: /^[0-9]{14,14}$/i,
                            message: "14 characters are required, only numbers"
                        }})}
                        />
                        <span>{errors.siret && errors.siret.message}</span>
                    </div>

                    <div className="form-control radio_checkbox">
                        <input type="checkbox" name="verif"  value="yes"
                        {...register("verif", {
                        required: "Required"})}
                        />
                        <label htmlFor="verif">I confirm that I am a veterinarian</label>
                        <span>{errors.verif && errors.verif.message}</span>
                    </div>
                    <div className="form-control">
                        <input type="submit" id="btn" value="Sign up" />
                    </div>                    
                </form>
            </main>
            <Footer/>
        </React.Fragment>
    );
  }

  
  export default Signup;
  