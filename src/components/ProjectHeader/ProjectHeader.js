import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { IoIosArrowBack } from 'react-icons/io';

function ProjectHeader({ title, project}) {
    // This component renders the head of each project to give information on it.
    let history = useNavigate();

    const home = () => {
        history.push("/");
    }

    return(
        <div className="projectHeader">
            <div className="projectHead">
                <button onClick={home}><IoIosArrowBack size={30} color={"white"}/></button>
            </div>
            
            <h2 className="projectName">{title}</h2>
            <div className="projectDesc">
                <p>{project.description}</p>
            </div>
            {/* -------------Important------------- */}
            {/* For the links the first needs to be github and then live project */}
            <div className="projectLinks">
                <p>Github: <a href={project.links[0]}>{project.links[0]}</a></p>
                {project.links[1] ? <p className="liveLink">Live project: <a href={project.links[1]}>{project.links[1]}</a></p> : <p></p>}
            </div>
            <div className="projectTools">
                <p>Tools</p>
                <ul>
                    {project.tools.map((skill) => {
                        return <li>{skill}</li>
                    })}
                </ul>
                
            </div>
        </div>
    )
}

export default ProjectHeader;