import './../css/Header.css'
import { useEffect } from 'react';
import { useContext } from 'react';
import AppContext from '../context/index';
export default function Header() {
  const {handleTheme, toggleTheme, icon, theme, user, views, getViews, years} = useContext(AppContext);
  const {name, profession, instagram, linkedin, github, first, second, third, whatsapp, messenger, resume} = user;
  useEffect(() => {
    handleTheme();
    getViews();
  }, [])
  return (
    <header className="profile container">
        {/* Theme button */}
        <i className={`${icon} change_theme`} onClick={toggleTheme} />
        {/* Profile data */}
        <div className="profile_container grid">
          <div className="profile_data">

            <div className="profile_border">
              <div className="profile_perfil">
                <img src="/img/perfil.png" alt="perfil image" />
              </div>
            </div>
            <h2 className="profile_name">{name}</h2>
            <h3 className="profile_profession">{profession}</h3>
            <ul className="profile_social">
              <a href={instagram} target="_blank" rel="noreferrer" className="profile_social-link">
                <i className="ri-instagram-line" />
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer" className="profile_social-link">
                <i className="ri-linkedin-line" />
              </a>
              <a href={github} target="_blank" rel="noreferrer" className="profile_social-link">
                <i className="ri-github-line" />
              </a>
            </ul>
          </div>
          <div className="profile_info grid">
            <div className="profile_info-group">
              <h3 className="profile_info-number">{years}</h3>
              <p className="profile_info-description" dangerouslySetInnerHTML={{ __html: first }}></p>
            </div>
            <div className="profile_info-group">
              <h3 className="profile_info-number">3</h3>
              <p className="profile_info-description" dangerouslySetInnerHTML={{ __html: second }}></p>
            </div>
            <div className="profile_info-group">
              <h3 className="profile_info-number">{views}</h3>
              <p className="profile_info-description" dangerouslySetInnerHTML={{ __html: third }}></p>
            </div>
          </div>
          <div className="profile_buttons">
              {/* from RGB-effect */}
            <div className="outer">
            {/* download CV */}
              <a download={`${resume}.pdf`} href={theme === "dark-theme" ? `./../../public/pdf/${resume}-dark.pdf` : `./../../public/pdf/${resume}-light.pdf`} className="button">Download CV <i className="ri-download-line" /></a>
            </div>
            <div className="profile_buttons-small">
              <a href={whatsapp} className="button button_small button_gray" target="_blank" rel="noreferrer">
                <i className="ri-whatsapp-line" />
              </a>
              <a href={messenger} className="button button_small button_gray" target="_blank" rel="noreferrer">
                <i className="ri-messenger-line" />
              </a>
            </div>
          </div>
        </div>
    </header>
  )
}
