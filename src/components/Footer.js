import React from 'react'

import {FacebookShareButton,FacebookIcon,
TwitterShareButton,
TwitterIcon,
LinkedinShareButton,LinkedinIcon} from 'react-share'



function Footer(){



return(
   <div className="footer">
   <div className="container">
   <div className="row">
<div className="col-lg-4 col-md-6 col-sm-6">

     <div className="d-flex">
     <p>City Nangal Railway Road</p>
     </div>

      <div className="d-flex">
      <a href="Tel:7344347">+(91)7347688389</a>
      </div>

      <div className="d-flex">
     <p>vishal_vishi@yahoo.com</p>
     </div>
     </div>

     <div className="col-lg-3 col-md-2 col-sm-6">
     <div className="row">
     <div className="col">
     <a className="footer-nav">Home</a>
     <br />
     <a className="footer-nav">About Me</a>
      <br />
     <a className="footer-nav">Hobbies</a>
      </div>
    

  
     <div className="col">
     <a className="footer-nav">Skills</a>
      <br />
     <a className="footer-nav">Protfolio</a>
      <br />
     <a className="footer-nav">Contact</a>
      </div>
    
     </div>
     </div>

    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
     <div className="d-flex justify-content-center">
     <FacebookShareButton
     url={"https://www.facebook.com/Mr.Boombaasticc"}
     quote={"Gaming channel"}
     hashtag="#pubg">
     <FacebookIcon className="mx-3" size={35}/>
     </FacebookShareButton>

     <TwitterShareButton

     url={"https://www.facebook.com/Mr.Boombaasticc"}
     quote={"Gaming channel"}
     hashtag="#pubg">
     <TwitterIcon className="mx-3" size={35}/>
     </TwitterShareButton>


     <LinkedinShareButton

     url={"https://www.facebook.com/Mr.Boombaasticc"}
     quote={"Gaming channel"}
     hashtag="#pubg">
     <LinkedinIcon className="mx-3" size={35}/>
     </LinkedinShareButton>
     </div>

     <p id="cop" className="pt-3 text-center">
     Copyright&Copy :  {new Date().getFullYear()}
     </p>
    </div>


    </div>
   </div>
</div>
	)
}
export default Footer;