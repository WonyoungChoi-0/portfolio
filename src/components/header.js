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
        <BackgroundImage fluid={headerImage.childImageSharp.fluid} style={{width: "98.9vw", height: "100vh", textAlign: "center"}}>
          <div className="black-overlay">
            <div style={{margin: "5% auto 0", width: "30%", color: "white"}}>
              <h1>Hello, I'm Wonyoung. <br/> I'm a software engineer.</h1>
              <Link to="aboutSection" className="nav-link" style={{fontSize: "18px", cursor: "pointer"}} offset={30} spy={true} smooth={true} duration={1000}>
                <div className="grow" style={{width: "100%", color: "white"}}>
                  <h5>See what I've been up to</h5>
                  <i class="fas fa-chevron-down fa-2x"></i>
                </div>
              </Link>
            </div>
          </div> 
          
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
