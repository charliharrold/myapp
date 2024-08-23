import React from "react";
import image1 from "../../resources/image1.jpg";
import image2 from "../../resources/image2.jpg";
import image3 from "../../resources/image3.jpg";
import image4 from "../../resources/image4.jpg";

const purple = {
    color: "#740da5"
}

const green = {
    color: "#4d8646"
}

const lightBlue = {
    color: "#94d0f2"
}

const grey = {
    color: "#8a8a8a"
}

/*

*/

const Newpage = () => {
    return (
        <div className={"container"}>
            <h1>Europe - Summer 2024</h1>
            <p>I recently went on a 2 month adventure around Europe and it was incredible!
                This was my first semester off since starting university, and I'm very glad that I decided to give myself a break.
                Here, I'll share some of my favourite pictures from the trip.
            </p>

            <hr></hr>

            <div className={"row"}>
                <div className={"col-4"}>
                    <img src={image1} width='307' height='408' class="img-fluid"/>
                </div>
                <div className={"col"}>
                    <h3 style={grey}>Rosetta Stone</h3>
                    I've always thought that the Rosetta Stone was an incredible historical object.
                    I had no idea that it was housed at the British Museum, so it was a wonderful surprise when I visited.
                    The area around the display was packed with people, but that didn't take away the magic.
                    <br></br>
                    <br></br>
                    More information about the Rosetta Stone can be found <a href="https://en.wikipedia.org/wiki/Rosetta_Stone">here</a>.
                </div>

            </div>

            <hr></hr>

            <div className={"row"}>
                <div className={"col"}>
                    <h3 style={lightBlue}>London - Big Ben and Palace of Westminster</h3>
                    <p>London was our last stop of this two month trip, so we were pretty exhausted by the time
                        we got there. We had a lovely wander around London the night we arrived and saw most of the big attractions.
                        Unfortunately it was 33 degrees on our second day in London, and our air conditioning at the hotel wasn't
                        working, so we weren't feeling super up for walking around. We didn't manage to make it to the Tower of London,
                        but that will just be the first thing we do on our next trip back!
                    </p>
                </div>

                <div className={"col-4"}>
                    <img src={image2} width='408' height='307' class="img-fluid"/>
                </div>

            </div>

            <hr></hr>
            <div className={"row"}>
                <div className={"col-5"}>
                    <img src={image3} width='408' height='307' class="img-fluid"/>

                </div>

                <div className={"col"}>
                    <h3 style={purple}>Scottish Thistle</h3>
                    <p>I've always liked the thistle, probably because it is the national emblem of Scotland.
                        After moving to Canada, I didn't return to Scotland for 5 years, so the thistle has only become more
                        meaningful to me over time as it's a reminder of home.
                        <br></br>
                        <br></br>
                        The thistle has a long history in Scotland, learn more about it <a href="https://en.wikipedia.org/wiki/Thistle#Scottish_thistle">here</a>.
                    </p>
                </div>

            </div>

            <hr></hr>

            <div className={"row"}>
                <div className={"col"}>
                    <h3 style={green}>The Isle of Skye</h3>
                    <p>While in Scotland, we took a day trip to Skye. I visited Skye as a kid and remembered it being beautiful
                        so I was excited to be able to go back. Our tour guide was wonderful, and we learned a lot about the
                        myths and legends surrounding the Isle of Skye.
                        <br></br>
                        <br></br>
                        This photo was taken in a particularly windy (and beautiful) spot!
                        <br></br>
                        <br></br>
                        Learn more about the Isle of Skye <a href="https://en.wikipedia.org/wiki/Isle_of_Skye">here</a>.
                    </p>

                </div>

                <div className={"col-4"}>
                    <img src={image4} width='408' height='307' class="img-fluid"/>

                </div>

            </div>

            <hr></hr>

        </div>
    );
};

export default Newpage;