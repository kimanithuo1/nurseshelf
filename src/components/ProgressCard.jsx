const ProgressCard = ({ title, progress, color }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "0.5rem",
        padding: "1.5rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        border: "1px solid #B7DBC8",
      }}
    >
      <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.75rem", color: "#285D66" }}>{title}</h3>
      <div
        style={{
          width: "100%",
          backgroundColor: "#B7DBC8",
          borderRadius: "9999px",
          height: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        <div
          style={{
            height: "1rem",
            borderRadius: "9999px",
            backgroundColor: color,
            width: `${progress}%`,
          }}
        ></div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.875rem", color: "#666666" }}>
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
    </div>
  )
}

export default ProgressCard

