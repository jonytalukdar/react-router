import './App.css';
import Home from './componets/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NoMatch from './componets/noMatch/NoMatch';
import FriendDetail from './componets/friendDetails/FriendDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetail></FriendDetail>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
