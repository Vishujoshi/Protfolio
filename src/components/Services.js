import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3,faHubspot,faJs,faBlogger,faDev} from '@fortawesome/free-brands-svg-icons'

function Services(){

return(
<div id="skill" className="services">
     <h1 className="py-5">Skills & Services</h1>
<div className="container">
  
  <div className="row">

   <div className="col-sm">
   <div className="box">
     <div className="circle"><FontAwesomeIcon className="icon" icon={faCss3} size="2x"/>
     </div>
   <h2>Web Design</h2>
   <p>I approach each project individullay and always focus on result.</p>
   </div>
   </div>

   <div className="col-sm">
   <div className="box">
   <div className="circle"><FontAwesomeIcon className="icon" icon={faJs} size="2x"/></div>
   <h2>Web Development</h2>
   <p>I will develop your website using the new web technologies.</p>
   </div>
   </div>

   <div className="col-sm">
   <div className="box">
   <div className="circle"><FontAwesomeIcon className="icon" icon={faHubspot} size="2x"/></div>
   <h2>Technical Support</h2>
   <p>As i am from Technical background I would try my best to solve your problems and provide satisfaction.</p>
   </div>
   </div>

   </div>

   <div className="row">
   
   <div className="col-sm">
   <div className="box">
   <div className="circle"><FontAwesomeIcon className="icon" icon={faBlogger} size="2x"/></div>
   <h2>Front End</h2>
   <p>Html</p>
   <p>Css </p>
   <p>React js</p>
   <p>Bootstrap</p>
   <p>Adobe Photoshop</p>
   <p>Adobe Illustrator (In process)</p>
   </div>
   </div>
   
   <div className="col-sm">
   <div className="box">
   <div className="circle"><FontAwesomeIcon className="icon" icon={faDev} size="2x"/></div>
   <h2>Back End/Databases</h2>
   <p>Javascript</p>
   <p>Java </p>
   <p>Python (In process)</p>
   
   <p>Mysql</p>
   </div>
   </div>
   
   
   </div>
   
   </div>
</div>

	)
}
export default Services;