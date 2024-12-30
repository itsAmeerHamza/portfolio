import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const Buttons = () => {
  return (
    <div id="icon-container">
      <a
        id="github"
        href="https://github.com/itsAmeerHamza"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faSquareGithub} />
      </a>
      <a
        id="linkedin"
        href="https://www.linkedin.com/in/itsameerhamza"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        id="email"
        href="mailto:hamzaameer24@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        id="resume"
        href="https://drive.google.com/file/d/1MzW3M3b81GqLKkSyWnii759Swq6WLtmt/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFile} style={{ color: "#ffffff" }} />
      </a>
    </div>
  );
};

export default Buttons;
