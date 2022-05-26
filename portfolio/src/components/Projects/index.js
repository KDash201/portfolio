import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
// import photo from "../../assets/small/runbuddy/"

function Projects(props) {

    const currentProject = {

        name: "run buddy",
        language: "HTML & CSS",
    };
    // {
    //     name: "Wet Nose Adoption",
    //     language: "HTML, CSS and Javascript",
    // },
    // {
    //     name: "Heat",
    //     language: "Javascript, React, GraphQL and Express",
    // },
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
            <p>{currentProject.name}</p>
            <div>
                {/* className='flex-row'>
                <img src={photo}
                    alt="Placeholder"
                    className='img-thumbnail mx-1' /> */}
            </div>
        </section>
    );
}


export default Projects;
