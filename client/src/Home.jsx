import React, { Component } from 'react';
import './Home.css';
import Nav from './Nav';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
        <React.Fragment>
          <Nav/>
          <Footer/>
         </React.Fragment>

    );
  }
}

export default Home;
