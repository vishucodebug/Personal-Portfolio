import "../assets/CSS/Sec-4-about.css";
import ManWorking from "../assets/images/man-working.png";

function Sec4About() {
  return (
    <div className="container">
      <div className="sec-4">
        <h2>About me</h2>
        <div className="content">
          <div className="img">
            <img src={ManWorking} alt="ManWorking img" />
          </div>
          <div className="abt-content">
            <p>
              I am a <b> B.Tech student </b> , <b> aspiring web designer </b>
              and <b> full-stack developer </b>, known for{" "}
              <b> creating modern </b>, <b> responsive designs </b> using Figma
              and turning them into fully functional web applications. With
              skills in <b> HTML </b>, <b> CSS </b>, <b> JavaScript </b>, and
              <b> React </b> , I build clean, user-friendly interfaces. Eager to
              make a meaningful impact, I am also learning full-stack
              development with the <b> MERN stack </b> , focusing on both
              <b> front-end design </b> & <b> back-end development </b> to
              deliver high-performance solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec4About;
