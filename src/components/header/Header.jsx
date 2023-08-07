import React ,{useRef} from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { Bar } from "react-chartjs-2";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
    <div className="header">
      <div className="container">
        <div className="logo">Logo</div>

        <div className="contents">
         
            <ul className={toggleMenu?"" : "nav-links"}>
              <Link to="/" className="home">
                <li>Home</li>
              </Link>
              <Link to="/software" className="software">
                <li>Software</li>
              </Link>
              <Link to="/Services" className="Services">
                <li>Services</li>
              </Link>
              <Link to="/Learning" className="Learning">
                <li>Learning</li>
              </Link>
              
            </ul>
            
          

          

          {/*  <p>Home</p>
        <NavLink style={{textDecoration: "none", listStyle: "none"}} to="/categories">
          <p>Interactive AI</p>
        </NavLink>
        <p>Software</p>
        <p>Services</p>
        <p>Learning</p>
        <p>Blog</p>
  */}
        </div>

        <button
				className="nav-btn">
				<FontAwesomeIcon icon={faBars}
        onClick={()=>{setToggleMenu(!toggleMenu)}}
        ></FontAwesomeIcon></button>

        <div className="subscribeButton">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
