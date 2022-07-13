import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import author from './author.jpg'



function AboutMe(){



return(
   <div id="about" className="aboutme">
<div className="container py-5">
  <div className="row">
   <div className="col-lg-6 col-xm-12">
   <div className="photo-wrap mb-5">
   <img className="profile-img" src={author}/>
   </div>
   </div>
   <div className="col-lg-6 col-xm-12">

   <h1 id="head">About Me :-</h1>
   <p>Hello,I am Vishal Joshi from Nangal(Punjab).
   I have done B-Tech in computer science from Guru Nanak Dev University, Jalandhar with aggregate of 65%. I see myself as a relentless problem-solver, and I’m always looking for a new challenge.Currently I am looking for a job which will give me an opportunity to enhance my skills and Knowledge.I have knowledge about languges such as HTML,CSS,Javascript.
   I am currently working on React Js.
   This is my first Professional website using React js.</p>
<div className="row">
<div className="Social">

<div className="resume">
  <a href="https://drive.google.com/file/d/1QsAgAyiak1islV9FXWWcdqVpP-UhPzcl/view?usp=sharing">
   <button type="button" class="btn btn-danger">My Resume</button>
  </a>
  <div id="folow"><h3 >Follow here</h3></div>
  
  

</div>




   <div className="facebook">
  <a href="https://www.facebook.com/vishu.imu">
    <FontAwesomeIcon id ="insta" className="icon" icon={faFacebook} size="4x"/>
  </a>
</div>

<div className="insta">
  <a href="https://www.instagram.com/_._.vishu._.__">
    <FontAwesomeIcon id ="insta" className="icon" icon={faInstagramSquare} size="4x"/>
  </a>
</div>



</div>

</div>




   </div>
        
   </div>
</div>
</div>
	)
}
export default AboutMe;