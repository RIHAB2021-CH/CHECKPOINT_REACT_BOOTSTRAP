import React from "react";
import mylogo from "../webdesigner-logo.png";

const Intro = () => {
    
  return (
    <div classname="container-intro">  
      <img src={mylogo} alt="logo..." className="logo" />
      <h1 className="title-about">We are your confident partner</h1>
      <div className="description">
        <p>
        Web Design is a tunisian registered web design company based in Tunisia. Established in 2021 our company provides web design and development services to customers in Tunisia .
        </p>
        <p>
        Whether you're just starting out on a new business venture or your company is already well established we are happy to provide you with the design, development and online marketing services that your business requires.
        </p>
      </div>
    </div>
  );
};

export default Intro;
