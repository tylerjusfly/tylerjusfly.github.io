import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';

function App() {
  return (
    <>
      <Nav />
      <div>
        <About />
        <Experience />
        <Education />
        <Projects />
      </div>
    </>
  );
}

export default App;
