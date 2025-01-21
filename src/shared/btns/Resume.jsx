import "./Resume.css";
import download from "../../assets/images/download.png";

function Resume() {
  return (
    <div className="resume">
      <img src={download} alt="resume" />
      <a>Resume</a>
    </div>
  );
}

export default Resume;
