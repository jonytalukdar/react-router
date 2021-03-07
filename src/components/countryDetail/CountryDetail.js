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
        <Card
          key={country.name}
          style={{ width: '20rem', margin: '0 auto', marginTop: '12px' }}
        >
          <Card.Img variant="top" src={country.flag} />
          <Card.Body>
            <Card.Title>
              <h2>{country.name}</h2>
            </Card.Title>
            <h4>Capital : {country.capital}</h4>
            <p>Population : {country.population}</p>
            <p>Region: {country.region}</p>
            <p>Languages: {country.languages[0].name}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CountryDetail;
