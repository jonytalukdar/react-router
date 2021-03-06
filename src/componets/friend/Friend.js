import React from 'react';
import './friend.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Friend = (props) => {
  const { id, name, email } = props.friend;
  console.log(props);
  return (
    <div className="friend-style">
      <h2>{id}</h2>
      <h3>{name}</h3>
      <h3>{email}</h3>
    </div>
  );
};

export default Friend;
