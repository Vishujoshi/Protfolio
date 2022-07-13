import React from 'react'
import logo from './logos.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'


function Navbar(){



return(
<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
<div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "white"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link smooth={true} to="home" offset={-150} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
      </li>
        <li className="nav-item">
        <Link smooth={true} to="about" offset={-130} className="nav-link" href="#">About Me</Link>
      </li>
        <li className="nav-item">
        <Link smooth={true} to="hobbies" offset={-90} className="nav-link" href="#">Hobbies</Link>
      </li>
        <li className="nav-item">
        <Link smooth={true} to="skill" offset={-90} className="nav-link" href="#">Skills</Link>
      </li>
        <li className="nav-item">
        <Link smooth={true} to="contacts" offset={-90} className="nav-link" href="#">Conatct</Link>
      </li>
        
    </ul>
    
    </div>
  </div>
</nav>

	)
}
export default Navbar;