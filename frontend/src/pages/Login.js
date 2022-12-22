import {useForm} from "react-hook-form"
import React, {useEffect} from "react";
import '../styles/Authentification.css'
import Banner from '../components/Banner'
import Footer from "../components/Footer";
import axios from "axios";


function Login() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);

    async function postData(data){
        console.log(data)
        await axios.post(
            'http://127.0.0.1:8000/api/login',
            data,{headers: { 'Content-Type': 'application/json'}}
          ).then((response) => {
            redirection(response)
          }).catch((error)=> {
            // console.log(error)
            console.log(error)} )

            function redirection(response){
                if(response.data.utilisateur.verif == "yes"){
                    document.location.href = `http://localhost:3000/customers-list?t=${response.data.token}` 
                } else{
                    document.location.href = `http://localhost:3000/customer?t=${response.data.token}` 
                }
                
                console.log(response.data.utilisateur.verif)
            }
        
           
    }


    return (
        <React.Fragment>
            <Banner/>
            <main className="authentification">
                <form onSubmit={handleSubmit((data) => postData(JSON.stringify(data)))}> 
                    <h2>Login</h2>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" 
                        {...register("email", {
                        required: "Required",
                        })}/>
                        <span>{errors.email && errors.email.message}</span>
                    </div>
                    <div className="form-control">
                        <label htmlFor="mdp">Password</label>
                        <input type="password" name="mdp" 
                        {...register("mdp", {
                        required: "Required",
                    })}/>
                        <span>{errors.mdp && errors.mdp.message}</span>
                    </div>
                    <div className="form-control">
                        <input type="submit" id="btn" value="Login"  />
                    </div>                    
                </form>
            </main>
            <Footer/>
        </React.Fragment>
    );
  }

  
  export default Login;
  