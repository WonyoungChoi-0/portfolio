import PropTypes from "prop-types"
import React, {useState} from "react"
import Img from "gatsby-image"
import {Link} from "react-scroll"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';



const Header = ({headerImage}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header id="homeSection">
      <Navbar fixed="top" color="light" light expand="sm">
        <div className="container">
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem style={{marginRight: "5%"}}>
                <Link to="homeSection" className="nav-link" style={{fontSize: "18px", cursor: "pointer"}} spy={true} smooth={true} duration={1000}>HOME</Link>
              </NavItem>
              <NavItem style={{marginRight: "5%"}}>
                <Link to="aboutSection" className="nav-link" style={{fontSize: "18px", cursor: "pointer"}} offset={-50} spy={true} smooth={true} duration={1000}>ABOUT</Link>
              </NavItem>
              <NavItem style={{marginRight: "5%"}}>
                <Link to="portfolioSection" className="nav-link" style={{fontSize: "18px", cursor: "pointer"}} offset={-50} spy={true} smooth={true} duration={1000}>PORTFOLIO</Link>
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
      <Img fluid={headerImage.childImageSharp.fluid} style={{width: "98.9vw", height: "100vh"}} alt="Background Image"/>
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
