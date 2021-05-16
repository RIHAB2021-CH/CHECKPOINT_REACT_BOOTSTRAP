import React from "react";
import Design from "../design.png";
import Dev from "../dev.jpg";
import marketing from "../marketing.png";

const Cards = () => {
  let clients = [
    {
      image: Design,
      title: "Creative Design",
      description:
        "Web design refers to the design of websites that are displayed on the internet. A good web design is easy to use, aesthetically pleasing, and suits the user group and brand of the website",
      
      service: ["Web Design"
      ,"Logo Design",
      "Graphic Design",
          "Social Media Profile Design",
          "Banner & Ad Design"],
     
    },
    {
      image: Dev,
      title: "Website Development",
      description: "Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
      
      service: ["Web Development",
        "Content Management System",
        "E-Commerce Shopping Cart System",
        "Website Hosting & Email",
        "Domain Name Registration"],
     
    },
    {
      image: marketing,
      title: "Online Marketing",
      description: "Online marketing is the practice of leveraging web-based channels to spread a message about a company's brand, products, or services to its potential Customers                                                                                                                     ",
      service: [ "Internet Marketing",
"SEM - Search Engine Marketing",
"SEO - Search Engine Optimisation",
"Google Adwords",
"Facebook Ads",
"Social Media Marketing",
"Email Marketing",
"Website Visitor/Keyword Tracking & Analytics"]
     
    },
  ];
  return (
    <div className="list-cont">
        <h1>Our Services</h1>
        <div className="list">
      {clients.map((el) => (
        <div className="card" >
          <img src={el.image} />
          <h3>{el.title}</h3>
          <p>{el.description}</p>
          {el.service && (
            <select className="drop">
              {el.service.map((el) => (
                <option>{el}</option>
              ))}
            </select>
          )}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
