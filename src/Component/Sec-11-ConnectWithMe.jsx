import "../assets/CSS/Sec-11-ConnectWithMe.css";
import VishalImg from "../assets/images/vishal-img.png";
import linkedin from "../assets/images/linkedin.png";
import Gmail from "../assets/images/gmail.png";
import Github from "../assets/images/github.png";
import Whatsapp from "../assets/images/whatsapp.png";

import Resume from "../shared/btns/Resume.jsx";
import HireMe from "../shared/btns/HireMe.jsx";

import TechTools from "../shared/btns/Tech&ToolsCard.jsx";

function Sec11ConnectWithMe() {
  return (
    <div className="container Sec-11" id="connectWithMe">
      <h2>Connect with me</h2>
      <div className="connectWithMe">
        <div className="top">
          <img className="vishalimg" src={VishalImg} alt="Vishal maurya" />
          <h1>Vishal maurya</h1>
          <h3>Web Designer, Front-end Developer & MERN Stack Developer</h3>
          <div className="btns">
            <Resume />

            <HireMe />
          </div>
        </div>
        <div className="bot">
          <a href="http://wa.me/+917985646893" target="_blank">
            <TechTools img={Whatsapp} title="+91 79856-46893" />
          </a>
          <a href="https://github.com/vishucodebug" target="_blank">
            <TechTools img={Github} title="vishucodebug" />
          </a>
          <a href="https://www.linkedin.com/in/vishu-maurya/" target="_blank">
            <TechTools img={linkedin} title="Vishal Maurya" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vishu.codebug@gmail.com&su=Query from Vishal's Portfolio&body=Hey, How are you doing !"
            target="_blank"
          >
            <TechTools img={Gmail} title="vishu.codebug@gmail.com" />
          </a>
        </div>
      </div>
      <div className="work">
        <p>Want to work with me</p>
        <p>
          Send an{" "}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=vishu.codebug@gmail.com&su=Query from Vishal's Portfolio&body=Hey, How are you doing !"
            target="_blank"
          >
            Email
          </a>{" "}
          or{" "}
          <a href="http://wa.me/+917985646893" target="_blank">
            WhatsApp
          </a>
        </p>
      </div>
    </div>
  );
}
export default Sec11ConnectWithMe;
