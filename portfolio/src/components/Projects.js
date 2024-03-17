import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

import { useTranslation } from 'react-i18next';
import '../lib/i18n';

const Projects = () => {

  const { t } = useTranslation()

  return ( 
    <section id="projects">

            <h1>{t('Projects')}</h1>

                <div className="cardText">
                    <div className="card">
                        <img src={project1} alt="Project 1" />
                    </div>
                    <div className="cardInfo">  
                        <h2>We Form</h2>
                        <hr />

                        <p>{t('A fictional app UI with a main page, an entity registry page, a see registered entities page and a register new operation field page.')}</p>
                        <p>{t('Technologies used')}: Git, HTML, CSS</p>

                        <div className="projBtns">
                            <a href="https://weform.vercel.app" className="lBtn" target="_blank" rel="noreferrer noopener">Site</a>
                                <a href="https://github.com/Rakodashi/We-Form" className="rBtn" target="_blank" rel="noreferrer noopener">{t('Code')}</a>
                        </div>
                    </div>
                </div>

                <div className="textCard">
                    <div className="cardInfo">  
                        <h2>{t('Currency Converter')}</h2>
                        <hr />

                        <p>{t('A currency converter made as the first project in the 10-day Intensive at Alura.')}</p>
                        <p>{t('Technologies used')}: HTML, CSS, JavaScript</p>

                        <div className="projBtns">
                            <a href="https://currency-converter-rakodashi.vercel.app" className="lBtn" target="_blank" rel="noreferrer noopener">Site</a>
                                <a href="https://github.com/Rakodashi/currency-converter" className="rBtn" target="_blank" rel="noreferrer noopener">{t('Code')}</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={project2} alt="Project 2" />
                    </div>
                </div>

                <div className="cardText">
                    <div className="card">
                        <img src={project3} alt="Project 3" />
                    </div>
                    <div className="cardInfo">  
                        <h2>Google Clone</h2>
                        <hr />
                        <p>{t('A google clone website that reproduces the main page, the Google Images page, the Advanced Search page and a semi-functional login page.')}</p>
                        <p>{t('Technologies used')}: HTML, CSS, Bootstrap</p>
                        <div className="projBtns">
                            <a href="https://google-clone-rakodashi.vercel.app" className="lBtn" target="_blank" rel="noreferrer noopener">Site</a>
                                <a href="https://github.com/Rakodashi/google-clone" className="rBtn" target="_blank" rel="noreferrer noopener">{t('Code')}</a>
                        </div>
                    </div>
                </div>

                {/* <div className="textCard">
                    <div className="cardInfo">  
                        <h2>Aluraflix</h2>
                        <hr>
                        <p>Film and Series Catalog made as the fifth project in the 10-day Intensive at Alura.</p>
                        <p>Technologies used: HTML, CSS, JavaScript</p>
                        <div className="projBtns">
                            <a href="https://aluraflix-rakodashi.vercel.app" className="lBtn" target="_blank" rel="noreferrer noopener">Site</a>
                                <a href="https://github.com/Rakodashi/aluraflix" className="rBtn" target="_blank" rel="noreferrer noopener">Code</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src={project4} alt="Project 4"> 
                    </div>
                </div> */}

    </section>
   );
}
 
export default Projects;