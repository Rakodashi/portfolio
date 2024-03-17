import logo from '../assets/rakodashi-logo.png';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin-in.svg';
import codepen from '../assets/codepen.svg';
import artstation from '../assets/artstation.svg';
import lang from '../assets/world.svg';
import theme from '../assets/sun.svg';
// import ToggleMenu from '../components/ToggleMenu';
import React, {useState, useEffect, useRef} from 'react';

import { useTranslation } from 'react-i18next';
import '../lib/i18n';

const Header = () => {
    const { t, i18n: {changeLanguage, language} } = useTranslation()
    const [currentLang, setCurrentLang] = useState(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLang === 'en' ? 'pt' : 'en'
        changeLanguage(newLanguage)
        setCurrentLang(newLanguage)
    }

    const ChangeTheme = () => {
        return (
            document.body.classList.toggle('light')
         );
    }
    const ToggleMenu = () => {
        return ( 
          document.body.classList.toggle('show')
         );
    }

    // useEffect(() => {
    //     let menuRef = useRef()
        
    //     document.addEventListener('mousedown', (e) => {
    //       if (!menuRef.current.contains(e.target)) {
    //         // ToggleMenu(false);
    //         document.body.classList.toggle('show')
    //       }
    //     });
    //   });

  return ( 
    // <body>
        <header id="header">        
            <a href="#" className="home" id="homeBtn" title={t('Rakodashi | Home Button')} alt={t('Rakodashi | Home Button')}>
                <img src={logo} alt="rakodashi logo" className="logo" />
                <h1>Rakodashi</h1>
            </a>

            <ul id="centerBtns">
                    <li>
                        <a href="https://github.com/Rakodashi" target="_blank" rel="noreferrer noopener" id="header-btns">
                            <button className="button" title="Github" id="github" alt={t('Github Button')}>
                                    <img src={github} />
                                </button>
                            </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/rakodashi/" target="_blank" rel="noreferrer noopener" id="header-btns">
                            <button className="button" title="LinkedIn" id="linkedin" alt={t('LinkedIn Button')}>
                                <img src={linkedin} />
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/collection/dbrrkE" target="_blank" rel="noreferrer noopener" id="header-btns">
                            <button className="button" title="CodePen" id="codepen" alt={t('CodePen Button')}>
                                <img src={codepen} />
                            </button>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.artstation.com/lyokonrado/albums/all" target="_blank" rel="noreferrer noopener" id="header-btns">
                            <button className="button" title="ArtStation" id="artstation" alt={t('ArtStation Button')}>
                                <img src={artstation} />
                            </button>
                        </a>
                    </li>
                    <li>
                        <button onClick={handleChangeLanguage} id="header-btns" title={t('Change language Pt-Br | En')} alt={t('Change language Pt-Br | En')}>
                            <img src={lang} />
                        </button>
                    </li>
                    <li>
                        <button onClick={ChangeTheme} id="header-btns" title={t('Theme Button')} alt={t('Theme Button')}>
                            <img src={theme} className="sun" />
                        </button>
                    </li>
                </ul> 

                <ul id="rightBtns">
                    <li>
                        <a href="#" id="header-btns">{t('About')}</a>
                    </li>
                    <li>
                        <a href="#projects" id="header-btns">{t('Projects')}</a>
                    </li>
                    <li>
                        <a href="#contact" id="header-btns">{t('Contact')}</a>
                    </li>
                </ul>
            
                <ul className="hamburgerMenu"
                // ref={menuRef}
                >
                    <li className="hamburgerBtn">
                        <a href="#">{t('About')}</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="#projects">{t('Projects')}</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="#contact">{t('Contact')}</a>
                    </li>

                    <li className="hamburgerBtn">
                        <a onClick={handleChangeLanguage} alt={t('Change language Pt-Br | En')}>{t('Language')}</a>
                    </li>

                    <li className="hamburgerBtn">
                        <a onClick={ChangeTheme} alt={t('Theme Button')}>{t('Theme')}</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="https://github.com/Rakodashi" target="_blank" rel="noreferrer noopener" alt={t('Github Button')}>Github</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="https://www.linkedin.com/in/rakodashi/" target="_blank" rel="noreferrer noopener" alt={t('LinkedIn Button')}>LinkedIn</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="https://codepen.io/collection/dbrrkE" target="_blank" rel="noreferrer noopener" alt={t('CodePen Button')}>Codepen</a>
                    </li>
        
                    <li className="hamburgerBtn">
                        <a href="https://www.artstation.com/lyokonrado/albums/all" target="_blank" rel="noreferrer noopener" alt={t('ArtStation Button')}>ArtStation</a>
                    </li>
                    
                </ul>
                
            <input type="checkbox" className="menu-btn" id="menu-btn" onClick={ToggleMenu} />
            <label htmlFor="menu-btn" className="menu-icon" id="menu-icon">
                <span className="menu-icon__line"></span>
            </label>

        </header>
    // </body>
   );
}
 
export default Header;