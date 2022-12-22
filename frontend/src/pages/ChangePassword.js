import {useForm} from "react-hook-form"
import React, {useEffect} from "react";
import '../styles/Forms.css'
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function ChangePassword() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <React.Fragment>
            <Banner/>
            <main className="form">
            <h2>Change of password</h2>
                <form onSubmit={handleSubmit(onSubmit)}> 
                    <section className="form-section"> 
                        <div className="form-control">
                            <label htmlFor="password">Actual password</label>
                            <input type="password" name="password"/>
                        </div>              
                        <div className="form-control">
                            <label htmlFor="password">New password</label>
                            <input type="password" name="password"/>
                        </div>     
                        <div className="form-control">
                            <label htmlFor="password">Confirm new password</label>
                            <input type="password" name="password"/>
                        </div> 
                        <div className="form-control btn-container">
                            <input className="margin-top-30" type="submit" id="btn" value="Change" />
                        </div>    
                    </section>
                    
                </form>
            </main>
            <Footer/>
        </React.Fragment>
    );
  }

  
  export default ChangePassword;