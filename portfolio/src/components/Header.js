import logo from '../assets/rakodashi-logo.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin-in.svg';
import codepen from '../assets/codepen.svg';
import artstation from '../assets/artstation.svg';
import theme from '../assets/sun.svg';
import ToggleMenu from '../components/ToggleMenu';
import ChangeTheme from '../components/ChangeTheme';

const Header = () => {
  return ( 
    // <body>
        <header id="header">        
            <a href="#" className="home" id="homeBtn" title="Rakodashi" alt="Rakodashi-Home Button">
                <img src={logo} alt="rakodashi logo" className="logo" />
                <h1>Rakodashi</h1>
            </a>

            <ul id="centerBtns">
                    <li>
                        <a href="https://github.com/Rakodashi" target="_blank" rel="noreferrer noopener" id="header-btns">
                            <button className="button" title="Github" id="github" alt="Github Button">
                                    <img src={github} />
                                </button>
                            </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rakodashi/" target="_blank" rel="noreferrer noopener" id="header-btns">
                            <button className="button" title="LinkedIn" id="linkedin" alt="LinkedIn Button">
                                <img src={linkedin} />
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/collection/dbrrkE" target="_blank" rel="noreferrer noopener" id="header-btns">
                            <button className="button" title="CodePen" id="codepen" alt="CodePen Button">
                                <img src={codepen} />
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.artstation.com/lyokonrado/albums/all" target="_blank" rel="noreferrer noopener" id="header-btns">
                            <button className="button" title="ArtStation" id="artstation" alt="ArtStation Button">
                                <img src={artstation} />
                            </button>
                        </a>
                    </li>
                    {/* <li>
                        <button onClick={changeLang()} id="header-btns" title="Language" alt="Language Button">
                            <img src="CSS/world.svg">
                        </button>
                    </li> */}
                    <li>
                        <button onClick={ChangeTheme} id="header-btns" title="Theme" alt="Theme Button">
                            <img src={theme} className="sun" />
                            {/* <img src="CSS/moon.svg" class="moon"> */}
                        </button>
                    </li>
                </ul> 

                <ul id="rightBtns">
                    <li>
                        <a href="#" id="header-btns">About</a>
                    </li>
                    <li>
                        <a href="#projects" id="header-btns">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" id="header-btns">Contact</a>
                    </li>
                </ul>
            
                <ul className="hamburgerMenu">
                    <li className="hamburgerBtn">
                        <a href="#">About</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="#projects">Projects</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="#contact">Contact</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="https://github.com/Rakodashi" target="_blank" rel="noreferrer noopener">Github</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="https://www.linkedin.com/in/rakodashi/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="https://codepen.io/collection/dbrrkE" target="_blank" rel="noreferrer noopener">Codepen</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="https://www.artstation.com/lyokonrado/albums/all" target="_blank" rel="noreferrer noopener">ArtStation</a>
                    </li>

                    {/* <li class="hamburgerBtn">
                        <a onClick={changeLang()}>Language</a>
                    </li> */}

                    <li className="hamburgerBtn">
                        <a onClick={ChangeTheme}>Theme</a>
                        <a href="" ></a>
                    </li>
                    
                </ul>
                
            <input type="checkbox" className="menu-btn" id="menu-btn" onClick={ToggleMenu} />
            <label for="menu-btn" className="menu-icon" id="menu-icon">
                <span className="menu-icon__line"></span>
            </label>

        </header>
    // </body>
   );
}
 
export default Header;