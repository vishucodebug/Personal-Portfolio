import "../assets/CSS/Sec-6-technology.css";
// technology image
import HTML from "../assets/images/html.png";
import CSS from "../assets/images/css.png";
import JS from "../assets/images/js.png";
import Bootstrap from "../assets/images/bootstrap.png";
import Nodejs from "../assets/images/nodejs.png";
import React from "../assets/images/react.png";
import Express from "../assets/images/icons8-express-js-512.png";
import Mongo from "../assets/images/mongo-db.png";
import Mysql from "../assets/images/icons8-mysql-480.png";
import SQL from "../assets/images/sql.png";

//tools i use
import Figma from "../assets/images/figma.png";
import Github from "../assets/images/github.png";
import VSCode from "../assets/images/icons8-vs-code-400.png";
import VisualStudio from "../assets/images/icons8-visual-studio-64.png";

import TechTools from "../shared/btns/Tech&ToolsCard.jsx";

function Sec6Technology() {
  return (
    <div className="container Sec-6">
      {/* technologies i use  */}
      <h2>Technologies I Use</h2>
      <div className="technology">
        <TechTools img={HTML} title="HTML" />
        <TechTools img={CSS} title="CSS" />

        <TechTools img={Bootstrap} title="Bootstrap" />
        <TechTools img={JS} title="JavaScript" />
        <TechTools img={React} title="React.JS" />
        <TechTools img={Nodejs} title="node.js" />
        <TechTools img={Express} title="express.js" />
        <TechTools img={Mongo} title="mongoDB" />
        <TechTools img={SQL} title="SQL" />
        <TechTools img={Mysql} title="MySQL" />
      </div>
      {/* tools i use  */}
      <h2>Tools I Use</h2>
      <div className="technology">
        <TechTools img={Figma} title="Figma" />
        <TechTools img={Github} title="Github" />
        <TechTools img={VSCode} title="VS Code" />
        <TechTools img={VisualStudio} title="Visual Studio" />
      </div>
    </div>
  );
}

export default Sec6Technology;
