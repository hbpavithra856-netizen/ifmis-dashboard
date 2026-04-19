function InfoTile({ label, value, color }) {
  return (
    <div
      style={{
        padding: "15px",
        borderRadius: "10px",
        backgroundColor: color,
        minWidth: "120px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <p style={{ margin: 0 }}>{label}</p>
      <h4 style={{ margin: 0 }}>{value}</h4>
    </div>
  );
}

export default InfoTile;