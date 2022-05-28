import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers"

function Nav() {

    const [categories] = useState([

        {
            name: 'project',
            description: 'A list of all projects',
        },
        {
            name: "Run Buddy",
            language: "HTML & CSS",
        },
        {
            name: 'wet Nose Adoption',
            description: 'Html, CSS, and Javascript'
        },
        {
            name: "Heat",
            description: "Javascript, React, GraphQL and Express",
        },
    ]);

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    const [currentCategory, setCurrentCategory] = useState(categories[0])

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">

                    K-Von Madison
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a
                            href="#about"
                        >
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                            <span
                                onClick={() => {
                                    setCurrentCategory(category.name)
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;