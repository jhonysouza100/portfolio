
import './../css/Main.css'
import { useState } from 'react';

export default function Main() {

  const [activeTab, setActiveTab] = useState('#projects'); // Estado para mantener la pestaña activa

  const handleTabClick = (e) => {
  const target = e.target.dataset.target
  setActiveTab(target);
  };


  return(
    <main className="main">
        <section className="filters container">
      {/*=============== FILTERS TABS data-target ===============*/}
      {/* data-target */}
        <ul className="filters_content">
          <button onClick={ (e) => handleTabClick(e) } className={`filters_button ${activeTab === "#projects" ? "filter-tab-active" : ""}`} data-target="#projects">Projects</button>
          <button onClick={ (e) => handleTabClick(e) } className={`filters_button ${activeTab === "#skills" ? "filter-tab-active" : ""}`} data-target="#skills">Skills</button>
        </ul>
      {/* data-content */}
      <div className="filters_sections">
        {/*=============== PROJECTS ===============*/}
        <div className={`projects_content grid ${activeTab === "#projects" ? "filters_active" : ""}`} id="projects" data-content="#projects">
          <article className="projects_card">
            <img src="./../../public/img/project3.png" alt="" className="projects_img" />
            <div className="projects_modal">
              <div>
                <span className="projects_subtitle">Vanilla Js App</span>
                <h3 className="projects_title">Professional Resume</h3>
                <a
                  href="https://miwebcv.netlify.app"
                  className="projects_button button button_small"
                >
                  <i className="ri-link" />
                </a>
              </div>
            </div>
          </article>
          <article className="projects_card">
            <img src="./../../public/img/project1.png" alt="" className="projects_img" />
            <div className="projects_modal">
              <div>
                <span className="projects_subtitle">Web</span>
                <h3 className="projects_title">Cristmas Landing Page</h3>
                <a
                  href="https://responsive-cristmas-website.netlify.app/"
                  target="_blank"
                  className="projects_button button button_small"
                >
                  <i className="ri-link" />
                </a>
              </div>
            </div>
          </article>
          <article className="projects_card">
            <img src="./../../public/img/project2.png" alt="" className="projects_img" />
            <div className="projects_modal">
              <div>
                <span className="projects_subtitle">Responsive</span>
                <h3 className="projects_title">Minimalist PortFolio</h3>
                <a
                  href="https://responsive-minimalist-portfolio.netlify.app/"
                  target="_blank"
                  className="projects_button button button_small"
                >
                  <i className="ri-link" />
                </a>
              </div>
            </div>
          </article>
          <article className="projects_card">
            <img src="./../../public/img/default-img.jpg" alt="" className="projects_img" />
            <div className="projects_modal">
              <div>
                <span className="projects_subtitle">React - Redux</span>
                <h3 className="projects_title">CRUD</h3>
                <a href="#" className="projects_button button button_small">
                  <i className="ri-link" />
                </a>
              </div>
            </div>
          </article>
          <article className="projects_card">
            <img src="./../../public/img/default-img.jpg" alt="" className="projects_img" />
            <div className="projects_modal">
              <div>
                <span className="projects_subtitle">Backend</span>
                <h3 className="projects_title">JHotel App</h3>
                <a href="#" className="projects_button button button_small">
                  <i className="ri-link" />
                </a>
              </div>
            </div>
          </article>
        </div>
        {/*=============== SKILLS ===============*/}
        <div className={`skills_content grid ${activeTab === "#skills" ? "filters_active" : ""}`} id="skills" data-content="#skills">
          <div className="skills_area">
            <h3 className="skills_title">Frontend Developer</h3>
            <div className="skills_box">
              <div className="skills_group">
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">HTML</h3>
                    <span className="skils_level">Advanced</span>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">CSS</h3>
                    <span className="skils_level">Advanced</span>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">JavaScript</h3>
                    <span className="skils_level">Advanced</span>
                  </div>
                </div>
              </div>
              <div className="skills_group">
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">React</h3>
                    <span className="skils_level">Intermediate</span>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">Bootstrap</h3>
                    <span className="skils_level">Basic</span>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">Git</h3>
                    <span className="skils_level">Advanced</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="skills_area">
            <h3 className="skills_title">Backend Developer</h3>
            <div className="skills_box">
              <div className="skills_group">
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">PHP</h3>
                    <span className="skils_level">Basic</span>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">MySQL</h3>
                    <span className="skils_level">Intermediate</span>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">Java</h3>
                    <span className="skils_level">Intermediate</span>
                  </div>
                </div>
              </div>
              <div className="skills_group">
                <div className="skills_data">
                  <i className="ri-close-circle-line no-checked" />
                  <div>
                    <h3 className="skills_name">Pyton</h3>
                    <span className="skils_level">Coming soon</span>
                  </div>
                </div>
                <div className="skills_data">
                  {/* <i class="ri-leaf-line learning"></i> */}
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">Node Js</h3>
                    <span className="skils_level">Intermediate</span>
                  </div>
                </div>
                <div className="skills_data">
                  <i className="ri-checkbox-circle-line" />
                  <div>
                    <h3 className="skills_name">Express</h3>
                    <span className="skils_level">Basic</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>   
  </main>
  )
}   
    