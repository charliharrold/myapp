import React from 'react';

const headingStyle = {
  color: '#B05AF3',
  textAlign: 'center',
};
const centre = {
  textAlign: 'center',
};

const rightAlign = {
  float: 'right'
}

const HomePage = () => {
  return (
    <div>
      <header>
        <h1 style={headingStyle}>Welcome to my website!</h1>
      </header>
      <main>
        <p style={centre}>I'm a computer science student at the University of Victoria who is passionate about learning.
          I am the Vice President of the Women in Engineering and Computer Science (WECS) club at UVic.
          I have resources for beginners interested in learning Python, as well as step by step guides for making your own personal website.
        </p>
        <img style={rightAlign} src='headshot.jpg' width='200' height='266'/>
      </main>
    </div>
  );
}

export default HomePage;

// I added a comment here to test how commits work!

// filename -App.js


