import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <footer>
      <ul>
        <IconContext.Provider value={{ color: "#C3ACCE" }}>
          <li><FaLinkedin /></li>
          <li><FaGithubSquare /></li>
        </IconContext.Provider>
      </ul>
    </footer>
  );
}

export default Footer;
