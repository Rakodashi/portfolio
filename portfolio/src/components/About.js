import profile from '../assets/profile.png'

const About = () => {
  return ( 
    <section id="about">
        <div id="main">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
            <img src={profile} alt="Rafa-profile-pic" id="profile" />
            <div class="main-titles">
                <h1>Rafaela Conrado da Silva</h1>
                <h2>Front-End Web Developer & Graphic Designer</h2>
            </div>
        </div> 

        <div class="skills">
            <i class="devicon-git-plain" title="Git" alt="Git"></i>
            <i class="devicon-html5-plain" title="HTML" alt="HTML"></i>  
            <i class="devicon-css3-plain" title="CSS" alt="CSS"></i>
            <i class="devicon-javascript-plain" title="JavaScript" alt="JavaScript"></i>
            <i class="devicon-python-plain" title="Python" alt="Python"></i>
            <i class="devicon-sass-original" title="SASS" alt="SASS"></i>
            <i class="devicon-typescript-plain" title="TypeScript" alt="TypeScript"></i>
            <i class="devicon-react-original" title="React" alt="React"></i>
            <i class="devicon-django-plain" title="Django" alt="Django"></i>
            {/* <i class="devicon-mysql-plain" title="MySQL" alt="MySQL"></i> */}
            {/* <i class="devicon-c-plain"  title="C" alt="C"></i> */}
            <i class="devicon-illustrator-plain" title="Adobe Illustrator" alt="Adobe Illustrator"></i>
            <i class="devicon-photoshop-plain" title="Adobe Photoshop" alt="Adobe Photoshop"></i>
            <i class="devicon-blender-original" title="Blender" alt="Blender"></i>
            <i class="devicon-vscode-plain" title="VS Code" alt="VS Code"></i>
            <i class="devicon-figma-plain"  title="Figma" alt="Figma"></i>
            <i class="devicon-bootstrap-plain" title="Bootstrap" alt="Bootstrap"></i>
        </div>

        <h3>
            <p>Hey there, I'm Rafa! I'm a Front-End Developer, graduated in Graphic Design and also have some knowledge on 3DCG and can speak portuguese, english, and japanese.</p>
            <p>I have a year of experience building Front-End projects, and I'm also studying Web Development and Computer Science with Harvard's CS50w & CS50x Online Courses, I've done a 10-day Intensive coding course at Alura and a Front-end course at Santander Coders, and I'm now focusing on learning frameworks like React, and polishing my skills by doing projects like this very site!</p>
        </h3>
    </section>
   );
}
 
export default About;