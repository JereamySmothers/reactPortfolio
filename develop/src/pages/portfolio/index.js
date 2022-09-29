import React, { useState } from "react";
import Projects from "./projects";

function Portfolio(currentCategory, setCurrentCategory){
    const [projects] = useState([

        {
            name:'Note Taker',
            url:'https://jereamysmothers.github.io/noteTaker/',
            img:require('')
        },{
            name:'Social Networking API',
            url:'https://jereamysmothers.github.io/socialNetworkAPI/',
            img:require('')
        },{
            name:'Tech Blogs',
            url:'https://jereamysmothers.github.io/techBlogs/',
            img:require('')
        },{
            name:'Project Green Room',
            url:'https://young-dusk-65986.herokuapp.com/',
            img:require('')
        },
        //project 3
        // {
        //     name:'',
        //     url:'',
        //     img:require('')
        // }

    ]);

    return(
        <section>
            <h1>Portfolio</h1>
            <div>
                <ul className="projectList">
                    {projects.map((projects) => (
                        <Projects project={projects}></Projects>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;