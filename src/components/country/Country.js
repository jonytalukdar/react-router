import React from 'react';

const Country = (props) => {
  const { name } = props.list;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Country;
