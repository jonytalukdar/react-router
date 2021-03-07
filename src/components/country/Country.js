import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
  const { name, flag } = props.list;
  return (
    <div>
      <img src={flag} alt="" />
      <h1>{name}</h1>
      <Link to={'/country/' + name}>view some this</Link>
    </div>
  );
};

export default Country;
