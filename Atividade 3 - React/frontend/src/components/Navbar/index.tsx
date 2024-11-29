import {ReactComponent as IconeGithub} from "../../assets/img/GitHub.svg";
import './style.css';


function App() {
  return (
    <header>
      <nav className="container">
        <div className="movies-nav-content">
          <h1>Movies</h1>
          <a href="https://github.com/JulioSbto">
            <div className="movies-repository-container">
              <IconeGithub/>
              <p className='movies-repository-link'>/GitHub</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default App;
