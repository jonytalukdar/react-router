import React from 'react';
import FakeDate from '../../fakeData/works.json';
import { Card, Button } from 'react-bootstrap';

const Work = () => {
  return (
    <div>
      {FakeDate.map((list) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={list.image} />
          <Card.Body>
            <Card.Title>
              <h1>{list.name}</h1>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Work;
