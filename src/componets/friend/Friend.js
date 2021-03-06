import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './friend.css';

const Friend = (props) => {
  const { id, name, email } = props.friend;
  const history = useHistory();
  const handleClick = (friendId) => {
    const url = `/friend/${friendId}`;
    history.push(url);
  };

  return (
    <div className="friend-style">
      <h2>{id}</h2>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <Link to={'/friend/' + id}>
        <button>show detail</button>
      </Link>
      <button onClick={() => handleClick(id)}>show details</button>
    </div>
  );
};

export default Friend;
