import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Terms/Terms';
import Faq from './components/pages/Faq/Faq';
import SignUp from './components/pages/SignUp/SignUp';
import Event from './components/pages/Event/Event';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/faq' component={Faq} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/event' component={Event} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
