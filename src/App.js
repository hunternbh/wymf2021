import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Terms from './components/pages/Terms/Terms';
import Faq from './components/pages/Faq/Faq';
import Event from './components/pages/Event/Event';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/terms' component={Terms} />
        <Route path='/faq' component={Faq} />
        <Route path='/event' component={Event} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
