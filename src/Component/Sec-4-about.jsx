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
              I’m a <b>creative web designer</b> and <b>full-stack developer</b>{" "}
              with <b>5+ months</b> of experience creating modern, responsive
              designs using <b>Figma</b> and transforming them into{" "}
              <b>functional web applications</b>. Proficient in{" "}
              <b>HTML, CSS, JavaScript, and React</b>, I build user-friendly
              interfaces with clean, efficient code. Currently honing my skills
              in the <b>MERN stack</b>, I focus on blending{" "}
              <b>front-end creativity</b>
              with <b>back-end efficiency</b> to deliver impactful,
              high-performance digital solutions. Whether{" "}
              <b>designing sleek visuals</b> or developing robust solutions, I
              aim to deliver products that leave a lasting impression on users
              and clients alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec4About;
