import React from "react";
import image1 from "../../resources/image1.jpg";
import image2 from "../../resources/image2.jpg";
import image3 from "../../resources/image3.jpg";
import image4 from "../../resources/image4.jpg";

const Newpage = () => {
    return (
        <div className={"container"}>
            <h1>Title at the top of the page</h1>
            <p>Some description about what this is</p>
            <div className={"row"}>
                <div className={"col-4"}>
                    <img src={image1} width='307' height='408' />
                </div>
                <div className={"col"}>
                    <h3>Here is a title</h3>
                    Here is a picture with the
                </div>

            </div>

            <hr></hr>

            <div className={"row"}>
                <div className={"col"}>
                    <h3>London Picture Title</h3>
                    <p>writing next to the london picture</p>
                </div>

                <div className={"col-4"}>
                    <img src={image2} width='408' height='307' />
                </div>

            </div>

            <hr></hr>
            <div className={"row"}>
                <div className={"col-5"}>
                    <img src={image3} width='408' height='307' />

                </div>

                <div className={"col"}>
                    <h3>thistle picture</h3>
                    <p>writing next to the thistle picture</p>
                </div>

            </div>

            <hr></hr>

            <div className={"row"}>
                <div className={"col"}>
                <h3>Skye picture</h3>
                <p>writing next to the Skye picture</p>

                </div>

                <div className={"col-4"}>
                <img src={image4} width='408' height='307' />
                    
                </div>

            </div>

            <hr></hr>

        </div>
    );
};

export default Newpage;