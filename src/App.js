import React, { Component } from 'react';
import './App.css';
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div id="container-wrap">
		<div id="colorlib-main">
			<Home />
          	</div>
      	</div>
      </div>
    );
  }
}

export default App;
/*
import React from 'react';
import Home from './components/home';

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
export default App;*/