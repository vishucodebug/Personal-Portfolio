import "./Testimonials.css";

import Comma from "../../assets/images/comma.png";
import profileImg from "../../assets/images/freelancer.png";
import LinkedIn from "../../assets/images/linkedin.png";
// import Bootstrap from "../../assets/images/bootstrap.png";

// import ProjectImg from "../../assets/images/project-img.png";

function Testimonials({ name, role, review, linkedInURL }) {
  return (
    <div className="Testimonials ">
      <div className="top">
        <img src={Comma} alt="Image" />
        <p>{review}</p>
      </div>
      <div className="bot">
        <div className="profileImg">
          <img src={profileImg} alt="Profile Image" />
        </div>
        <div className="Info">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
        <div className="linkedin">
          <a href="{linkedInURL}">
            <img src={LinkedIn} alt="Image" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
