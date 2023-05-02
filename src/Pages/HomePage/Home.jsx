import React from "react";
import { Container } from "react-bootstrap";
import './Home.css'

const Home = () => {
  return (
    <Container fluid className="image ">
         
      {/*banner text  */}
      <div className="text-white">
        <h1>Hello Recipe Cooker </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>

      {/* Banner image */}
      <div>
      <img className=" position-relative "
          src=""
          alt=""
        />
      </div>
    </Container>
  );
};

export default Home;
