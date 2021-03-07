import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Country = (props) => {
  const { name, flag } = props.list;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Link to={'/country/' + name}>
            <Button variant="primary">Show Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Country;
