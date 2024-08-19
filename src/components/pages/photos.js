import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";

const rightAlign = {
    float: 'right',
    //padding: "0px 0px 50px 0px",
    clear: 'both',

  }

const leftAlign = {
    float: 'left',
    clear: 'both',
}

const borderIn = {
    //border: "10px solid white",
    padding: "0px 0px 50px 0px",
}

const alignOne = {
    display: 'flex',
    alignItems: 'center',
}

const otherRight = {

    position: 'absolute',
    right: '0px',
    width: '300px',
    border: '3px solid #73AD21',
    padding: '10px',
}

const spanOne = {
    padding: '10px',
}

const dispFlex = {
    display: 'flex',
}

/*
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
*/






/*
const Projects = () => {
    return (
        <div>
            <h1>Welcome to my photos</h1>

            <div>
                <h3>Rosetta Stone</h3>
                <img style={rightAlign} src='image1.jpg' width='307' height='408'/>
                <p>
                    Writing next to rosetta stone
                </p>
            </div>
      

            <div>
            <div style={dispFlex}>
                <img style={leftAlign} src='image2.jpg' width='408' height='307'/>
                </div>
                <div>
                <h3 style={rightAlign}>London picture</h3>
                
                <p style={rightAlign}>
                    Writing next to London picture of me
                </p>
                </div>
                
            </div>

            <div>
                <img style={rightAlign} src='image3.jpg' width='408' height='307'/>
            </div>

            <img style={leftAlign} src='image4.jpg' width='408' height='307'/>
        </div>
    );
};
*/

export default Projects;
