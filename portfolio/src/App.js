import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Projects from './components/Projects';


function App() {

  const [categories] = useState([

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

  const [currentCategory, setCurrentCategory] = useState(categories[0])


  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Projects></Projects>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
