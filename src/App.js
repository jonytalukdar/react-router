import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import Portfolio from './components/portfolio/Portfolio';
import Work from './components/work/Work';
import NotFound from './components/notFound/NotFound';

const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/work">
            <Work></Work>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
};

export default App;
