import "../assets/CSS/Sec-8-education.css";

import Student from "../assets/images/student.png";
import MultiUseBtn from "../shared/btns/MultiUseBtn.jsx";
import Calender from "../assets/images/calendar.png";
import Building from "../assets/images/office-building.png";
import Location from "../assets/images/placeholder.png";

function Sec8Education() {
  return (
    <div className="container Sec-8">
      <h2>Education</h2>
      <div className="edu-info">
        <div className="card">
          <div className="top">
            <MultiUseBtn img={Calender} title="2022 - 2025" />
            <MultiUseBtn img={Student} title="Gradutaion" bgColor="#121212" />
          </div>
          <div className="bot">
            <h2>Bachelor of Technology</h2>
            <p>Computer Science & engineering</p>
            <div>
              <img src={Building} alt="office building" />
              <span>University of Lucknow</span>
            </div>

            <div>
              <img src={Location} alt="location" />
              <span>Lucknow, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <MultiUseBtn img={Calender} title="2019 - 2022" />
            <MultiUseBtn img={Student} title="Diploma" bgColor="#121212" />
          </div>
          <div className="bot">
            <h2>Diploma in Engineering</h2>
            <p>Computer Science & engineering</p>
            <div>
              <img src={Building} alt="office building" />
              <span>Govt. Polytechnic Jaunpur</span>
            </div>

            <div>
              <img src={Location} alt="location" />
              <span>Jaunpur, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec8Education;
