import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import photo from "../../assets/small/runbuddy/run-buddy(homepage).png"

function Projects(props) {
    const currentCategory = {

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
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{capitalizeFirstLetter(currentCategory.language)}</p>
            <div className="flex-row">
                <img src={photo}
                    alt="RunBuddy Hompage"
                    className='img-thumbnail mx-1' />
            </div>
        </section>
    );
}


export default Projects;
