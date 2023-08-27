import './App.css';
// import './App2.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skill from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <main className="main" id="top">
        <NavBar></NavBar>
        <Home></Home>
        <AboutMe></AboutMe>
        <Skill></Skill>
        <Projects></Projects>
        <ContactMe></ContactMe>

      </main>


    </>

  );
}

export default App;
