import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import './home.css';

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
    <div className="home-container">
      {country.map((list) => (
        <Country list={list} key={list.name}></Country>
      ))}
    </div>
  );
};

export default Home;
