import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Header.css'

import "./Header.css";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar 
      bg=""
      expand="lg"
      className=" bg-transparent shadow-lg mb-5 position-relative"
    >
      <Container className="d-flex  bg-transparent">
     
      <div className="rounded-lg">
      <img
          className="logo  m-auto   "
          src="https://img.freepik.com/premium-vector/cooking-logo-design_636083-140.jpg?w=740"
          alt=""
        />
      </div>
      
       
 <Form className="d-flex search-box">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          {/* <Button variant="outline-warning"  >Search</Button> */}
        </Form> 
    
       <Navbar.Toggle
          aria-controls="navbarScroll"
          className=" bg-info  "
        />
        <Navbar.Collapse>
          <Nav
            className="d-flex align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link >
            <Link to='/'>  Home</Link>
            </Nav.Link>
            <Nav.Link className="" href="#action1">
              Destination
            </Nav.Link>
            <Nav.Link className="" href="#action2">
              Blog
            </Nav.Link>
            <Nav.Link className="" href="#action2">
              Contact
            </Nav.Link>

            <Nav.Link >
              <Button variant="outline-warning btn-success" > <Link className=" text-white " to='/login'>Login</Link> </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
    
      </Container>
    </Navbar>
  );
};

export default Header;
