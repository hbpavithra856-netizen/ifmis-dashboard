function InfoTile(props) {
  return (
    <div style={{
      backgroundColor: props.color,
      padding: "15px",
      borderRadius: "8px",
      width: "120px",
      textAlign: "center"
    }}>
      <p>{props.label}</p>
      <h3>{props.value}</h3>
    </div>
  );
}

export default InfoTile;