/*import React, { Component } from 'react';
import './App.css';
import Home from './components/pages/home'

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

export default App;*/
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

import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Events from "./components/pages/events";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />}
                />
               
            </Routes>
        </Router>
    );
}

export default App;