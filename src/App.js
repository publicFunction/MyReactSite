import React, { Component } from 'react';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Parent">
          <Header />
          <Body />
          <Footer />
          <div className="MobiGlow">
            <div className="MobiGlowTop" />
            <div className="MobiGlowBottom" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
