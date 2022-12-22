import {useForm} from "react-hook-form"
import React, {useEffect} from "react";
import '../styles/Forms.css'
import Banner from "../components/Banner";
import Footer from "../components/Footer";

function EditCustomer() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);

    useEffect(()=> {console.log(document.querySelector('input[name="email"]').value)}) 
    return (
        <React.Fragment>
            <Banner/>
            <main className="form">
            <h2>Edit Customer informations</h2>

                <form onSubmit={handleSubmit(onSubmit)}> 
                    <section className="form-section">
                        <h3>PET OWNER</h3>
                        <div className="form-control radio_checkbox">
                            <label htmlFor="sexe"></label>
                            <div className="sexe-div">
                                <input type="radio" name="sexe" checked/>
                                <label htmlFor="sexe">Mr</label>    
                            </div>
                            <div className="sexe-div">
                                <input type="radio" name="sexe"/>
                                <label htmlFor="sexe">Mrs</label>    
                            </div>
                        </div>
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <input type="name" name="name" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="address">Address</label>
                            <input type="address" name="address"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="phone">Phone number</label>
                            <input type="phone" name="phone"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                        </div>              
                    </section>
                  
                    <section className="form-section">
                        <h3>PET</h3>
                        <div className="form-control radio_checkbox">
                            <label htmlFor="sexe-animal">Sexe</label>
                            <div className="sexe-div">
                                <input type="radio" name="sexe-animal" checked/>
                                <label htmlFor="sexe-animal">M</label>    
                            </div>
                            <div className="sexe-div">
                                <input type="radio" name="sexe-animal"/>
                                <label htmlFor="sexe-animal">F</label>    
                            </div>
                        </div>
                        <div className="form-control">
                            <label htmlFor="race">Pet race</label>
                            <input type="race" name="race" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="name">Pet name</label>
                            <input type="name" name="name"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="date-birth">Date of birth</label>
                            <input type="date"  name="date-birth"/>
                        </div>
                        <div className="form-control">
                            <label htmlFor="last">Last consultation</label>
                            <input type="datetime-local" name="last" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="reason">Reason of consultation (30&nbsp;characters)</label>
                            <input type="text" name="reason"/>
                        </div>
                    </section>
                    <div className="form-control btn-container">
                        <input type="submit" id="btn" value="Save" />
                        <button type="button" id="delete" className="fa-regular fa-trash-can"/>
                    </div>
                </form>
            </main>
            <Footer/>
        </React.Fragment>
    );
  }

  
  export default EditCustomer;