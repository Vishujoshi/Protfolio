import React from 'react'
 import travel from './travel.jpg'
 import exploring from './exploring.jpg'
 import game from './game.jpg'
 import animal from './animal.jpg'
function Hobbies(){




	return(
      <div id="hobbies" className="hobies">
        <div className="d-flex justify-content-center my-5">
         <h1>Hobbies</h1>
         </div>
       <div className="container Hobbies-wrapper">  
       
       <div className="timeline-block timeline-block-left">
           <div className="marker"></div>
        <div className="timeline-content">
        <h3>Traveling</h3>
        <p> “Don’t tell me how educated you are, tell me how much you have travelled.” – Mohammed</p>
        <img className="img" src={travel}/>
       </div>
       </div>
       

        <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
        <h3>Exploring</h3>
        <p> “Jobs fill your pockets, adventures fill your soul.”</p>
        <img className="img" src={exploring}/>

       </div>
       </div>

       <div className="timeline-block timeline-block-left">
        <div className="marker"></div>
        <div className="timeline-content">
        <h3>Gaming</h3>
        <p>1.Keep friends close and enemies guessing – ‘League of Legends’.</p>
           <br></br>
          <p> 2.I don’t need to get a life, I am a gamer, I have lots of lives.</p>
          <img className="gaame" src={game}/>

       </div>
       </div>

       <div className="timeline-block timeline-block-right">
        <div className="marker"></div>
        <div className="timeline-content">
        <h3>Animal Lover</h3>
          <p> “The way you treat the animals around you will be the nature of the animal within you”
         ― Sir P.S. Jagadeesh Kumar</p>
        <img className="img align-item-canter" src={animal}/>

       </div>
       </div>





        </div>
     </div>


		)
}
export default Hobbies;