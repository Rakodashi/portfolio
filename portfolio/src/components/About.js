import profile from '../assets/profile.png'

import { useTranslation } from 'react-i18next';
import '../lib/i18n';

const About = () => {

    const { t } = useTranslation()
    
  return ( 
    <section id="about">
        <div id="main">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            <img src={profile} alt="Rafa-profile-pic" id="profile" />
            <div className="main-titles">
                <h1>Rafaela Conrado da Silva</h1>
                <h2>{t('Front-End Web Developer & Graphic Designer')}</h2>
            </div>
        </div> 

        <div className="skills">
            <i className="devicon-git-plain" title="Git" alt="Git"></i>
            <i className="devicon-html5-plain" title="HTML" alt="HTML"></i>  
            <i className="devicon-css3-plain" title="CSS" alt="CSS"></i>
            <i className="devicon-javascript-plain" title="JavaScript" alt="JavaScript"></i>
            <i className="devicon-python-plain" title="Python" alt="Python"></i>
            <i className="devicon-sass-original" title="SASS" alt="SASS"></i>
            <i className="devicon-typescript-plain" title="TypeScript" alt="TypeScript"></i>
            <i className="devicon-react-original" title="React" alt="React"></i>
            <i className="devicon-nodejs-plain" title="Node.js" alt="Node.js"></i>
            {/* <i className="devicon-django-plain" title="Django" alt="Django"></i> */}
            {/* <i className="devicon-mysql-plain" title="MySQL" alt="MySQL"></i> */}
            {/* <i className="devicon-c-plain"  title="C" alt="C"></i> */}
            <i className="devicon-illustrator-plain" title="Adobe Illustrator" alt="Adobe Illustrator"></i>
            <i className="devicon-photoshop-plain" title="Adobe Photoshop" alt="Adobe Photoshop"></i>
            <i className="devicon-blender-original" title="Blender" alt="Blender"></i>
            <i className="devicon-vscode-plain" title="VS Code" alt="VS Code"></i>
            <i className="devicon-figma-plain"  title="Figma" alt="Figma"></i>
            <i className="devicon-bootstrap-plain" title="Bootstrap" alt="Bootstrap"></i>
        </div>

        <h3>
            <p>{t('Hey there, I\'m Rafa! I\'m a Front-End Developer, graduated in Graphic Design and also have some knowledge on 3DCG and can speak portuguese, english, and japanese.')}</p>
            <p>{t('I have a year of experience building Front-End projects, and I\'m also studying Web Development and Computer Science with Harvard\'s CS50w & CS50x Online Courses, I\'ve done a 10-day Intensive coding course at Alura and a Front-end course at Santander Coders, and I\'m now focusing on learning more about Back-End to complement my knowledge in the MERN stack and React, and polishing my skills by doing projects like this very site!')}</p>
        </h3>
    </section>
   );
}
 
export default About;