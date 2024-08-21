import React from 'react';
import headshot from "../../resources/headshot.png";



const headingStyle = {
  color: '#ae2ce3',
  textAlign: 'left',
};
const centre = {
  textAlign: 'center',
};

const rightAlign = {
  float: 'right'
}


const HomePage = () => {
  return (
    <div className={"container"}>
      <h1 style={headingStyle}>Welcome to my website!</h1>
      <div className={"row"}>
        <div className={"col-8"}>
          <br></br>
          <p>I'm a 3rd year computer science student at the University of Victoria who is passionate about learning
            everything there is to know in this field!
            <br></br>
            <br></br>
            I am the Vice President of the Women in Engineering and Computer Science (WECS) club at UVic, which is a huge
            honour because I care about the club so much.
            <br></br>
            I run the CSC 110 final exam review session every semester on behalf of WECS, and it is by far my proudest achievement.
            CSC 110 was the first programming course I took, so being able to help current students in the class feels very
            full circle for me.
            <br></br>
            <br></br>
            I'm also interested in the humanities, particularly history and gender studies. It's important to me that I learn
            more than simply computers and math in my time at university, so I have taken a variety of courses including: Scottish
            food history, introductory gender studies, critical thinking, and Spanish.
            <br></br>
            In the future, I want to explore how my programming skills can be applied to humanities problems.
            While attending the 2024 Digital Humanities Summer Institute I realized just how helpful programming can be
            for all sorts of work in different fields!
          </p>
        </div>
        <div className={"col-4"}>
          <img src={headshot} width='300' height='399'/>
        </div>
      </div>
        
        

      
    </div>
  );
}

export default HomePage;

// I added a comment here to test how commits work!

// filename -App.js


