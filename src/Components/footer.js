import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom/cjs/react-dom.development";
import Styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function footer() {
    return (
    <FooterContainer className="main-footer">
<div className="footer-middle">
        <div className="container">
            <div className="row">
                {/* column-1 */}
                <div className="col-md-3 col-sm-6">
                    <h4>
                    Creative Design
                    </h4>
                    <ul className="list-unstyled">
                        <li><a href="#">Bizerte</a></li>
                        <li><a href="#">Tunisia</a></li>
                        <li><a href="#">Nabeul</a></li>
                        <li><a href="#">Sousse</a></li>
                    </ul>
                </div>
                {/* column-2 */}
                <div className="col-md-3 col-sm-6">
                    <h4>
                    Development departement
                    </h4>
                    <ul className="list-unstyled">
                    <li><a href="#">Bizerte</a></li>
                        <li><a href="#">Tunisia</a></li>
                        <li><a href="#">Nabeul</a></li>
                        <li><a href="#">Sousse</a></li>
                    </ul>
                </div>
                {/* column-3 */}
                <div className="col-md-3 col-sm-6">
                    <h4>
                    Marketing Departement
                    </h4>
                    <ul className="list-unstyled">
                    <li><a href="#">Bizerte</a></li>
                        <li><a href="#">Tunisia</a></li>
                        <li><a href="#">Nabeul</a></li>
                        <li><a href="#">Sousse</a></li>
                    </ul>
                </div>
                {/* column-4 */}
                <div className="col-md-3 col-sm-6">
                    <h4>
                        Visit Our Pages
                    </h4>
                    <ul className="list-unstyled">
                    <li><a href="#">Faceboo</a> <FontAwesomeIcon icon={faFacebook} /> </li>
                        <li><a href="#">Twitter </a> <FontAwesomeIcon icon={faTwitterSquare} /></li>
                        <li><a href="#">Linkedin </a><FontAwesomeIcon icon={faLinkedin } /></li>
                        <li><a href="#">Github </a><FontAwesomeIcon icon={faGithub} /></li>
                    </ul>
                </div>
            </div>
            {/* footer bottom:: */}
            <div className="footer-bottom">
                <p className="text-xs-center">
                    &copy;{new Date().getFullYear()}Web Design App - All Rights Reserved
                </p>
            </div>
        </div>
      </div>
    </FooterContainer>   
    )
}

export default footer;

const  FooterContainer =Styled.footer`
.footer-middle{
background:var(--mainDark);
padding-top:3rem;
color:var(--mainwhite);
font-family: "Roboto Condensed" ,sans-serif;
}
.footer-bottom{
    padding-top:3rem;
    padding-bottom:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
}

ul li a{color:var(--mainlightgrey);
text-decoration:none;}
ul li a:hover{color:var(--primary-orange);
    text-decoration:underline;
  
}
h4{color:var(--primary-orange);}

`;
