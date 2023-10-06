import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

const Projects = () => {
  return ( 
    <section id="projects">

            <h1>Projects</h1>

                <div class="cardText">
                    <div class="card">
                        <img src={project1} alt="Project 1" />
                    </div>
                    <div class="cardInfo">  
                        <h2>We Form</h2>
                        <hr />
                        <p>A fictional app UI with a main page, an entity registry page, a see registered entities page and a register new operation field page</p>
                        <p>Technologies used: Git, HTML, CSS</p>
                        <div class="projBtns">
                            <a href="https://weform.vercel.app" class="lBtn" target="_blank" rel="noreferrer noopener">Site</a>
                                <a href="https://github.com/Rakodashi/We-Form" class="rBtn" target="_blank" rel="noreferrer noopener">Code</a>
                        </div>
                    </div>
                </div>

                <div class="textCard">
                    <div class="cardInfo">  
                        <h2>Currency Converter</h2>
                        <hr />
                        <p>A currency converter made as the first project in the 10-day Intensive at Alura.</p>
                        <p>Technologies used: HTML, CSS, JavaScript</p>
                        <div class="projBtns">
                            <a href="https://currency-converter-rakodashi.vercel.app" class="lBtn" target="_blank" rel="noreferrer noopener">Site</a>
                                <a href="https://github.com/Rakodashi/currency-converter" class="rBtn" target="_blank" rel="noreferrer noopener">Code</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={project2} alt="Project 2" />
                    </div>
                </div>

                <div class="cardText">
                    <div class="card">
                        <img src={project3} alt="Project 3" />
                    </div>
                    <div class="cardInfo">  
                        <h2>Google Clone</h2>
                        <hr />
                        <p>A google clone website that reproduces the main page, the Google Images page, the Advanced Search page and a semi-functional login page.</p>
                        <p>Technologies used: HTML, CSS and Bootstrap</p>
                        <div class="projBtns">
                            <a href="https://google-clone-rakodashi.vercel.app" class="lBtn" target="_blank" rel="noreferrer noopener">Site</a>
                                <a href="https://github.com/Rakodashi/google-clone" class="rBtn" target="_blank" rel="noreferrer noopener">Code</a>
                        </div>
                    </div>
                </div>

                {/* <div class="textCard">
                    <div class="cardInfo">  
                        <h2>Aluraflix</h2>
                        <hr>
                        <p>Film and Series Catalog made as the fifth project in the 10-day Intensive at Alura.</p>
                        <p>Technologies used: HTML, CSS, JavaScript</p>
                        <div class="projBtns">
                            <a href="https://aluraflix-rakodashi.vercel.app" class="lBtn" target="_blank" rel="noreferrer noopener">Site</a>
                                <a href="https://github.com/Rakodashi/aluraflix" class="rBtn" target="_blank" rel="noreferrer noopener">Code</a>
                        </div>
                    </div>
                    <div class="card">
                        <img src={project4} alt="Project 4"> 
                    </div>
                </div> */}

    </section>
   );
}
 
export default Projects;