// pages/about.js

import React from "react";
import resume from "../../resources/resume.pdf";

const wrapText = {
    textAlign: "left",
    float: "left",
    width: "0",
    height: "0",

};

const borderIn = {
    //border: "10px solid white",
    padding: "0px 0px 0px 5px",
}


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
                src={resume}
                title="Charli Resume"
            >
            </iframe></div>
            <h2 style={borderIn}>
                Hello! My name is Charli and I'm a 3rd year computer science student at the University of Victoria.
            </h2>
            <p style={borderIn}>

                I wasn't always interested in computer science! In fact, when I started at UVic I was dreading the 1 computer science course that was required for my program.<br />
                However, at the end of my first year I realized that the introductory computer science course was my favourite! So, on a slight whim, I decided to switch into the computer science program, and I've been loving it ever since.
            </p>

            <h3 style={borderIn}>
                Advocacy
            </h3>
            <p style={borderIn}>
                As a woman in a male dominated field, it's important for me to be educated about feminism, advocacy,
                and intersectionality. I am driven by my desire to encourage young women to stay in STEM.
            </p>


            <h3 style={borderIn}>
                Work Experience
            </h3>
            <h4 style={borderIn}>Software Developer Co-op - Ocean Networks Canada</h4>
            <p style={borderIn}>
                I will be starting my first co-op role as a software developer with Ocean Networks Canada (ONC) in September 2024.
                I admire the work done by ONC and I was so excited to see a job posting working for them, so imagine how
                excited I was when I learned that I got the job!
            </p>
            <h4 style={borderIn}>Work Study Database Assistant - Centre for Accessible Learning</h4>
            <p style={borderIn}>
                My first technical work experience was my Work Study position as a Database Assistant at the
                Centre for Accessible Learning (CAL) at UVic.
                This role certainly threw me into the deep end! I had never worked with databases before, so trying to figure
                out this big real world database was really difficult. Luckily, my supervisor cultivated a wonderful
                work environment where I was encouraged to figure things out on my own, and supported when I asked for help.
                <br></br>
                <br></br>
                My biggest project in this role was making an automatic check that would email students if their exams
                were scheduled in such a way that their academic accommodations wouldn't be met. This involved some database SQL stuff,
                some C# stuff, and some HTML email formatting stuff!
            </p>


            <h3 style={borderIn}>Volunteering</h3>
                <h4 style={borderIn}>
                    Women in Engineering and Computer Science (WECS)
                </h4>
                <p style={borderIn}>
                    In October 2023 I joined the reviving of WECS at UVic as the Academia Director. In my first two months,
                    I organized 3 final exam review sessions and ran 1 review session myself. In my second semester as Academia Director
                    I organized 5 more final exam review sessions. My role required organizing volunteers, contacting professors,
                    and communicating within WECS to ensure that all review sessions go smoothly.
                </p>

                <h4 style={borderIn}>Other Volunteering</h4>
            <p style={borderIn}>Throughout high school I volunteered with <a href="https://auntleahs.org/">Aunt Leah's Place</a>, an organization that
                supports youth in foster care. I volunteered in their thrift store starting when I was 14 and it was a wonderful experience.
                By the end of high school, I'd spent over 500 hours volunteering with Aunt Leah's.
            </p>
            <p style={borderIn}>
                I also volunteered with the UVic Women in Science Peer Mentorship Program as a mentor in my 3rd year of university.
                Additionally, I was a volunteer for the faculty of engineering and computer science welcoming events in Fall 2023.
            </p>
        </div>
    );
};

export default About;