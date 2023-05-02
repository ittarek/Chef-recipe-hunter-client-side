import React, { useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Chef.css'

const Chef = ({ data }) => {

  
  const {
    id,
    name,
    picture,
    years_of_experience,
    number_of_recipe_likes,
    number_of_recipes,
  } = data;

  return (
      
    <div className="mt-5 col-lg shadow gap-5">

        
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img-fluid w-100 img-height" variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Number Of recipes :{number_of_recipes}</ListGroup.Item>
          <ListGroup.Item>Experience:{years_of_experience}</ListGroup.Item>
          <ListGroup.Item>{number_of_recipe_likes}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to='/chefDetails'><Button>View Recipes</Button></Link>
       
        </Card.Body>
      </Card>

    

    </div>


  );
};

export default Chef;
