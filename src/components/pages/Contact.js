import emailjs from "emailjs-com";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typed from 'react-typed';

import {Title} from '../pages/skillSubpages/DivAndTextStyles'




const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_lcd92lb', 'template_1', e.target, 'user_UJptBP5JpNUWeN3smUhu1')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}

return(
    <div>
       

        
        

        <div className="container">
        <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" placeholder="Email Addresse" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" placeholder="Betreff" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Deine Nachricht" name="message"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" value="Abschicken"></input>
                    </div>
                </div>
            </form>
        </div>
    </div>
)
}

export default Contact;