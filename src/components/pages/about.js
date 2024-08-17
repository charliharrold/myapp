// pages/about.js

import React from "react";

const wrapText = {
    textAlign: 'justify',
  };

const About = () => {
    return (
        <div
            style={{
                //display: "flex",
                //justifyContent: "centre",
                //alignItems: "centre",
                //height: "100vh",
            }}
        >
            
            <h3>
                Hello! My name is Charli and I'm a 3rd year computer science student at the University of Victoria. 
            </h3>
            <div
            /*style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
                height: "100vh",
            }}*/
        >
            <iframe width="800"
                        height="1000"
                        src="resume.pdf"
                        title="Charli Resume"
                        float="left" >
                </iframe>
                </div>
            <p style={wrapText}>
                I wasn't always interested in computer science! In fact, when I started at UVic I was dreading the 1 computer science course that was required for my program.<br />
                However, at the end of my first year I realized that the introductory computer science course was my favourite! So, on a slight whim, I decided to switch into the computer science program, and I've been loving it ever since.
            </p>
            
        </div>
    );
};

export default About;