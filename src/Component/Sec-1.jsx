import "../assets/CSS/Sec-1.css";
import robo from "../assets/images/robot-icon.png";
import Resume from "../shared/btns/Resume.jsx";
import HireMe from "../shared/btns/HireMe.jsx";

function Sec1() {
  return (
    <div className="container">
      <div className="sec-1">
        <div className="top">
          <img src={robo} alt="robot-icon" /> <span>Hey ! there</span>
        </div>
        <div className="middle">
          <h1>I'm Vishal Maurya</h1>
          <h2>
            a <b>Web Designer</b>, <b>Front-end Developer</b> &
            <b> Mern Stack Developer</b> with <span>0.5+ months</span> of
            experience.
          </h2>
          <p>
            I’m a web Developer with expertise in Designing
            <b> fully Responsive</b> & <b>creative</b> web pages. Also working
            on
            <b> Full stack web</b> application using <b>MERN</b> technologies.
          </p>
        </div>
        <div className="bottom">
          <Resume />
          <HireMe />
        </div>
      </div>
    </div>
  );
}

export default Sec1;
