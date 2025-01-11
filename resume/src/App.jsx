
import './App.css'
import First  from './home'
import Project from './project'
import Skill from './skill'
import Contact from './contact'
import Example from './assets/profile.jpg'
function App() {

  return <>
  <nav>
    <header>
      <ul>
      <First/>
      <Project/>
      <Skill/>
      <Contact/>
      </ul>
    </header>
  </nav>
  <img src={Example} alt="erroe" />
 
  </>
  }

export default App
