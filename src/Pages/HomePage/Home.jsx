import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="d-lg-flex flex-grow-1 gam-5 justify-content-between align-items-center ">
         
      {/*banner text  */}
      <div>
        <h1>Hello Recipe Cooker </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>

      {/* Banner image */}
      <div>
      <img className=" position-relative image-cover w-100"
          src="https://duruthemes.com/demo/html/winta/multipage-light/img/about1.jpg"
          alt=""
        />
      </div>
    </Container>
  );
};

export default Home;
