import React from "react"


const Footer = () => {
    return (
        <div className="text-footer"  id="footerSection" style={{paddingTop: "10%"}}>
            <h4 className="text-center">
                CONTACT
            </h4>
            <p className="text-center">Find me on social media</p>
            <div className="footer-social-links" style={{width: "20%", margin: "auto"}}>
                <ul className="social-links-list" style={{textAlign: "center", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                    <li><a href="https://www.facebook.com/wonyoung.choi.3154/" target="_blank" rel="noopener noreferrer" className="facebook">
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </a></li>
                    <li><a href="https://www.instagram.com/wonyoungchoi7/" target="_blank" rel="noopener noreferrer" className="instagram">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a></li>
                    <li><a href="mailto:choiwc.wonyoung@gmail.com" target="_blank" rel="noopener noreferrer" className="google">
                        <i className="fab fa-google fa-2x"></i>
                    </a></li>
                    <li><a href="https://www.linkedin.com/in/wonyoung-choi/" target="_blank" rel="noopener noreferrer" className="linkedin">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a></li>
                    <li><a href="https://github.com/WonyoungChoi-0" target="_blank" rel="noopener noreferrer" className="github">
                        <i class="fab fa-github fa-2x"></i>
                    </a></li>
                </ul>

            </div>
        </div>
    )
}

export default Footer