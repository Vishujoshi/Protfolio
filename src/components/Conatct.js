import React from 'react'
import emailjs from 'emailjs-com';





function Conatct()  {
   

   /*const serviceId ="service_ID";
   const templateId ="template_ID",
   const userId ="user_dhJT0mA1bAZUysFMNm1HV";*////

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_ID","template_ID", e.target, "user_dhJT0mA1bAZUysFMNm1HV")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
}

return(
   <div id ="contacts" className="contact">

   <div className="text-center">
   <h1>Conatct Me</h1>
   <p>Please fill out the form and describe your project needs and I'll contact you as soon </p>
   </div>
   <div className="container">
   <form onSubmit={sendEmail}>
   <div className="row">
   <div className="col-md-6 col-xs-12">
    

    <div className="text-center">
    <input
    type="text"
    id="name"
    className="form-control"
    placeholder="Name"
    name="name" 
    />
     <div className="line"></div>
</div>
    <div className="text-center">
    <input 
    id="ph"
    type="text"
    className="form-control"
    placeholder="Phone Number"
    name="phone" 
    />
    <div className="line"></div>
</div>

    <div className="text-center">
    <input 
    id="email"
    type="text"
    className="form-control"
    placeholder="Email@xyz.com"
    name="email" 
    />
     <div className="line"></div>
</div>

    <div className="text-center">
    <input
    id="sub"
    type="text"
    className="form-control"
    placeholder="Subject"
    name="subject" 
    />

    <div className="line"></div>
    </div>
  </div>
    
    <div className="col-md-6 col-xs-12">
     

    <div className="text-center">
    <textarea
    id="desc"
    type="text"
    className="form-control"
    placeholder="Plaese describe your project shhortly"
    name="description"> 
    </textarea>
    <div className="line"></div>
    </div>
    <button className="btn btn-dark contact-btn" type="submit">Conatct Me</button>
    </div>

    </div>
    </form>
    </div>

</div>
	)
}
export default Conatct;