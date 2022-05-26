import React from 'react';
import About from './components/About';
import Nav from './components/Nav'
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Nav />
      <main>
        <Projects></Projects>
        <About />
      </main>
    </div>
  );
}

export default App;
