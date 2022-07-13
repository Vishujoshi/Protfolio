import React from 'react'
import Typed from 'react-typed';
import bg from './bg.jpg'
import back from './back.jpg'
import laptop from './laptop.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Carousel from 'react-bootstrap/Carousel'

function Header(){
  return(
    <div id="home" className="car">


 
<div className="testi">

 <div className="text" >
     <h1>Hello,I am Vishal Joshi</h1>
     <h2>I am</h2>
     <Typed className="typed-text"
     strings={["Web designer.","Web developer.","Beleiver.","Self-learner."]}
     typeSpeed={40}
     backSpeed={60}
     loop />
   </div>
<Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
  <Carousel.Item>
    <img id="imge"
      className="d-block w-100"
      src={laptop}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img id="imge"
      className="d-block w-100"
      src={bg}
      alt="Third slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img  id="imge"
      className="d-block w-100"
      src={back}
      alt="Third slide"
    />

    </Carousel.Item>


  
</Carousel>

    </div>
        </div>
  )
}
export default Header;