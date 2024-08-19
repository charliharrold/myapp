import { clear } from "@testing-library/user-event/dist/clear";
import React from "react";

const rightAlign = {
    float: 'right',
    clear: 'both',

  }

const leftAlign = {
    float: 'left',
    clear: 'both',
}


const alignOne = {
    display: 'flex',
    alignItems: 'center',
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

const leftFloat = {
    float: 'left',
}

const alignAndRight = {
    float: 'right',
    clear: 'both',
    display: 'flex',
    alignItems: 'center',
}

const Projects = () => {
    return (
        <div>
            <h1>Welcome to my photos</h1>

            <div>
                <h3 style={rightAlign}>Rosetta Stone</h3>
                
                <p style={rightAlign}>
                    Writing next to rosetta stone
                </p>
                <img src='image1.jpg' width='307' height='408'/>
            </div>
      

            <div>
            <img style={rightAlign} src='image2.jpg' width='408' height='307'/>
                <h3 style={alignOne}>London picture</h3>
                
                <p style={alignOne}>
                    Writing next to London picture of me
                </p>
                
            </div>

            <div>
            <img style={leftAlign} src='image3.jpg' width='408' height='307'/>
                <h3 style={alignAndRight}>Thistle Picture</h3>
                <p style={alignAndRight}>Writing next to thistle picture.</p>
                
            </div>
            <div>
                <img style={rightAlign} src='image4.jpg' width='408' height='307'/>
            </div>
        </div>
    );
};



export default Projects;
