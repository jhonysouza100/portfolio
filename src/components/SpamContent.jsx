import './../css/SpamContent.css';
export default function SpamContent() {
  return(
    <div className="spam_content">
        <div className="content_box is-link">
          <header>Hello!</header>
          <div className="content">
            {/* <==== Text ====> */}
            <div className="text">
              <i className="ri-double-quotes-l"></i>
              <div className="spam_text">Nice to meet you, my name is Jhonatan. I am a Systems Engineer and Web Developer, I am currently working freelance with companies in my area. If you are looking to bring an idea to life or a helping hand on a project, contact me and we can work together.</div>
              <i className="ri-double-quotes-r"></i>
            </div>
            {/* <==== Author ====> */}
            <div className="author">
              <span>__</span>
              <span className="author_name">thank you very much!</span>
            </div>
          </div>

          {/* <===== Player Controls =====> */}
          <div className="player_controls">
            <div className="player_buttons">
              <ul>
                <li className="play_pause-button btn">
                  <i className="ri-volume-up-fill play_sound-btn"></i>
                  <i className="ri-pause-fill pause_sound-btn hide"></i>
                </li>
                <li className="stop_button btn"><i className="ri-stop-fill"></i></li>
              </ul>
              <div className="exit_button btn"><i className="ri-close-line"></i></div>
            </div>
          </div>
        </div>
      </div>
  )
}