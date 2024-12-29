import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const Buttons = () => {
  return (
    <div className="icon-container">
      <FontAwesomeIcon id="github" icon={faSquareGithub} />
      <FontAwesomeIcon id="linkedin" icon={faLinkedin} />
      <FontAwesomeIcon id="email" icon={faEnvelope} />
      <FontAwesomeIcon id="resume" icon={faFile} style={{ color: "#ffffff" }} />
    </div>
  );
};

export default Buttons;
