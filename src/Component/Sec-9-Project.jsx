import "../assets/CSS/Sec-9-Project.css";

import ComProject from "../shared/btns/ComProject.jsx";
import PerProject from "../shared/btns/PerProject.jsx";

function Sec9Project() {
  return (
    <div id="work" className="container Sec-9">
      <h2>Project I’ve worked on</h2>
      <ComProject />
      <h2>Personal Project</h2>
      <PerProject />
    </div>
  );
}

export default Sec9Project;
