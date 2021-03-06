import { useEffect, useState } from 'react';
import './App.css';
import Friend from './componets/friend/Friend';

function App() {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div className="App">
      <h1>helllo this is react router tutorial </h1>
      <h2>user : {friends.length}</h2>
      {friends.map((friend) => (
        <Friend friend={friend}></Friend>
      ))}
    </div>
  );
}

export default App;
