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
import Photos from "./components/pages/photos";
import Projects from "./components/pages/projects";
import Resources from "./components/pages/resources";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/photos" element={<Photos />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/resources" element={<Resources />}/>

            </Routes>
        </Router>

        
    );
}

export default App;