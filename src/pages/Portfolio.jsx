import "./Portfolio.css";
import facebook from "../assets/facebook.png"
import git from  "../assets/git.png"

import Modalcv from "../components/ModalCv";

export default function Portfolio() {
  return (
    <div className="portfo">
      <h1 className="title">portfolio</h1>
      <h1>Personnal project</h1>

      <span>
        <a href="https://www.studiogruhl.com/projects"></a>
      </span>

      <Modalcv />
      <div className="socialMedia">
      <a href="https://www.facebook.com/simon.thore.3" target="_blank" rel="noreferrer">
        <img
          className="logo hover:scale-150 cursor-pointer"
          src={facebook}
          alt="logoFacebook"
          height="40px"
          width="40px"
        />
        </a>
          <a href="https://github.com/simonthore?tab=repositories" target="_blank" rel="noreferrer">
        <img
        
          className="logo hover:scale-150 cursor-pointer"
          src={git}
          alt="logoGitHub"
          height="40px"
          width="40px"
        />
        </a>
      </div>
    </div>
  );
}
