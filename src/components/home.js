import React from 'react';

const divStyle = {
  color: 'blue',
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
        <h1 style={divStyle}>My Simple React Home Page</h1>
      </header>
      <main>
        <p style={centre}>Welcome to my simple React home page! This is a basic example of a React project.</p>
        <img style={rightAlign} src='headshot.jpg' width='200' height='266'/>
      </main>
    </div>
  );
}

export default HomePage;