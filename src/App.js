import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div className="header">
        <Header />
        <SolarSystem />
      </div>
    );
  }
}

export default App;
