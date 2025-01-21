import "./SmallTechTools.css";

function SmallTechTools({ img, title }) {
  return (
    <div className="smallTech ">
      <div className="card">
        <img src={img} alt=" img" />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default SmallTechTools;
