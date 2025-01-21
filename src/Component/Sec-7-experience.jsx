import "../assets/CSS/Sec-7-experience.css";

import Company from "../assets/images/office-building.png";
import Calender from "../assets/images/calendar.png";
import Profile from "../assets/images/freelancer.png";
import MultiUseBtn from "../shared/btns/MultiUseBtn.jsx";

function Sec7Experience() {
  return (
    <div className="container Sec-7">
      <h2>Experience</h2>
      <div className="company">
        <div className="top">
          <div className="comName">
            <div className="img">
              <img src={Company} alt="office building img" />
            </div>
            <div className="content">
              <h3>SpocDev Technologies</h3>
              <p>Lucknow, Uttar Pradesh , India</p>
            </div>
          </div>
          <MultiUseBtn img={Calender} title="August 2024 - Present" />
        </div>
        <div className="mid">
          <img src={Profile} alt="img" />
          <span>Web Designer</span>
        </div>
        <div className="bot">
          <ul>
            <li>
              
              <strong>Professional Experience:</strong> Worked as a web designer for 6
              months at SPO Dev Technology, gaining practical knowledge in
              designing and developing web pages.
            </li>
            <li>
              
              <strong> Technical Expertise:</strong> Proficient in HTML, CSS, Bootstrap,
              and JavaScript, along with design tools like Figma and Photoshop,
              ensuring responsive and aesthetically appealing designs.
            </li>
            <li>
              
              <strong>Key Achievements:</strong> Successfully created and integrated 30+
              modern web pages, focusing on clean code, cross-browser
              compatibility, and seamless user experiences.
            </li>
            <li>
              
              <strong>Learning and Growth:</strong> Strengthened skills in front-end
              development and design, upskilling the integration of creative
              tools with coding to deliver impactful solutions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sec7Experience;
