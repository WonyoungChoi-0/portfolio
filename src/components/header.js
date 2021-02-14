import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import {Link} from "react-scroll"
import BackgroundImage from 'gatsby-background-image'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';



const Header = ({headerImage}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState("header-at-top")

  const toggle = () => setIsOpen(!isOpen);

  const listenScrollEvent = (event) => {
    if (window.scrollY < 5) {
      return setHeader("header-at-top")
    } else if (window.scrollY > 5) {
      return setHeader("header-free")
    } 
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
  
    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header id="homeSection">
      <Navbar fixed="top" light expand="sm" className={header}>
          <div className="container">
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem style={{marginRight: "5%"}}>
                  <Link to="homeSection" className="nav-link" style={{fontSize: "18px", cursor: "pointer"}} spy={true} smooth={true} duration={1000}>HOME</Link>
                </NavItem>
                <NavItem style={{marginRight: "5%"}}>
                  <Link to="aboutSection" className="nav-link" style={{fontSize: "18px", cursor: "pointer"}} offset={30} spy={true} smooth={true} duration={1000}>ABOUT</Link>
                </NavItem>
                <NavItem style={{marginRight: "5%"}}>
                  <Link to="portfolioSection" className="nav-link" style={{fontSize: "18px", cursor: "pointer"}} offset={30} spy={true} smooth={true} duration={1000}>PORTFOLIO</Link>
                </NavItem>
                <NavItem style={{marginRight: "5%"}}>
                  <Link to="blogSection" className="nav-link" style={{fontSize: "18px", cursor: "pointer"}} offset={-50} spy={true} smooth={true} duration={1000}>BLOG</Link>
                </NavItem>
                <NavItem style={{marginRight: "5%"}}>
                  <Link to="footerSection" className="nav-link" style={{fontSize: "18px", cursor: "pointer"}} spy={true} smooth={true} duration={1000}>CONTACT</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <BackgroundImage fluid={headerImage.childImageSharp.fluid} style={{width: "98.9vw", height: "100vh"}}>
        </BackgroundImage>
    </header>
  );
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
