import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { IoIosLink } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";

function Work() {
  const projects = [{id:"1", title:"Paysa", description:"This project was developed primarily with React.js, integrating Bootstrap and custom CSS. It transitioned from Figma to React.js, optimizing code with React Router, components, props, and added functionality. This approach enhanced performance and user interaction while maintaining design integrity and scalability across platforms.", image:require("../images/projects/dashborad.png"), gitHub:"https://github.com/khanzadafaizan/Paysa", projectLink:"https://paysa-three.vercel.app/dashborad"},
    {id:"2", title:"Uppcar", description:"This project utilized React.js, incorporating Bootstrap and custom CSS. It underwent a migration to React.js, integrating React Router and custom components. This transition optimized the codebase, enhancing performance and user navigation while maintaining design consistency and responsiveness across devices.", image:require("../images/projects/uppcar.jpg"), gitHub:"https://github.com/khanzadafaizan/Uppcar", projectLink:"https://uppcar-nn7e.vercel.app"},
    {id:"3", title:"Coral", description:"This project was developed using Next.js and Tailwind CSS, integrating a GraphQL API to create an e-commerce-like website. The focus was on optimizing performance and user experience, with Next.js for efficient rendering and Tailwind CSS for streamlined styling. GraphQL enhances data fetching capabilities, supporting dynamic content updates and smooth interactions.", image:require("../images/projects/coral.jpg"), gitHub:"https://github.com/khanzadafaizan/Nextjs-Ecommerce-Store", projectLink:"https://nextjs-ecommerce-store-1qgb.vercel.app/?tag=fries"},
    {id:"4", title:"Portfolio", description:"This project is built with React.js, React Bootstrap, and CSS, dynamically passing data using React Router props, and incorporating a carousel slider functionality. It aims to enhance user interaction by seamlessly navigating content with React Router, while the carousel slider enriches the experience with visually appealing and interactive content presentation", image:require("../images/projects/portfolio.jpg"), gitHub:"https://github.com/khanzadafaizan/graphic_designer_portfolio", projectLink:"https://graphic-designer-portfolio-uut9.vercel.app"},
    {id:"5", title:"PhotoFolio", description:"This project was downloaded from Google and directly converted to React.js without any additional modifications or enhancements.", image:require("../images/projects/photofolio.jpg"), gitHub:"https://github.com/khanzadafaizan/PhotoFolio", projectLink:"https://photo-folio-jade.vercel.app"},
    {id:"6", title:"Blog", description:"This project utilizes Next.js and Tailwind CSS along with a content management system to implement dynamic routes. It fetches API data from JSON to display information about all users and individual users.", image:require("../images/projects/blog.jpg"), gitHub:"https://github.com/khanzadafaizan/Blog-Next.js", projectLink:"https://blog-next-js-ivory-iota.vercel.app"}
  ]
  return (
    <Container id="project" className="">
      <Row>
        <div className="about-div">
          <h1 className="about text-center">PROJECT</h1>
          <p className="about-text text-center">
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study.
          </p>
        </div>

         {projects.map((item, key)=>(
          <><Col xs={12} sm={12} md={6} className="mt-5 px-3">
          <h2 className="py-3">{item.title}</h2>
          <p>
            {item.description}
          </p>
        </Col>
        <Col xs={12} sm={12} md={6} className="mt-2 mt-md-5">
          <div className="my-0 my-md-3">
            <a href={item.image} target="blank" className="">
              <img src={item.image} className="mt-3 img-fluid"></img>
            </a>

            <div className="s d-flex gap-2 fs-5 py-1">
              <a
                href={item.gitHub}
                target="blank"
                className=""
              >
                <IoIosLink />
              </a>
              <a
                href={item.projectLink}
                target="blank"
                className=""
              >
                <FaGooglePlay />
              </a>
            </div>
          </div>
        </Col></>
         ))}
         
        
      </Row>
    </Container>
  );
}

export default Work;
