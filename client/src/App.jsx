import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import ProblemSolving from './components/ProblemSolving';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <ProblemSolving />
        <Achievements />
        <Contact />
      </main>

      <footer className="bg-secondary border-t border-borderColor py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-textSecondary">
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
