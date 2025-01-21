import "../assets/CSS/Sec-2.css";
import Vishu from "../assets/images/vishal-img.png";
import Bootstrap from "../assets/images/bootstrap.png";
import Nodejs from "../assets/images/nodejs.png";
import VsCode from "../assets/images/vs-code.png";
import React from "../assets/images/react.png";
import Css from "../assets/images/css.png";
import Js from "../assets/images/js.png";
import Sql from "../assets/images/sql.png";
import Github from "../assets/images/github.png";
import Html from "../assets/images/html.png";
import Figma from "../assets/images/figma.png";

function Sec2() {
  return (
    <div className="container">
      <div className="sec-2">
        <img src={Bootstrap} className="img-1" alt="Bootstrap-img" />
        <img src={Nodejs} className="img-2" alt="Nodejs-img" />
        <img src={VsCode} className="img-3" alt="VsCode-img" />
        <img src={React} className="img-4" alt="React-img" />
        <img src={Css} className="img-5" alt="Css-img" />
        <img src={Js} className="img-6" alt="Js-img" />
        <img src={Sql} className="img-7" alt="Sql-img" />
        <img src={Github} className="img-8" alt="Github-img" />
        <img src={Html} className="img-9" alt="Html-img" />
        <img src={Figma} className="img-10" alt="Figma-img" />
        <div className="img-box">
          <img src={Vishu} alt="Vishal-img" />
        </div>
      </div>
    </div>
  );
}

export default Sec2;
