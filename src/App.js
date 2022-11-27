import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Nav } from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <div>
        <About />
        <Experience />
        <Education />
      </div>
    </>
  );
}

export default App;
