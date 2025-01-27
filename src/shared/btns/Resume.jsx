import "./Resume.css";
import download from "../../assets/images/download.png";

function Resume() {
  return (
    <div className="resume">
      <img src={download} alt="resume" />
      <a href="https://drive.google.com/file/d/1hlBEkB_xyd_1HOhqezVNcKR-YllSPFF0/view?usp=drive_link">Resume</a>
    </div>
  );
}

export default Resume;
