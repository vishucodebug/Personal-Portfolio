import "./Tech&ToolsCard.css";

function TechTools({ img, title, width }) {
  return (
    <div className="tech ">
      <div className="card">
        <img src={img} alt=" img" />
        <p>{title}</p>
      </div>
    </div>
  );
}

export default TechTools;
