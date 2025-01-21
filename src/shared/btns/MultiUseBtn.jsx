import "./MultiUseBtn.css";

function MultiUseBtn({ img, title, bgColor }) {
  return (
    <div
      className="MultiUseBtn"
      style={{
        backgroundColor: bgColor || "#f1f1f1",
      }}
    >
      <img src={img} alt="calender img" />
      <span>{title}</span>
    </div>
  );
}

export default MultiUseBtn;
