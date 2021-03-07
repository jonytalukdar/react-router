import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card } from 'react-bootstrap';

const CountryDetail = () => {
  const { name } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountryDetails(data));
  }, []);

  return (
    <div className="text-center">
      {countryDetails.map((country) => (
        <Card style={{ width: '25rem', margin: '0 auto' }}>
          <Card.Img variant="top" src={country.flag} />
          <Card.Body>
            <Card.Title>
              <h2>{country.name}</h2>
            </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CountryDetail;
