import React from "react";
import Typed from "react-typed";


const header = () => {
    return (
    <div className="header-wrapper">
        <div className="main-info">  

         <h1>Web Developpement and WebSite promotions</h1>
         <Typed className="typed-text"
         strings={["Web Design","Web Developpement","Facebook ADS SMM","google ADS"]}
         typeSpeed={40}
         backSpeed={60}
        loop
         />
        
       
        
        </div>
       

    </div>


    )
}

export default header
