import logo from '../assets/rakodashi-logo.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin-in.svg';
import codepen from '../assets/codepen.svg';
import artstation from '../assets/artstation.svg';
import theme from '../assets/sun.svg';

const Header = () => {
  return ( 
    <header id="header">        
        <a href="#" class="home" id="homeBtn" title="Rakodashi" alt="Rakodashi-Home Button">
            <img src={logo} alt="rakodashi logo" class="logo" />
            <h1>Rakodashi</h1>
        </a>

        <ul id="centerBtns">
                <li>
                    <a href="https://github.com/Rakodashi" target="_blank" rel="noreferrer noopener" id="header-btns">
                        <button class="button" title="Github" id="github" alt="Github Button">
                                <img src={github} />
                            </button>
                        </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rakodashi/" target="_blank" rel="noreferrer noopener" id="header-btns">
                        <button class="button" title="LinkedIn" id="linkedin" alt="LinkedIn Button">
                            <img src={linkedin} />
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://codepen.io/collection/dbrrkE" target="_blank" rel="noreferrer noopener" id="header-btns">
                        <button class="button" title="CodePen" id="codepen" alt="CodePen Button">
                            <img src={codepen} />
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://www.artstation.com/lyokonrado/albums/all" target="_blank" rel="noreferrer noopener" id="header-btns">
                        <button class="button" title="ArtStation" id="artstation" alt="ArtStation Button">
                            <img src={artstation} />
                        </button>
                    </a>
                </li>
                {/* <li>
                    <button onclick="changeLang()" id="header-btns" title="Language" alt="Language Button">
                        <img src="CSS/world.svg">
                    </button>
                </li> */}
                <li>
                    <button onclick="changeTheme()" id="header-btns" title="Theme" alt="Theme Button">
                        <img src={theme} class="sun" />
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
        
            <ul class="hamburgerMenu">
                <li class="hamburgerBtn">
                    <a href="#">About</a>
                </li>
    
                <li class="hamburgerBtn">
                    <a href="#projects">Projects</a>
                </li>
    
                <li class="hamburgerBtn">
                    <a href="#contact">Contact</a>
                </li>
    
                <li class="hamburgerBtn">
                    <a href="https://github.com/Rakodashi" target="_blank" rel="noreferrer noopener">Github</a>
                </li>
    
                <li class="hamburgerBtn">
                    <a href="https://www.linkedin.com/in/rakodashi/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
                </li>
    
                <li class="hamburgerBtn">
                    <a href="https://codepen.io/collection/dbrrkE" target="_blank" rel="noreferrer noopener">Codepen</a>
                </li>
    
                <li class="hamburgerBtn">
                    <a href="https://www.artstation.com/lyokonrado/albums/all" target="_blank" rel="noreferrer noopener">ArtStation</a>
                </li>

                {/* <li class="hamburgerBtn">
                    <a onclick="changeLang()">Language</a>
                </li> */}

                <li class="hamburgerBtn">
                    <a onclick="changeTheme()">Theme</a>
                </li>
                
            </ul>
            
        <input type="checkbox" class="menu-btn" id="menu-btn" onclick="toggleMenu()" />
        <label for="menu-btn" class="menu-icon" id="menu-icon">
            <span class="menu-icon__line"></span>
        </label>

    </header>
   );
}
 
export default Header;