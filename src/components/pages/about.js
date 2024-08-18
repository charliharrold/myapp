// pages/about.js

import React from "react";

const wrapText = {
    textAlign: "left",
    float: "left",
    width: "0",
    height: "0",
    paddingLeft: "50"
  };

const imageStyle = {
    float: "right",
    clear: "right",
    frameborder: "0",
    scrolling: "no",
}

const About = () => {
    return (
        <div>
        <div style={wrapText}> </div>
            
        <div style={imageStyle}><iframe width="600"
        height="800"
        src="resume.pdf"
        title="Charli Resume"
        >
        </iframe></div>
        <h2>
        Hello! My name is Charli and I'm a 3rd year computer science student at the University of Victoria. 
        </h2>
        <p>

            I wasn't always interested in computer science! In fact, when I started at UVic I was dreading the 1 computer science course that was required for my program.<br />
            However, at the end of my first year I realized that the introductory computer science course was my favourite! So, on a slight whim, I decided to switch into the computer science program, and I've been loving it ever since.
                </p>

        <h3>
            Women in Engineering and Computer Science (WECS)
        </h3>
        <p>
            In October 2023 I joined the reviving of WECS at UVic as the Academia Director. In my first two months,
            I organized 3 final exam review sessions and ran 1 review session myself. In my second semester as Academia Director
            I organized 5 more final exam review sessions. My role required organizing volunteers, contacting professors,
            and communicating within WECS to ensure that all review sessions go smoothly.
        </p>

        <h3>
            Work Experience
        </h3>

        <h3>
            Personal
        </h3>
        <p>
            As a woman in a male dominated field, it's important for me to be educated about feminism, advocacy,
            and intersectionality. I am driven by my desire to encourage young women to stay in STEM. 
        </p>
                </div>
    );
};

export default About;