import React, { useEffect, useState } from 'react';
import Country from '../country/Country';

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      {country.map((list) => (
        <Country list={list}></Country>
      ))}
    </div>
  );
};

export default Home;
