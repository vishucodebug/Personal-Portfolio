import "../assets/CSS/Sec-5-hobbies.css";
import Van from "../assets/images/camping-van.png";
import Music from "../assets/images/romantic-music.png";
import Code from "../assets/images/programmer.png";
import Movies from "../assets/images/theater.png";

function Sec5Hobbies() {
  return (
    <div className="container">
      <h2>I love to do</h2>
      <div className="sec-5">
        <div className="card">
          <img src={Van} alt="van img" />
          <p>Travelling</p>
        </div>
        <div className="card">
          <img src={Music} alt="van img" />
          <p>Listening Music</p>
        </div>
        <div className="card">
          <img src={Code} alt="van img" />
          <p>Coding</p>
        </div>
        <div className="card">
          <img src={Movies} alt="van img" />
          <p>Movies</p>
        </div>
      </div>
    </div>
  );
}

export default Sec5Hobbies;
