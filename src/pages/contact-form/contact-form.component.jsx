import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./ContactForm.css";
import emailjs from "emailjs-com";
// import shake from "../../assets/img/background/p5.png"


const ContactForm = () => {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_ym11zgj', 'template_3mdcv8e', e.target, 'user_RImgGEMUxFDZunTpOGQDb')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <div className="container ">
         
           <div className="row">
            
             <div className="col-md-12 text-center">
              <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                  <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control" placeholder="Name" name="name" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                  {/* <label className="text-white">Contact With Me</label> */}

                    <input type="email" className="form-control" placeholder="enter your mail" name="email" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <input type="text" className="form-control" placeholder="Subject" name="subject" />
                  </div>
                  <div className="col-8 form-group pt-2 mx-auto">
                    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                  </div>
                  <div className="col-8 pt-3 mx-auto">
                    <input type="submit" className="btn btn-info" value="Send Message"></input>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="col-md-6">
             {/* <img src={shake} alt="" /> */}
             {/* </div> */} 

           </div>
         

        </div>
      </Jumbotron>
    </div>
  );
};
export default ContactForm;
