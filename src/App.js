import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar.js'
import Header from './components/Header.js'
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe.js'
import Services from './components/Services.js'
import Hobbies from './components/Hobbies.js'
import Footer from './components/Footer.js'
import Contact from './components/Conatct.js'


function App() {
  return (
   
    <div className="App">
    <Particles className="particles-canvas"
                params={{
                    particles: {
                        
                          number: {
                            value: 30,
                            density:{
                              enable:true,
                              value_area:900
                            }
                          },
                          shape: {
                            type : "circle",
                            stroke :{
                              width: 6,
                              color: '#ff6600'
                            }
                          } 
                          
                            
                        
                    }
                }} 
                />
    <Navbar />
    <Header/>
    <AboutMe />
    

    <Hobbies/>
    <Services/>
    
    <Contact/>

    <Footer/>
    
    
    
    </div>

  );
}

export default App;
