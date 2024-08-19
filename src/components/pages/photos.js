import React from "react";
import { MdWrapText } from "react-icons/md";

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


const leftFloat = {
    float: 'left',
}

const alignAndRight = {
    float: 'right',
    display: 'grid',
    alignItems: 'center',
}

const alignAndLeft = {
    float: 'left',
    display: 'grid',
    alignItems: 'center',
    //'overflow-wrap': 'break-word',
}

const Projects = () => {
    return (
        <div>

            <h1>Welcome to my photos</h1>
            <p>I recently went on a trip, here are some pics from it.</p>

            <div>
            <img style={leftAlign} src='image1.jpg' width='307' height='408'/>
                <div style={alignAndRight}>
                    <h3>Rosetta Stone</h3>
                    <p>Writing next to rosetta stone keep on writing to see what happens</p>
                </div>
            </div>

            <div>
            <img style={rightAlign} src='image2.jpg' width='408' height='307'/>

                <div style={alignAndLeft}>
                    <h3>London picture</h3>
                    <p>Writing next to London picture of me</p>
                </div>
            </div>

            <div>
                <img style={leftAlign} src='image3.jpg' width='408' height='307'/>

                <div style={alignAndRight}>
                    <h3>Thistle Picture</h3>
                    <p>Writing next to thistle picture. what happens if i keep writing</p>
                </div>
            </div>

            <div>
                <img style={rightAlign} src='image4.jpg' width='408' height='307'/>
                
                <div style={alignAndLeft}>
                    <h3>Me in Skye</h3>
                    <p>The picture of me in Skye when it was windy.</p>
                </div>
            </div>

            <div>
                <img style={leftAlign} src='image3.jpg' width='408' height='307'/>

                <div style={alignAndRight}>
                    <h3>Thistle Picture</h3>
                    <p>Writing next to thistle picture. what happens if i keep writing</p>
                </div>
            </div>

            <div>
                <img style={rightAlign} src='image4.jpg' width='408' height='307'/>
                
                <div style={alignAndLeft}>
                    <h3>Me in Skye</h3>
                    <p>The picture of me in Skye when it was windy.</p>
                </div>
            </div>

        </div>
    );
};



export default Projects;
