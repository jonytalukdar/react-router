// import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div>
      <h1>hello this is friendDetail : {friendId}</h1>
      <h1>{friend.name}</h1>
      <p>{friend.email}</p>
      <p>{friend.phone}</p>
    </div>
  );
};

export default FriendDetail;
