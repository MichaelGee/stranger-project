import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import IntroText from './components/introtext/introtext';
import SearchBar from './components/searchbar/searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar /> 
      <IntroText/>
      <SearchBar/>
       </div>
    );
  }
}

export default App;
