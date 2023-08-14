import './../css/Header.css'
import { useState, useEffect } from 'react';
export default function Header() {
  const [theme, setTheme] = useState('light-theme');
  const [icon, setIcon] = useState('ri-moon-line');
  const handleTheme = () => {
    const selectedTheme = localStorage.getItem("selected-theme");
    const selectedIcon = localStorage.getItem("selected-icon");

    // SI no hay un theme guardado en el localStorage, entonces se mantiene la configuracion por defecto
    if(!selectedIcon && selectedTheme) return false
    // De lo contrario, se guardan en el state los datos del theme seleccionado
    setTheme(selectedTheme)
    setIcon(selectedIcon)
  }
  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    const newIcon = icon === 'ri-moon-line' ? 'ri-sun-line' : 'ri-moon-line';
    setTheme(newTheme);
    setIcon(newIcon);
    localStorage.setItem("selected-theme", newTheme);
    localStorage.setItem("selected-icon", newIcon);
  };
  useEffect(() => {
    handleTheme()
  }, [])
  return (
    <header className="profile container">
        {/* Theme button */}
        <i className={`${icon} change_theme`} id="theme-button" onClick={() => toggleTheme()} />
        {/* Profile data */}
        <div className="profile_container grid">
          <div className="profile_data">

            <div className="profile_border">
              <div className="profile_perfil">
                <img src="/img/perfil.png" alt="perfil image" />
              </div>
            </div>
            <h2 className="profile_name">Jhony Souza</h2>
            <h3 className="profile_profession">Web developer</h3>
            <ul className="profile_social">
              <a href="https://www.instagram.com/jhonysouza100/" target="_blank" className="profile_social-link">
                <i className="ri-instagram-line" />
              </a>
              <a href="https://linkedin.com/" target="_blank" className="profile_social-link">
                <i className="ri-linkedin-line" />
              </a>
              <a href="https://github.com/WarDog1000" target="_blank" className="profile_social-link">
                <i className="ri-github-line" />
              </a>
            </ul>
          </div>
          <div className="profile_info grid">
            <div className="profile_info-group">
              <h3 className="profile_info-number">1</h3>
              <p className="profile_info-description">Year of<br />work</p>
            </div>
            <div className="profile_info-group">
              <h3 className="profile_info-number">3</h3>
              <p className="profile_info-description">Certifications<br /></p>
            </div>
            <div className="profile_info-group">
              <h3 className="profile_info-number">3</h3>
              <p className="profile_info-description">Views<br /></p>
            </div>
          </div>
          <div className="profile_buttons">
              {/* from RGB-effect */}
            <div className="outer">
            {/* Insert your CV */}
              <a download="jhon-souza-resume.pdf" href={theme === "dark-theme" ? "./../../public/pdf/jhon-souza-resume-dark.pdf" : "./../../public/pdf/jhon-souza-resume-light.pdf"} className="button">Download CV <i className="ri-download-line" /></a>
              {/* <span />
              <span /> */}
            </div>
            <div className="profile_buttons-small">
              <a href="https://api.whatsapp.com/send?phone=543757501633&text=Hello, let's go to work" className="button button_small button_gray" target="_blank">
                <i className="ri-whatsapp-line" />
              </a>
              <a href="https://m.me/jhon.souza.7547" className="button button_small button_gray" target="_blank">
                <i className="ri-messenger-line" />
              </a>
            </div>
          </div>
        </div>
    </header>
  )
}
