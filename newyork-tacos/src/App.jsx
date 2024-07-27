import "./App.scss";
import Hero from './components/Hero'
import OurMenu from './components/OurMenu'
import Contact from "./components/Contact";
import logo from './assets/logo.png';


function App() {
  return(
    <div>
      <Hero/>
      <OurMenu />
      <Contact />
      <footer>
      <img src={logo} alt="logo" />
        <div className="container-footer">
          <p>
            &copy; 2024{" "}
            <a className="link" href="https://github.com/BeSomi22" target="_blank">
              BeSomi22
            </a>{" "}
            Tacos New York 
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App;
