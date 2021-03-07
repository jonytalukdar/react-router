import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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
    <div>
      <h1>this is country details</h1>
      {countryDetails.map((list) => (
        <li>{list.name}</li>
      ))}
    </div>
  );
};

export default CountryDetail;
