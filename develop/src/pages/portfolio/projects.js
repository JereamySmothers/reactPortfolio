import React from "react";

function Projects({project}){
    return(
        <li>
            <a href={project.url}>
            <img className="projectImg" src={project.img}/> 
            <p className="projectName">{project.name}</p>
            </a>
        </li>

    )
};

export default Projects;