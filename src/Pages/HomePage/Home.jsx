import React, { useEffect, useState } from "react";
import { Button, Carousel, Container } from "react-bootstrap";
import "./Home.css";
import Chef from "../ChefPage/Chef";
import Branch from "../OureBrangPage/Branch";
import TodayMenu from "../TodayMenuePage/TodayMenu";




const Home = () => {
  const [chefData, setChefData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // console.log(chefData);

  useEffect(() => {
    fetch(
      "https://b7-a10-chef-recipe-hunter-server-side-ittarek.vercel.app/chefData"
    )
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);

  return (
    <>
      <Container fluid className="image">
        {/*banner text  */}
        <Container className=" margin text-white d-flex justify-content-center align-items-center flex-column ">
          <h1 className="fw-bold title mx-auto fs-sm-5">
            Welcome to Recipe Cooker{" "}
          </h1>
          <Carousel>
          <Carousel.Item interval={1000}>
            {/* mumbai */}
            <img
              className="d-block rounded-3 shadow-lg img-fluid mx-auto slide-image"
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="First slide"
            />
            <Carousel.Caption>
              <h4 className="text-success  text-center  fs-1">Mumbai , Indea</h4>
              <p className="text-info fs-3  text-center  fst-italic">
                The name Winta, in principle, quite fully describes the
                restaurant's concept: red meat and red wine - what else is
                needed for a steakhouse!
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* California */}
          <Carousel.Item interval={500}>
            <img
              className="d-block rounded-3 mx-auto img-fluid slide-image"
              src="https://images.unsplash.com/photo-1528830984461-4d5c3cc1abf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h4 className="text-success  text-center  fs-1">California, USA</h4>
              <p className="text-info fs-3  text-center  fst-italic">
                The name Winta, in principle, quite fully describes the
                restaurant's concept: red meat and red wine - what else is
                needed for a steakhouse!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* Italy */}
            <img
              className="d-block rounded-3 img-fluid  mx-auto slide-image"
              src="https://images.unsplash.com/photo-1668724775591-f50dd8ed65a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h4 className="text-success text-center fs-1">Roma, Italy</h4>
              <p className="text-info fs-3  text-center  fst-italic ">
                The name Winta, in principle, quite fully describes the
                restaurant's concept: red meat and red wine - what else is
                needed for a steakhouse!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


         
          <Button className="mt-5">Cooke Now</Button>
        </Container>
      </Container>
    
      {" "}
      <Container className=" ">
        <h1 className="text-canter  shadow-lg rounded-2  mt-5 chef-color">
          Welcome To Chef
        </h1>

        <div className="row">
          {chefData.slice(0, showAll ? 6 : 3).map((data) => (
            <Chef key={data.id} data={data}></Chef>
          ))}
        </div>
        <Button
          onClick={() => setShowAll(true)}
          className="see-all-button  text-white mt-5 mb-5"
        >
          See All Chef
        </Button>
      </Container>
      <Container fluid className="branch-image">
        <Branch></Branch>
      </Container>
      <Container fluid className="mt-5 mb-5">
        <TodayMenu></TodayMenu>
      </Container>
    </>
  );
};

export default Home;
